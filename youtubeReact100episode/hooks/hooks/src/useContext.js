import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext()
const App = () => {
  return <MyContext.Provider value='Heloooooooooooooooooo'>
    <Child />
  </MyContext.Provider>
}

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


