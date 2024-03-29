import { Avatar } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatMessageType } from '../../api/chatAPI'
import {
  startMessagesListening,
  stopMessagesListening,
  sendMessage,
} from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'

const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}
let ws: WebSocket
const Chat: React.FC = () => {
  const dispatch = useDispatch()

  const status = useSelector((state: AppStateType) => state.chat.status)
  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, [])

  return (
    <div>
      {status === 'error' && <div>Error!!! Please Refresh Page</div>}

      <>
        <Messages />
        <AddMessageForm />
      </>
    </div>
  )
}
const Messages: React.FC<{}> = ({}) => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)
  const messagesAnchorRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !isAutoScroll && setIsAutoScroll(true)
    } else {
      isAutoScroll && setIsAutoScroll(false)
    }
  }

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  return (
    <div
      style={{
        height: '600px',
        overflow: 'auto',
      }}
      onScroll={scrollHandler}
    >
      {messages.map((m, index) => (
        <Message message={m} key={m.id} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  )
}
const Message: React.FC<{ message: ChatMessageType }> = React.memo(
  ({ message }) => {
    return (
      <div>
        <img src={message.photo} style={{ width: '30px' }} />{' '}
        <b>{message.userName}</b>
        <br />
        {message.message}
        <hr />
      </div>
    )
  }
)
const AddMessageForm: React.FC<{}> = () => {
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const status = useSelector((state: AppStateType) => state.chat.status)
  const sendMessageHandler = () => {
    if (!message) {
      return
    }
    dispatch(sendMessage(message))
    setMessage('')
  }
  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button disabled={status !== 'ready'} onClick={sendMessageHandler}>
          Отправить
        </button>
      </div>
    </div>
  )
}

export default ChatPage
