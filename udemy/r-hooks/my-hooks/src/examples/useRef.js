import './App.css';
import React, { useEffect, useRef, useState } from 'react'


let renderCount = 1

function App() {
    //ниже бесконечный цикл
    // const [renderCount, setRenderCount] = useState(1)
    // useEffect(() => {
    //   setRenderCount(prev => prev + 1)
    // })
    //выше тоже
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const [value, setValue] = useState('initial')
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })
    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()
    return (
        <div>
            <h1>Кол-ов рендеров{renderCount.current}</h1>
            <h2>Прошлое состояние{prevValue.current}</h2>
            <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
            <button className='btn btn-success' onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
