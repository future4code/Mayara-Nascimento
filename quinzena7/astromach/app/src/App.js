import React, {useEffect, useState } from "react";
import Card from "./componentes/Usuario/Perfil.js";
import './App.css';


export default function App() {

  const [contador, setContador] = useState(0)
  const [contador2, setContador2] = useState(0)
  
  
  useEffect ( () => {
    document.title = `contador - ${contador}`
  }, [contador])

  useEffect (()=>{
    document.title = `contador - ${contador2}`
  },[contador2]
  )

  const onClickSoma = () => {
    setContador (contador + 1)

  }
  const onClickSoma2 = () => {
    setContador2 (contador2 + 1)

  }
  
  return (
    
    <Card/>
 
  );
  }
