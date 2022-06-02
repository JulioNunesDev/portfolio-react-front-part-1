import { Box, useTheme} from "@mui/material";
import { useEffect, useState } from "react";
import { AppRoutes } from "./routes";
import { AppBarTopo } from "./shared/components/AppBarTopo";
import { useAppThemeContext } from "./shared/contexts/ThemeContext";
import reac from './assets/imgs/three-dots.svg'
import '../index.css'
import './shared/style/home-sobre.css'


function App() {
    
  const {toggleTheme} = useAppThemeContext()
 
  const [anima, setAnima]=useState(false)
  const theme = useTheme()

 
  useEffect(()=>{


    setTimeout(()=>{
      setAnima(true)
    },3500)
  },[])


  const step = 1
  const interval = 54
  const maxProgress = 75

  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const updateProgress = () => setProgressPercentage(progressPercentage + step)
    if (progressPercentage < maxProgress) {
      setTimeout(()=>{
        updateProgress()
      }, interval)
    }
  }, [progressPercentage]) 




  return (
   
     
    <Box bgcolor='green'  width='100%' height='auto'  margin='0 auto' display='flex'
    flexDirection='column' justifyContent='center' alignItems='center'>
      {anima  ?(
        <div style={{margin: 0, width: '100%', height: '100%'}}>

        
   
        <AppRoutes/>
        </div>  

        ):( <Box sx={{width: '100%', height: '100vh', justifyContent: 'center', display: 'flex', alignContent: 'center', flexDirection: 'column', flexWrap: 'wrap'}} bgcolor={theme.palette.background.paper}
        color={theme.palette.text.primary}
        >
          
       <div style={{width: '100%', textAlign: 'center', display: 'flex',  justifyContent: 'center',alignContent: 'center',
       animation: 'anima 4s backwards   ease-in '}} >

       <img src={reac} style={{width: '200px', } } />
       </div>

        <h1 
         style={{fontFamily: 'var(--font-sora)', textAlign: 'center', fontSize: '50px',marginTop: '35px', wordBreak: 'break-word', animation: 'anima 3s backwards   ease-in .3s ',  color: 'var(--colortext)'}}
         >Em desenvolvimento by Julio</h1>
          <h1
         style={{fontFamily: 'var(--font-sora)', textAlign: 'center', fontSize: '50px',marginTop: '5px', animation: 'anima 2s backwards   ease-in .3s',
         color: 'var(--colortext)'
        }}
         >{progressPercentage}%</h1>

            <div className="progress-div" style={{width: '100%'}}>
            <div className="progress" style={{width: ` ${progressPercentage}%`, transition: '1s ease'}} >
                <h2>
               

                </h2>
            </div>

        </div>
        </Box>)}
        
     </Box>
     
  );
}

export default App;
