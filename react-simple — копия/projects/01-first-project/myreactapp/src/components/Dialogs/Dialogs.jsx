import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let OnSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElement}
                    </div>
                    <div>
                        <div>
                            <textarea value={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='enter your message'></textarea>
                        </div>
                        <div>
                            <button onClick={OnSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs