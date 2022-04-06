import { Box,  useTheme } from "@mui/material"
import '../style/profile.css'


import { FavoriteBorder, GitHub, Instagram, KeyboardDoubleArrowUp, LinkedIn, PlayArrow } from "@mui/icons-material"
import html from '../../assets/imgs/html.svg'
import css from '../../assets/imgs/css.svg'
import js from '../../assets/imgs/js.svg'
import react from '../../assets/imgs/react.svg'
import mongo from '../../assets/imgs/mongo.png'
import types from '../../assets/imgs/type.png'
import mysql from '../../assets/imgs/my.svg'
import boot from '../../assets/imgs/bootstrap.png'
import git from '../../assets/imgs/git.svg'
import node from '../../assets/imgs/donde.png'
import material from '../../assets/imgs/material.png'
import styled from '../../assets/imgs/styled.png'
import load from '../../assets/imgs/spinning-circles.svg'
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react"





export const Profile =()=>{

    const theme = useTheme()

    const [divMain,setDivMain]=useState(true)

    const exibirConteudo =() =>{
        setDivMain(newDiv => !newDiv)
    }

    

    const [text,setText]=useState('')

    
    const  valorText =(e)=>{
        
           setText(e.target.value)
         
    }



    return(
        <Box 
         width='100%' height='100%'
        maxWidth='1280px'
        position='relative'
        top='0'
        id="topos"
        margin='0 auto'
        flexWrap="wrap"
        bgcolor={theme.palette.background.paper}
   >

        <div id="#topos"
         className="main-container"
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="400"
         data-aos-offset="0"
        
        >
            <div className="main-container-titulo">
                <h1>FULLSTACK</h1>
                <p>Junior</p>
            </div>
        </div>

        <div className="main-container-player">
            <div
             data-aos="fade-right"
             data-aos-offset="400"
             data-aos-duration="1200"
             data-aos-delay='300'
            className="main-container-player-title">
                <div>
                <h1>
                Conheça um pouco de mim
                </h1>
                <h3>Nesse vídeo falo um pouco de como é estudar programação!</h3>
                <p>Ainda tenho muito que aprender e me aperfeiçoar.</p>
                </div>
            </div>
            <div className="main-container-player-play"
             data-aos="fade-up"
             data-aos-duration="3000">
                <div>
                    <span><PlayArrow sx={{color:'var(--colortext)', fontSize:100}}/></span>
                </div>
            </div>
        </div>


        <div className="main-container-skills">

            <div className="main-conatiner-linguagems">

            <div className="main-conatiner-linguagems-first-titulo"
             data-aos="fade-right"
             data-aos-offset="400"
             data-aos-duration="1200"
             data-aos-delay='300'
            
            >
                <h1>SKILLS:</h1>
            </div>
                <div className="main-conatiner-linguagems-first"
                
                data-aos="fade-up"
                data-aos-duration="2900"
                >
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="javascript" />
                <img src={boot} alt="BootStrap" />
                </div>
                <div className="main-conatiner-linguagems-first"
                 data-aos="fade-up"
                 data-aos-duration="3000"
                >
              
                <img src={react} alt="react" />
                <img src={styled} alt="Material" />
                <img src={types} alt="typescript" />
                <img src={material} alt="Material" />
                </div>
                <div className="main-conatiner-linguagems-first"
                 data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                >
              
                <img src={mongo} alt="MongoDB" />
                <img src={mysql} alt="SQL" />
                <img src={node} alt="NodeJs" />
                <img src={git} alt="Git" />
                </div>
                  
            </div>
        </div>
        {!divMain ? (
        <div
         className="main-container-projects">
            <div className="container-header">
             <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
             ><h1>PROJETOS</h1></div>
            </div>
            <div className="container-projects-atually">
                    <div>
                        <h1>Projetos em Breve...</h1>
                        <h3>Construindo o Back-End</h3>
                            <img src={load} alt="Loading" />
                            <button className="btn_state-btn" onClick={exibirConteudo}>{!divMain ? 'Esconder Conteúdo' : 'Exibir Conteúdo'}</button>
                    </div>
            </div>
        </div>
        ): (<div style={{animation: 'modalDiv  .7s ease-in-out'}} className="btn_state">
            <button  onClick={exibirConteudo}>Exibir Conteúdo</button>
        </div>)}

        <div className="main-container-form">

            <div className="main-container-header-form">
        
             <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
             >
                 <h1>CONTATO</h1>
            </div>
            </div>
            <div className="main-container-header-titulo">
                <p>Deixe suas sugestões e passe um feedback para me. formulário abaixo!</p>
            </div>
            <form >

                <div>
                    <input type="text" placeholder="Seu nome*"
                    name="nomeUser" maxLength='15'
                    required />
                </div>
                <div>
                    <input type="email" placeholder="Seu E-mail*" 
                    name='email'
                    
                    />
                </div>
                <div>
                    <input type="tel" placeholder="Seu numero"
                    name='tel'
                    />
                </div>
                
                <div className="text-area">
                    
                    <textarea   name="mensagemUser" id="mensagemUser"  placeholder="Sua sugestão*" rows='10' required  maxLength='150'
                    onChange={(e)=>valorText(e)}
                    >
                       
                    </textarea> <div>
                    {text.length}/150
                        </div>
               
                </div>
                <div className="submit-form">
                    <button>Submit</button>
                </div>
            </form>
       

        </div>




        
       <Box
       
       bgcolor={theme.palette.mode == "dark" ? "#0d0d0d" : "##acacac"}
       color={theme.palette.text.primary}
       
       >

        <footer>
          <div className="footer-name">

          <div className="topo">
            <Link to="topos">
              <KeyboardDoubleArrowUp/>
             <h5>Back topo!</h5>
            </Link>
          </div>
          <div className="baixo">
  
            <div>
              
         <a href='https://www.instagram.com/julionunesyt' target='_blank'>
         <Instagram sx={{fontSize: 45, color: theme.palette.text.primary}}/>
         </a>
         <a href='https://www.linkedin.com/in/julio-nunes-de-oliveira-b6b40721a/' target='_blank'>
          <LinkedIn  sx={{fontSize: 45, color: theme.palette.text.primary}}/>
         </a>
         <a href='https://github.com/JulioNunesDev' target='_blank'>
          <GitHub  sx={{fontSize: 45, color: theme.palette.text.primary}}/>
         </a>
            </div>
           <div>
             <h2>FullStack Jr - Julio Nunes</h2>
           <FavoriteBorder
              sx={{ fontSize: 30, color: "red", marginLeft: "10px" }}
              />
          

           </div>
              </div>
          </div>
        </footer>
      
       </Box>
     </Box>
    )
}

