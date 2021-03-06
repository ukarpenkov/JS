const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialSate =
{
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi Man! How Are You???' },
        { id: 3, message: 'Im gonna learn JS!' },
        { id: 4, message: 'How you filling???' }
    ],
    dialogs: [
        { id: 1, name: 'Ura' },
        { id: 2, name: 'Valeriia' },
        { id: 3, name: 'Alexander' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Marina' },
        { id: 6, name: 'Valentin' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state }
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE: {
            let stateCopy = { ...state }
            let body = state.newMessageBody
            state.newMessageBody = ''
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({ id: 5, message: body })
            return stateCopy
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;