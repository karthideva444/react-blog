import { useThemeContext } from '../hooks/useThemeContext'
import './Appsubmitbutton.css'

import React from 'react'

export function Appsubmitbutton({onClick,title}) {

    const {theme} = useThemeContext()

  return (
    <div>
         <button type='submit' onClick={onClick} className={`btn ${theme}btn`}>{title}</button>
    </div>
  )
}
