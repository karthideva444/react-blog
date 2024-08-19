import React from 'react';
import './Themeswitch.css';
import { useThemeContext } from '../hooks/useThemeContext';

export function Themeswitch() {

    const {theme,dispatch} = useThemeContext()

    const switchTheme = ()=>{                
        if (theme === 'light') {
            dispatch({type:'DARK'})
        }else{
            dispatch({type:'LIGHT'})
        }
        console.log(theme);
        
    }
    return (
        <div className="container">
        <div className="form-check form-switch">
            <input className="form-check-input"
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault"
            onClick={switchTheme}
            />
        </div>
        </div>
    )
}
