import { ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";


export const ThemeContext = createContext({
    themeName: 'light' | 'dark',
    toggleTheme: ()=> {},
    theme: ()=>{},  
    valor: Boolean,
    handleClick: ()=>{}
    
   
})




export const AppThemeProvider =({children})=>{

    const [themeName, setThemeName]=useState(ThemeContext)

    const toggleTheme = useCallback(()=>{
        setThemeName(oldTheme => oldTheme === 'light' 
        ? 'dark' : 'light')
       
    },[themeName])  

    const theme = useMemo(()=>{
        if(themeName == 'light') return LightTheme
        return DarkTheme
    },[themeName])


     const [valor, setValor]=useState(false)

    const handleClick=useCallback(()=>{

        setValor(newValor => !newValor)
    
    },[valor])

    return(
        <ThemeContext.Provider value={{themeName,toggleTheme, theme, valor,
            handleClick}}>
             <ThemeProvider theme={theme}>
                {children}
             </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useAppThemeContext =()=>{
    return useContext(ThemeContext)
} 