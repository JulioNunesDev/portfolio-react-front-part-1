import { Box, useTheme } from "@mui/material"
import { Routes,Route} from "react-router-dom"
import { AppBarTopo } from "../shared/components/AppBarTopo"
import Home from "../shared/pages/Home"
import { Profile } from "../shared/pages/Profile"
import { Sugestoes } from "../shared/pages/Sugestoes"



export const AppRoutes=()=>{

    const theme = useTheme()
    return(
        <Box  width='100%' bgcolor={theme.palette.background.default} height='auto' display='flex'
        flexWrap='wrap' 
        position='relative'>
        
        <AppBarTopo/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/opinios' element={<Sugestoes/>}/>
            <Route  path="/" element={<Home/>}/>
            <Route  path="*" element={<Home/>}/>

           
        </Routes>
        </Box>
    )
}