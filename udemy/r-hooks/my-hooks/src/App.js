import React, { useState, useEffect } from 'react'


function useLogger(value) {
  useEffect(() => {
    console.log('value changed', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }
  return {
    value, onChange
  }

}

function App() {

  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  const input = useInput('')
  // const changeHandler = event => {
  //   setName(event.target.value)
  // }
  // const lastNameHandler = event => {
  //   setLastName(event.target.value)
  // }

  useLogger(input.value)
  return (
    <div className={'container pt-3'}>

      <input type='text' {...input} />
      {/* <input type='text' value={lastName} onChange={lastNameHandler} /> */}
      <hr />
      <h1>{input.value} </h1>
    </div>
  );
}

export default App;
