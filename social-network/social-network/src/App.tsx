import React from 'react'
import logo from './logo.svg'
import './App.css'

type AdressType = {
  city: string
  country: string
}

type UserType = {
  name: string
  age: number
  address: AdressType | null
}

let user: UserType = {
  name: 'Ura',
  age: 30,
  address: null,
}
console.log(user.name)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
