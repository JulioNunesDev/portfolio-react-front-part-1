import '../style/topoBar.css'
import {
  AccountCircle,
  Brightness7,
  Brightness4,
  Home
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  Icon,
  ListItemButton,
  ListItemText,

  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useNavigate, NavLink, Link} from "react-router-dom";

import { useAppThemeContext } from "../contexts/ThemeContext";
import { Nota } from './Nota';




export const AppBarTopo = () => {
  const { toggleTheme, handleClick, valor } = useAppThemeContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const navegate = useNavigate();
  
  const nave =(to)=>{
    navegate(to)
  }
  
 

  return (
    <Box
     
      height="auto"
      width="100%"
      bgcolor={theme.palette.background.paper}
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      display="flex"
      justifyContent="center"
      
      flexWrap="wrap"
    >
      <Box
      
        display="flex"
        bgcolor={theme.palette.background.paper}
        maxWidth="1280px"
        height={theme.spacing(10)}
        alignContent="center"
        justifyContent="space-between"
        width="100%"
        flexWrap="wrap"
      >
        <Box display="flex" color={theme.palette.text.primary} height="auto">
          {!smDown ? (
            <Box 
              display={smDown ? "flex" : "flex"}
              width="100%"
              alignItems="center"
              justifyContent="center"
              marginLeft="15px"
              height="100%"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                
                <ListItemButton onClick={handleClick}>
                  <Avatar src="https://cdn.discordapp.com/attachments/607253194376085515/959152316634759198/IMG-20210705-WA0072.jpg" />
                </ListItemButton>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  padding: "15px",
                }}
              >
                <NavLink 
                 exact to='/' activeClassName='selected'>

                
                  <Icon  sx={{ marginRight: 1, fontSize:35}}>home</Icon>
                  <label>Home</label>
                </NavLink>

                <NavLink to='/profile'>
                  <AccountCircle sx={{ marginRight: 1, fontSize:35 }} />
                  <label>Profile</label>
          
                  </NavLink>
              </div>
            </Box>
          ) : (
            <ListItemButton onClick={handleClick}>
              <Icon>menu</Icon>
            </ListItemButton>
          )}

          <Drawer open={valor} onClose={handleClick}>
            <Box
              width={theme.spacing(28)}
              height="100vh"
              display="flex"
              flexDirection="column"
            >
              <Box
                width="100%"
                height={theme.spacing(20)}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar
                  sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                  src="https://pbs.twimg.com/profile_images/1356824377694834689/c8dg1cHW_400x400.jpg"
                />
              </Box>

              <Box
                bgcolor='transparent'
                color={theme.palette.background.paper}
                justifyContent="center"
                display="flex"
                width="100%"
                alignItems="center"
              >
                <NavLink 
                 exact to='/home' activeClassName='selected'>

                
                  <Icon  sx={{ marginRight: 0, fontSize:35}}>home</Icon>
                  <label>Home</label>
                </NavLink>

                <NavLink to='/profile'>
                  <AccountCircle sx={{ marginRight: 0, fontSize:35 }} />
                  <label>Profile</label>
          
                  </NavLink>
                
              </Box>
            </Box>
          </Drawer>
        </Box>

        <Box
          display="flex"
          marginRight="12px"
          color={
            theme.palette.mode == "dark"
              ? theme.palette.text.primary
              : theme.palette.text.secondary
          }
        >
          <ListItemButton onClick={toggleTheme}>
            {theme.palette.mode == "dark" ? <Brightness7 /> : <Brightness4 />}
          </ListItemButton>
        </Box>
      </Box>
      <Nota/>
    </Box>
  );
};
