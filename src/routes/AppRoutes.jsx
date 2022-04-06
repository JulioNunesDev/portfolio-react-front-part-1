import { Box, useTheme } from "@mui/material"
import { Routes,Route} from "react-router-dom"
import Home from "../shared/pages/Home"
import { Profile } from "../shared/pages/Profile"



export const AppRoutes=()=>{

    const theme = useTheme()
    return(
        <Box  width='100%' bgcolor={theme.palette.background.default} height='auto' display='flex'
        flexWrap='wrap' >

        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
           
        </Routes>
        </Box>
    )
}