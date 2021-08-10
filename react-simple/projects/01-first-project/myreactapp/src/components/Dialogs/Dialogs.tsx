import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { InitialSateType } from '../../redux/dialogs-reducer'

type PropsType = {
  dialogsPage: InitialSateType
  sendMessage: (messageText: string) => void
}

type NewMessageFormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage
  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ))

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElement}</div>
        <div className={s.messages}>
          <div>{messagesElement}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

type NewMessageFormValuesKeysType = Extract<
  keyof NewMessageFormValuesType,
  string
>

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>(
          'enter your message',
          'newMessageBody',
          [required, maxLength50],
          Textarea
        )}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm)

export default Dialogs
