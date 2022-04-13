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
import stylede from '../../assets/imgs/styled.png'
import netflix from '../../assets/imgs/ddd.png'
import { Link } from "react-scroll";
import {useState } from "react"
import styled, {keyframes} from 'styled-components'





    export const animal = keyframes`
        0%{opacity: 0};
        100%{opacity: 1}
    `

    const ModalPlayerDiv = styled.div`
    
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #111;
    animation: ${animal} .5s alternate;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    

    button{
        margin-bottom: 15px;
        
        height: 35px;
        width: 120px;
        border: 0;
        font-family: var(--font-sora);
        font-size: 16px;
        font-weight: bold;
        background-color: ${props => props.back};
        color: ${props => props.colorss};
        border-radius: 2px ;
        transition: all 0.3s ease;

        &:hover{
            background-color: #2b2b2b;
            color: ${props => props.hover};
        }
        
    }


    iframe {
        display: flex;
        justify-content: center;
        
        background-color: #383838;
    }

    `
   
 
    



export const Profile =()=>{

    const theme = useTheme()
    const [modalPlayer, setModalPlayer]=useState(false)
    const [text,setText]=useState('')
    const [divMain,setDivMain]=useState(false)


    const exibirConteudo =() =>{
        setDivMain(newDiv => !newDiv)
    }
    const  valorText =(e)=>{
           setText(e.target.value)   
    }

    const modalPlayerButton=(e)=>{
        setModalPlayer(!modalPlayer)
        if(!modalPlayer){
        window.alert('Vídeo exemplo!')
        }
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
        color={theme.palette.text.primary}
   >



            {modalPlayer && 
                 <div
                  className="modal-name" 
                               
                 >

                   
                    <ModalPlayerDiv 
                    hover={theme.palette.mode == 'dark'
                    ? '#fff' : ''
                    }
                    back={theme.palette.mode == 'dark'
                     ? '#fffffffd' : '#1f1f1f' }
                    colorss={theme.palette.mode == 'dark' 
                    ? '#1f1f1f' : '#fffffffd'}>
                   <button
                    onClick={(e)=>modalPlayerButton(e)}>X Fechar</button>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/jpsS5EYN-Wc?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen='true'></iframe>
                      <h3> Video Exemplo!!</h3>
                  
                    </ModalPlayerDiv>
                  
                   

                 </div>
                }

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
                    <span onClick={modalPlayerButton}><PlayArrow sx={{color:'var(--colortext)', fontSize:100}}/></span>
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
                <img src={html} alt="html"
                />
                <img src={css} alt="css" />
                <img src={js} alt="javascript" />
                <img src={boot} alt="BootStrap" />
                </div>
                <div className="main-conatiner-linguagems-first"
                 data-aos="fade-up"
                 data-aos-duration="3000"
                >
              
                <img src={react} alt="react" />
                <img src={stylede} alt="Material" />
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
        {divMain ? (
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
                <div className="container-contador-projetos">
                    <h1>Contador dinâmico</h1>
                    <h2>Projetos Total: 16</h2>
                </div>
                    <div className="projetos-novos">

                        <div className="netflix">
                            <img src={netflix} alt="projeto_netflix" />
                            <div>
                            <h1>Clone Netflix</h1>
                            <p>Projeto criado recentemente <br/> futuras implementações</p>
                            <a href="https://netflixjulionunes.netlify.app/" target='_blank'>Preview</a>
                            </div>
                        </div>

                        <div className="netflix">
                            <img src='https://www.gov.br/mre/pt-br/assuntos/portal-consular/alertas%20e%20noticias/alertas/entrada-de-brasileiros-e-estrangeiros-no-brasil/brasilportaria658.jpg' alt="projeto_redeSocial" />
                            <div>
                            <h1>Social <span style={{backgroundColor: '00ff00' }}>Vintra</span></h1>
                            <p>Projeto em construção <br/> faça parte você também!</p>
                            <a href="https://discord.gg/SKu2pt7S" target='_blank'>Veja mais..</a>
                            </div>
                        </div>


                        <div className="netflix">
                            <img src='https://www.folhadelondrina.com.br/img/inline/3180000/0x1200/Arena-Games-e-diferencial-da-60-ExpoLondrina0318353101202204051925.webp?fallback=https%3A%2F%2Fwww.folhadelondrina.com.br%2Fimg%2Finline%2F3180000%2FArena-Games-e-diferencial-da-60-ExpoLondrina0318353101202204051925.jpg%3Fxid%3D5734306&xid=5734306' alt="projeto_netflix" />
                            <div>
                            <h1>Em breve</h1>
                            <p>Projeto em breve <br/> voltado a Game
                            </p>
                            <a href="" target='_blank'>Preview</a>
                            </div>
                        </div>

                    </div>
                            <button className="btn_state-btn" onClick={exibirConteudo}>{divMain ? 'Esconder Conteúdo' : ''}</button>
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
                    <button disabled>Desativado</button>
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

