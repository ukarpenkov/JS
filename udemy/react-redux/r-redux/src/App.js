import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import Counter from './Counter'
import { add, addNumber, asyncAdd, sub } from './redux/actions/actions'


class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.onAdd10}>+10</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>+ 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>- 17</button>
          <button onClick={this.props.toNull}>0</button>

        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(1000)}>async +1000</button>
        </div>
        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAdd10: () => dispatch({ type: 'ADD10' }),
    onAddNumber: number => dispatch(addNumber(number)),
    toNull: number => dispatch({ type: 'TO_NULL', payload: number }),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
