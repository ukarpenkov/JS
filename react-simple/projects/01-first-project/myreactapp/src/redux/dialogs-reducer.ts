import { type } from 'os'

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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

export type InitialSateType = typeof initialSate

const dialogsReducer = (state = initialSate, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
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
type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}
export const sendMessageCreator = (
  newMessageBody: string
): sendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
})
// export const updateNewMessageBodyCreator = (body) =>
//     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer
