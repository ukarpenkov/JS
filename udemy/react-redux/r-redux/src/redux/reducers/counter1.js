import { ADD, ADD_NUMBER, SUB } from "../actions/actionTypes"

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case 'ADD10':
            return {
                counter: state.counter + 10
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            }
        case 'TO_NULL':
            return {
                counter: 0
            }
        default:
            return state
    }

}