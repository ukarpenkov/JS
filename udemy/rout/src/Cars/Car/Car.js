import React from 'react'
import { withRouter } from 'react-router-dom'
import './Car.scss'


const Car = props => {
  return (
    <div className={'Car'}
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>

  )
}

export default withRouter(Car)