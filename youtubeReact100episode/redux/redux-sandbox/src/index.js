import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
const { createStore } = require("redux")
const { default: reducer } = require("./reducer")


const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))





