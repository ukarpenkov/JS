import './App.css';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ItemsList from './itemsList';


function App() {

    const [number, setNumber] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(number).fill('').map((_, i) => `Элемент ${i + 1}`);
    }, [number])


    return (
        <>
            <h1 style={styles}>Кол элементов: {number}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>+</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>change</button>

            <ItemsList getItems={generateItemsFromAPI} />
        </>
    );
}

export default App;
