Aos.init();

import "../style/Home.css";
import "../style/home-sobre.css";
import {
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  Tooltip,

} from "@mui/material";
import cerebro from "../../assets/imgs/cerebro.png";
import livro from "../../assets/imgs/livro.png";
import cabeca from "../../assets/imgs/cabeca.png";
import caixa from "../../assets/imgs/caixa.png";
import vinheta from "../../assets/imgs/vinheta.png";
import lacasa from "../../assets/imgs/lacasa.png";
import war from "../../assets/imgs/war.png";
import Aos from "aos";
import {
  ArrowDownward,
  
  FavoriteBorder,
  GitHub,
  Instagram,
  KeyboardDoubleArrowUp,
  LinkedIn,
} from "@mui/icons-material";

import { Link } from "react-scroll";
import { useState } from "react";



export const Home = () => {
  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));


  const [modalLink,setModaLink]=useState(false)
  const [modalLinks,setModaLinks]=useState(false)

  const LinlkModalOpinions = ()=>{
    setModaLink(true)
    
    setTimeout(() => {
   
      setModaLink(false)
      }, 4000);
  }

  const LinlkModalOpinionss = ()=>{
    setModaLinks(true)
    setTimeout(() => {
     
      setModaLinks(false)
      }, 4000);
  }


  return (
    <Box
      width="1280px"
      height="100vh"
      id="topo"
      color={theme.palette.text.primary}
      bgcolor={theme.palette.background.paper}
      margin="0 auto"
      maxWidth="1280px"
      flexWrap="wrap"
      justifyContent={mdDown ? "center" : "center"}
    >
      <div
        className="Home-container"
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="0"
        data-aos-duration="2000"
      >
        <div className="Home-titulo">
          <div className="titulo-h1">
            <h1>Mente firme, alma limpa e pensamento positivo sempre.</h1>
          </div>
          <div className="titulo-button">
            <a href='https://www.instagram.com/julionunesyt' target='_blank'>
            <button >Instagram</button>
            </a>
          </div>
        </div>

        <section className="Home-fotos">
          <ImageList variant="masonry" cols={mdDown ? 3 : 3} gap={6}>
            <ImageListItem>
              <img src={cabeca} />
            </ImageListItem>

            <ImageListItem>
              <img src={livro} />
            </ImageListItem>
            <ImageListItem>
              <img src={caixa} />
            </ImageListItem>
            <ImageListItem>
              <img src={cerebro} style={{ flex: "1" }} />
            </ImageListItem>
            <ImageListItem>
              <img style={{ borderRadius: "8px", height: 187 }} src={war} />
            </ImageListItem>
            <ImageListItem>
              <img src={vinheta} />
            </ImageListItem>
            <ImageListItem>
              <img src={lacasa} />
            </ImageListItem>
          </ImageList>
        </section>

        <div className="button-down">
          <Link to="#sobre">
          <h5> Click me!</h5>
        
            <ArrowDownward sx={{fontSize: 35}} />
          </Link>
        </div>
      </div>

      <div id="#sobre" className="sobre-home">
        <div
          className="sobre-contained"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="contained-titles">
            <div>
              <h1>Stephen Hawking, físico teórico</h1>
              <p>
                “Acho que vírus de computador deve contar como vida. Creio que
                dizem algo sobre a natureza humana que a única forma de vida que
                criamos até agora é puramente destrutiva. Nós criamos vida à
                nossa própria imagem.”
              </p>
            </div>
            <div>
              <h1>Morale Linus Torvalds, Linux.</h1>
              <p>
                “Estou fazendo um sistema operacional gratuito (apenas um hobby,
                não será grande e profissional como GNU) para 386/486 AT.”
              </p>
            </div>
          </div>

          <div className="contained-titles-down">
            <div>
              <h1>Steve Jobs.</h1>
              <p>
                “Algumas pessoas acham que foco significa dizer sim para a coisa
                em que você vai se focar. Mas não é nada disso. Significa dizer
                não às centenas de outras boas ideias que existem. Você precisa
                selecionar cuidadosamente.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <Box
        zIndex={-10}
        sx={{ width: "100%", alignItems: "center", height: "auto" }}
        bgcolor={theme.palette.background.paper}
      >
        <div className="opinions">
          <div
            className="opinions-titles"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="50"
          >
            <h4>Oque as pessoas acham?</h4>
            <h1>Opiniões</h1>
            <div className="title-opinions">
              <p>
                {" "}
                <strong style={{ fontSize: "30px" }}>“</strong> Não devemos de
                forma alguma preocupar-nos com o que diz a maioria, mas apenas
                com a opinião dos que têm conhecimento do justo e do injusto, e
                com a própria verdade.
                <strong style={{ fontSize: "30px" }}>”</strong>
              </p>
            </div>
            <div className="button-opinions">
              <button>Mais Opiniões</button>
            </div>
          </div>



          

          <div className="opinions-texts">


          <div
              className="opinions-texts-person"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="450"
              data-aos-offset="10"
            >
              <div className="opinions-img">
                <div className="opinions-img-img">
                  <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHHYnxqt9hVmQ/profile-displayphoto-shrink_800_800/0/1632138503045?e=1654732800&v=beta&t=ywx4u9OvuADK4zYYA8SUmI98QasNbsWim28DfDFqZNo' />
                </div>
                <div className="opinions-img-titles">
                  <h1>Alon Ribeiro</h1>
                  <h4>Cyber  - Python</h4>
                </div>
              </div>
              <div className="opinions-body-person">
                <p>
                  <strong style={{ fontSize: "25px" }}>“</strong> Ele possui uma grande facilidade em se comunicar com o público e desenvoltura para explicar.
                  Ele está em busca da primeira oportunidade no mercado de trabalho ; então se você é da área de TI e está contratando ou conhece alguém que esteja ,vale a pena indicar esse garoto !!😉.{" "}
                  <strong style={{ fontSize: "25px", lineHeight: "20px" }}>
                    ”
                  </strong>
                </p>
              </div>
              <div className="opinions-body-person-modal" >
               {modalLink ? (  <div
               style={{animation: 'modal .3s ease-in forwards' }}

                className="opinions-body-person-modal-links">
                  <div  style={{cursor: 'pointer',
                color: 'white'
                }}>

                  
               <Tooltip title="Instagram"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               >
                 <a href="https://www.instagram.com/fernandougr/"  target='_blank'>
                <Instagram  sx={{fontSize: 60}}/>
                 </a>
               </Tooltip>

               <Tooltip title="GitHub"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               >  
               <a href="https://github.com/fernandounger/ "  target='_blank'>
               <GitHub  sx={{fontSize: 60}}/>
               </a>
               </Tooltip>

               <Tooltip title="LinkedIn"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               > 
                <a href="https://www.linkedin.com/in/fernandounger/" target='_blank'>
                  <LinkedIn  sx={{fontSize: 60}}/>
               </a>
               </Tooltip>
               </div>
                </div>
               ): undefined}
                <p onClick={LinlkModalOpinions}>See More</p>
              </div>
              <div className="title-opinions-date">04/04/2022 - 17:47</div>
            </div>












           
            <div
              className="opinions-texts-person"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="450"
              data-aos-offset="10"
            >
              <div className="opinions-img">
                <div className="opinions-img-img">
                  <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFKl_dH-2JJ2g/profile-displayphoto-shrink_800_800/0/1648423016937?e=1654732800&v=beta&t=5UtpduNULkjQv_4cK5Vu7ROmtWvXFcoOc9DxKcp9BDY' />
                </div>
                <div className="opinions-img-titles">
                  <h1>Fernando</h1>
                  <h4>Front-End</h4>
                </div>
              </div>
              <div className="opinions-body-person">
                <p>
                  <strong style={{ fontSize: "25px" }}>“</strong> Ele é uma pessoa determinada no que faz, cada dia aprendendo mais e se aperfeiçoando suas habilidades. Como dizia Frank Tyger “Fazer o que você gosta é liberdade, gostar do que você faz é felicidade.{" "}
                  <strong style={{ fontSize: "25px", lineHeight: "20px" }}>
                    ”
                  </strong>
                </p>
              </div>
              <div className="opinions-body-person-modal" >
               {modalLinks ? (  <div
               style={{animation: 'modal .3s ease-in forwards' }}

                className="opinions-body-person-modal-links">
                  <div  style={{cursor: 'pointer',
                color: 'white'
                }}>

                  
               <Tooltip title="Instagram"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               >
                 <a href="https://www.instagram.com/fernandougr/"  target='_blank'>
                <Instagram  sx={{fontSize: 60}}/>
                 </a>
               </Tooltip>

               <Tooltip title="GitHub"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               >  
               <a href="https://github.com/fernandounger/ "  target='_blank'>
               <GitHub  sx={{fontSize: 60}}/>
               </a>
               </Tooltip>

               <Tooltip title="LinkedIn"
               TransitionProps={{timeout:500}}
               sx={{fontSize:200}}
               > 
                <a href="https://www.linkedin.com/in/fernandounger/" target='_blank'>
                  <LinkedIn  sx={{fontSize: 60}}/>
               </a>
               </Tooltip>
               </div>
                </div>
               ): undefined}
                <p onClick={LinlkModalOpinionss}>See More</p>
              </div>
              <div className="title-opinions-date">05/04/2022 - 20:47</div>
            </div>


            <div
              className="opinions-texts-person"
               
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              data-aos-offset="20"
            >
              
              <div className="opinions-img">
                <div className="opinions-img-img">
                  <img src='https://scontent.fthe9-1.fna.fbcdn.net/v/t1.6435-9/92866320_2975781095798705_1019532039575044096_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=m3aN0kUKIJQAX-URd5J&_nc_ht=scontent.fthe9-1.fna&oh=00_AT_GnNHIH8d6X1Dhp7HVAbiuF8o7GLug_TFDonplLBhOUw&oe=6273DACB' />
                </div>
                <div className="opinions-img-titles">
                  <h1>Kleber Martins</h1>
                  <h4>Developer - Java</h4>
                </div>
              </div>
            
               </div>
          
              
                
          
             
                  </div>
                  </div>


        
      </Box>

      <Box
        bgcolor={theme.palette.mode == "dark" ? "rgb(115, 0, 255)" : "#0d0d0d"}
        color={theme.palette.mode == "dark" ? "#fafafa" : "rgb(115, 0, 255)"}
      >
        <footer>
          <div className="footer-name">

          <div className="topo">
            <Link to="topo">
              <KeyboardDoubleArrowUp/>
             <h5>Back topo!</h5>
            </Link>
          </div>
          <div className="baixo">
  
            <div>
              
         <a href='https://www.instagram.com/julionunesyt' target='_blank'>
         <Instagram sx={{fontSize: 45, color: theme.palette.background.paper}}/>
         </a>
         <a href='https://www.linkedin.com/in/julio-nunes-de-oliveira-b6b40721a/' target='_blank'>
          <LinkedIn  sx={{fontSize: 45, color: theme.palette.background.paper}}/>
         </a>
         <a href='https://github.com/JulioNunesDev' target='_blank'>
          <GitHub  sx={{fontSize: 45, color: theme.palette.background.paper}}/>
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
  );
};

export default Home;
