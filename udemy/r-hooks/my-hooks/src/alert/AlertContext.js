import React, { useContext, useReducer } from 'react'

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()
export const useAlert = () => {
    return useContext(AlertContext);
}
// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext);
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'show': return { ...state, visible: true, text: action.text }
        case 'hide': return { ...state, visible: false }
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    // const [alert, setAlert] = useState(false)
    // const toggle = () => setAlert(prev => !prev)
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })


    const show = text => dispatch({ type: 'show', text })
    const hide = () => dispatch({ type: 'hide' })

    return (
        <AlertContext.Provider value={{
            visible: state.visible, show, hide,
            text: state.text

        }}>
            {/* <AlertToggleContext.Provider value={toggle}> */}
            {children}
            {/* </AlertToggleContext.Provider> */}
        </AlertContext.Provider>
    )
}