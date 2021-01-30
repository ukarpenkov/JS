import './App.css';
import React, { useState } from 'react'

function App() {
    const [counter, setCounter] = useState(0)
    const [state, setState] = useState({
        title: 'new name',
        date: Date.now()
    })
    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(ddd => {
            return {
                ...ddd,
                title: 'novoe nazv'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>+</button>
            <button onClick={decrement} className='btn btn-danger'>-</button>
            <button onClick={updateTitle} className='btn btn-danger'>change title</button>

            <pre>{JSON.stringify(state)}</pre>
        </div>
    );
}

export default App;
