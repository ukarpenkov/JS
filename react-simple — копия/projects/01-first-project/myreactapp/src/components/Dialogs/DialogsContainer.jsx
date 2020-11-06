import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//     return <StoreContext.Consumer>
//         {
//             store => {
//                 let state = store.getState().dialogsPage


//                 let OnSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body) => {

//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 return < Dialogs updateNewMessageBody={onNewMessageChange}
//                     sendMessage={OnSendMessageClick}
//                     dialogsPage={state} />
//             }
//         }
//     </StoreContext.Consumer>
// } до применения connect

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => { dispatch(sendMessageCreator()) },
        sendMessage: (body) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer