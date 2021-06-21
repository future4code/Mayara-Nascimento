import React from "react";
import './App.css';
import styled from "styled-components";
import axios from "axios";

const Conteudo = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export default function App() {

  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person'
  const aluno = "mayara"
    const pegarCartas = () => { 
       axios.get (url, aluno)
    .then((res)=> {
        console.log(res.data)
    })
    .catch((error)=>{
        console.log(error.data)
    })}

    console.log(pegarCartas)
  
  return (
    <Conteudo>
    
     
    </Conteudo>
 
  );
  }
