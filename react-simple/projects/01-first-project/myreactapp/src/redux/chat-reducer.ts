import { v1 } from 'uuid'
import { Dispatch } from 'redux'
import { FormAction, stopSubmit } from 'redux-form'
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api'
import { authAPI } from '../api/authAPI'
import { chatAPI, ChatMessageType, StatusType } from '../api/chatAPI'
import { securityAPI } from '../api/securityAPI'
import { BaseThunkType, InferActionsTypes } from './redux-store'
import { type } from 'os'

let initialState = {
  messages: [] as ChatMessageTypeWithoutAPI[],
  status: 'pending' as StatusType,
}

type ChatMessageTypeWithoutAPI = ChatMessageType & { id: string }

export type InitialStateType = typeof initialState

const chatReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'SN/chat/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.payload.messages.map((m) => ({ ...m, id: v1() })),
        ].filter((m, index, array) => index >= array.length - 100),
      }
    case 'SN/chat/STATUS_CHANGE':
      return {
        ...state,
        status: action.payload.status,
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({
      type: 'SN/chat/MESSAGES_RECEIVED',
      payload: { messages },
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: 'SN/chat/STATUS_CHANGE',
      payload: { status },
    } as const),
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
    }
  }
  return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-change', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-change', statusChangedHandlerCreator(dispatch))
  chatAPI.stop()
}
export const sendMessage =
  (message: string): ThunkType =>
  async (dispatch) => {
    chatAPI.sendMessage(message)
  }

export default chatReducer

export type InitialStateType2 = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null //если ноль, то каптча не обязательна
}
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
