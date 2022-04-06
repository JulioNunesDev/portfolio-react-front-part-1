import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette:{
        mode: 'light',
        
        primary: {
            main:  'rgb(153, 78, 245)',
            dark: purple[800],
            light: purple[300]
        },
        secondary:{
            main: '#b75cff',
            dark: '#b71ae4',
            light: '#b71ae4'
        },
        background:{
            default: '#fafafa',
            paper: '#D9D9D9'

        },
        text:{
        primary: '#0f0f0f',
        secondary: 'rgb(115, 0, 255)',
        icon: 'rgb(115, 0, 255)'
        },
        action:{
            hover: '#444',
            hoverOpacity:0.4,              
                selected:'#181818',
                selectedOpacity: 1

            
        },
        
        

    },shape:{
        borderRadius: 4
    }
})