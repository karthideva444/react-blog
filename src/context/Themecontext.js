import { createContext, useReducer } from "react";

export const Themecontext = createContext()

export const Themecontextprovider = ({children}) =>{

    const ThemesReducer = (state,action) => {
        switch(action.type){
            case('LIGHT'):
                return {...state,theme:'light'}
            case('DARK'):
                return {...state,theme:'dark'}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(ThemesReducer,{theme:'light'})

    return(
        <Themecontext.Provider value={{...state,dispatch}}> 
            {children}
        </Themecontext.Provider>
    )
}