import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import thunkMiddleware from 'redux-thunk'

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch

//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//         return originalDispatch(action)
//     }
//     return store

// }

const logMiddleware = ({ getState, dispatch }) => (dispatch) => (action) => {
    console.log(action.type)
    return dispatch(action)
}

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({
            type: action
        })
    }
    return dispatch(action)
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware))



const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}

store.dispatch(delayedActionCreator(3000))

export default store