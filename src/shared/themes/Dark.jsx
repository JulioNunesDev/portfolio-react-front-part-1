import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";


export const DarkTheme = createTheme({
    
    palette:{
        mode: 'dark' 
     ,
        
        primary: {
            main:  'rgb(115, 0, 255)',
            dark: purple[800],
            light: purple[300],
            contrastText: '#fff'
        },
        secondary:{
            main: '#b71ae4',
            dark: '#8000a3',
            light: '#c530ee',
            contrastText: '#fff'

        },
        text:{
        primary: '#fafafa',
        secondary: '#fff',
        icon: 'rgb(198, 195, 203)',
        disabled: '#181818'
        }
        ,
        background:{
            default: '#0d0d0d',
            paper: '#181818'
        },
        action:{
            active: 'red',
            hover: '#444',
            hoverOpacity: 0.4,
            selected:'#181818',
            selectedOpacity: 1 
        }

    }
})