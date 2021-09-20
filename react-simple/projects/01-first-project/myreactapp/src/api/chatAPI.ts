import { type } from 'os'

const subscribers = {
  'message-received': [] as MessagesReceivedSubscriberType[],
  'status-change': [] as StatusChangedSubscriberType[],
}
let wsChanel: WebSocket | null = null

type EventsNamesType = 'message-received' | 'status-change'

const closeHandler = () => {
  notifySubscribersAboutStatus('pending')
  setTimeout(createChanel, 3000)
}
const cleanUp = () => {
  wsChanel?.removeEventListener('close', closeHandler)
  wsChanel?.removeEventListener('message', messageHandler)
  wsChanel?.removeEventListener('open', openHandler)
  wsChanel?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
  subscribers['status-change'].forEach((s) => s(status))
}

function createChanel() {
  cleanUp()
  wsChanel?.removeEventListener('close', closeHandler)
  wsChanel?.close()
  wsChanel = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  )
  notifySubscribersAboutStatus('pending')
  wsChanel.addEventListener('close', closeHandler)
  wsChanel.addEventListener('message', messageHandler)
  wsChanel.addEventListener('open', openHandler)
  wsChanel.addEventListener('error', errorHandler)
}

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data)
  subscribers['message-received'].forEach((s) => s(newMessages))
}
const openHandler = () => {
  notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
  notifySubscribersAboutStatus('error')
  console.error('Refresh PAGE!')
}

export const chatAPI = {
  start() {
    createChanel()
  },
  stop() {
    subscribers['message-received'] = []
    subscribers['status-change'] = []
    cleanUp()
    wsChanel?.close()
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName].push(callback)
    return () => {
      //@ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(
        //@ts-ignore
        (s) => s !== callback
      )
    }
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(
      //@ts-ignore
      (s) => s !== callback
    )
  },
  sendMessage(message: string) {
    wsChanel?.send(message)
  },
}

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

export type StatusType = 'pending' | 'ready' | 'error'
