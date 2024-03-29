import './App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react'


function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++

    return num * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored])
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Styles Changed')
    }, [styles])

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>+</button>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev - 1)}>-</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>change</button>
        </>
    );
}

export default App;
