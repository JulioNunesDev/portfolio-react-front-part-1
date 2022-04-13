import { Pause } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import peido from '../../assets/efeitos/Peido 2 - Efeitos sonoros Nerzinho.mp3'

const anima = keyframes`
0% {
    width: 0;
}
100%{
    width: 350px;
}


`

const NotaBox = styled.div`
width: 350px;
height: 180px;
border-radius: 2px;
background-color: #fff;
position: absolute;
animation: ${anima} .5s ease-in-out;
right: 0;
font-family: var(--font-sora);
top: 90px;

display: flex;
justify-content: space-between;
flex-direction: column;
padding: 5px 5px 10px 5px;


button{
    border: 0;
    background-color: #111;
    color: #fff;
    height: 35px;
}

`


export const Nota = () => {

    const [nota,setNota]=useState(true)

    const [audio] =useState(new Audio(`${peido}`))
    
    const [play,setPlay]=useState(false)

    const playAudio=()=>{
        setPlay(!play)
    }

    useEffect(()=>{
        play ? audio.play() :audio.pause()
    },[play])

    useEffect(()=>{
        audio.addEventListener('ended', ()=> setPlay(false))
        return()=>{
         audio.addEventListener('ended', ()=> setPlay(false))
        }
    },[])


   

    
    const fechaNota =()=>{
        playAudio()
        setNota(false)
        setContador(contador + 1)

    }
    const [contador, setContador] =useState(0)
    let valor = 3

    useEffect(()=>{
       
      const timeIn =  setInterval(()=>{
        setNota(true)
        
        }, 30000)

        if(contador == valor){
            setNota(false)
            clearInterval(timeIn)
        }

        return  ()=> {clearInterval(timeIn)}
       
    },[contador])


    return ( 
       <div>
     { nota &&
       <NotaBox>
           <button onClick={fechaNota}> X FECHAR</button>
           <Alert 
           style={{
               fontSize:15, fontFamily: 'var(--font-sora)',
               border: '1px solid black'
           }}
           severity='warning' variant='filled'
           >
               Nota: Portfólio em Desenvolvimento 
           </Alert>
           Total Alerts: {valor}<br/>
           Alertas Fechado: {contador}
       </NotaBox>}
       </div> 
     );
}
