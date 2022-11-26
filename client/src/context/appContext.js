import React, { useContext, useReducer} from "react";
import reducer from './reducer'

import { DISPLAY_ALERT } from "./actions"

const initialState = {
    isLoading: false, 
    showAlert: false, 
    alertText : '',
    alertType: '',
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const displayALert = () => {
        dispatch({type:DISPLAY_ALERT})
    }
    return(
     <AppContext.Provider value={{ ...state, displayALert }}>
        {children}
    </AppContext.Provider>
    )
}
const useAppContext = () => {
    return useContext(AppContext); 
}

export {AppProvider, initialState, useAppContext}