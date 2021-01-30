import React from 'react'
import { useAlert } from './alert/AlertContext'


export default function Main() {
    const { show } = useAlert()
    return (
        <>
            <h1>Привет в примере с Контекстом</h1>
            <button onClick={() => show('Этот текст из мэйен жс')} className={'btn btn-success'}>Show ALERT</button>
        </>
    )
}