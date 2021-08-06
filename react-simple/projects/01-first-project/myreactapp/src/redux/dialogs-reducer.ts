import { type } from 'os'
import { InferActionsTypes } from './redux-store'

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

type DialogType = {
  id: number
  name: string
}

type MessagesType = {
  id: number
  message: string
}
let initialSate = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi Man! How Are You???' },
    { id: 3, message: 'Im gonna learn JS!' },
    { id: 4, message: 'How you filling???' },
  ] as Array<MessagesType>,
  dialogs: [
    { id: 1, name: 'Ura' },
    { id: 2, name: 'Valeriia' },
    { id: 3, name: 'Alexander' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Marina' },
    { id: 6, name: 'Valentin' },
  ] as Array<DialogType>,
}

const dialogsReducer = (state = initialSate, action: ActionsType) => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE': {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      }
    }
    default:
      return state
  }
}

export const actions = {
  sendMessageCreator: (newMessageBody: string) =>
    ({
      type: 'SN/DIALOGS/SEND-MESSAGE',
      newMessageBody,
    } as const),
}

export default dialogsReducer

export type InitialSateType = typeof initialSate
type ActionsType = InferActionsTypes<typeof actions>
