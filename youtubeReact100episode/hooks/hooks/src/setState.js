import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    <HookSwitcher />
  </div>
}

const HookSwitcher = () => {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(14)

  return (<div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize }}>
    Hellooooooo
    <button onClick={() => { setColor('white') }}>White</button>
    <button onClick={() => { setColor('red') }}>Black</button>
    <button onClick={() => { setFontSize(5) }}>smallFS</button>
    <button onClick={() => { setFontSize(300) }}>bigFS</button>


  </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


