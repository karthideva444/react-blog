import { useContext } from "react"
import { Themecontext } from "../context/Themecontext"

export const useThemeContext = ()=>{

    const themecontext = useContext(Themecontext)

    if (themecontext === undefined) {
        throw new Error("Themecontext is undefine")
    }
    return themecontext
}