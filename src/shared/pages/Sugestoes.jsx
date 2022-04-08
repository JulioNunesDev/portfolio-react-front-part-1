import { Box, Button, useTheme } from "@mui/material";
import styled from "styled-components";



export const Stylos = styled.form`
width: 700px;
height: 840px;
background-color: #ebebeb;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
font-family: var(--font-sora);



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
    height: auto;
    text-align: center;
    font-family:var(--font-sora);

   

    h1{
    font-weight: 600;
    font-size: 40px;
    color: white;
    filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.6));
    text-decoration: underline;
    }
}

`

export const Sugestoes = () => {
    const theme = useTheme()
    return ( 
        
        <Box bgcolor={theme.palette.background.paper}
        width='100%'
        height='auto'
        position='relative'
        top={79}
        display='flex'
        alignItems='center'
        margin='0 auto'
        maxWidth= '1280px'

        >
           <Stylos>

             <div>
                    <input type="text" id="nome" name='nome'
                    placeholder="Url da sua Imagem*" />
                </div>
                <div>
                    
                    <input type="text" id="nome" name='nome' 
                     placeholder="Seu nome*"/>
                </div>
                <div>
                    
                    <textarea name="mensagem" id="mensagem" cols="35" rows="8"
                    maxLength='150' placeholder="Sua mensagem*"
                    ></textarea>
                </div><br/>
             
                    <Button variant="contained" disabled
                    
                    >
                        Enviar
                    </Button>
                 </Stylos>
                 <OpinionsRead>
                    <div 
                    style={{backgroundColor:` ${theme.palette.mode == 'dark' ? '' :'black'}`}}
                    >
                        <h1>Opiniões</h1>
                    </div>

                    <h1
                    style={{color:` ${theme.palette.mode == 'dark' ? 'white' :'black'}`}}
                    >TERMINANDO O BACK-END</h1>
                    
                 </OpinionsRead>
        </Box>
        
     );
}
 
