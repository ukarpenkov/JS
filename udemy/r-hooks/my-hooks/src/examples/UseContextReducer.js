import './App.css';
import React from 'react'
import Main from './Main';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';

export const AlertContext = React.createContext()

function App() {


  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => { }} />
      </div>
    </AlertProvider>

  );
}

export default App;
