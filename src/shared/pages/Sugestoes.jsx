import { Box, Button, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Api } from "../../services/Api";
import {useAxios} from '../hooks/useAxios'



export const Stylos = styled.form`
width: 100%;
height: auto;
background-color: #ebebeb;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding-top: 50px;
font-family: var(--font-sora);
padding-bottom: 25px;



div{
    
    flex-direction: column;
    display: center;
    margin-bottom: 15px;
    align-items: center;
    justify-content: center;
  
    width: 50%;
    height:auto;
    background-color: var(--colortext);
    box-shadow: 2px 2px 6px rgba(0, 0,  0,  0.3);
}

div input{
    padding: 5px;
width: 100%;
height: 45px;
border: 0;
outline: none ;

}

label{
    font-size: 25px;
    position: absolute;
}

textarea{
    resize: none;
    width: 100%;
    border: none;
    padding: 5px;
}


.btn{
    
    width:120px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const OpinionsRead = styled.div`
width: 100%;
height: 100%;

padding-top: 20px;

div{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family:var(--font-sora);

   
    }

    h1{
    font-weight: 600;
    font-size: 40px;
    color: white;
    filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.6));
    text-decoration: underline;
    }



   
    .content{

        width: 100%;
        height: auto;
        padding: 10px;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .opinions{
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            width: 275px;
            height:auto;
            background-color: #f2f2f2;
            box-shadow: 0px 1px 5px rgba(0,0,0,0.6);
            margin-bottom: 10px;



            .img{
                width: 100%;
                height: 120px;
            
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;

                img{
                    border-top-left-radius: 15px;
                 border-top-right-radius: 15px;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

            }

            .titulo{
                filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.6));
                font-family: var(--font-sora);
                height: auto;
                box-shadow: 0px 1px 5px rgba(0,0,0,0.6);
                border-radius: 15px;
            }

            .message{
                font-family: var(--font-sora);
                word-wrap: break-word;
               
            }
        }
    }

`

export const Sugestoes = () => {
    const theme = useTheme()


    const [urlImg, setUrlImg]=useState('')
    const [name, setName]=useState('')
    const [message, setMessage]=useState('')
  


    
    
    
    const {data, mutate}=useAxios('/')



    const enviarDados =()=>{
        if(urlImg == "") return alert('coloque uma url de uma imagem!')
        if(name == "") return alert('coloque um nome!')
        if(message == "") return alert('coloque uma mensagem!')

       

        Api.post('/opinios',{
            urlImg: urlImg,
            name: name,
            message: message
        })
       

        const updateAdd = [...data, urlImg, name, message ]

          mutate(updateAdd, false)

        alert('Obrigado por sua Opinião!!')
       
        
    }


    return ( 
        
        <Box bgcolor={theme.palette.background.paper}
        width='100%'
        height='auto'
        position='relative'
        flexWrap='wrap'
        top={79}
        display='flex'
        alignItems='center'
        margin='0 auto'
        maxWidth= '1280px'

        >
           <Stylos>

             <div>
                    <input type="text" id="nome" name='nome'
                    placeholder="Url da sua Imagem*" onChange={(e)=>setUrlImg(e.target.value)}  />
                </div>
                <div>
                    
                    <input type="text" id="nome" name='nome' 
                    maxLength='15'
                     placeholder="Seu nome*" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    
                    <textarea name="mensagem" id="mensagem" cols="35" rows="8"
                    maxLength='150' placeholder="Sua mensagem*" onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                </div><br/>
          
                 
                    <Button variant="contained" onClick={enviarDados} style={{marginBottom:15}}

                    >
                        Enviar
                    </Button>
                    <Button type="reset" variant="contained" 
                    >
                       Reset
                    </Button>
             
                    
                 </Stylos>
                 <OpinionsRead>
              <div >
                        <h1>Opiniões</h1>
                    </div>

                    <div className="content">
                        {data?.map((opinio)=>(
                        <div className="opinions">
                            <div className="img">
                            <img src={opinio.urlImg} alt="imagem usuario" />
                            </div>

                         <div className="titulo">
                         <h2>{opinio.name}</h2>
                         </div>
                            <div className="message">
                                <p>{opinio.message}</p>
                            </div>
                         </div>
                        ))}
                    </div>
                    
                 </OpinionsRead>
        </Box>
        
     );
}
 
