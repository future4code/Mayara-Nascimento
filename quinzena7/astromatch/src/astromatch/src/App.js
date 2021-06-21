import './App.css';
import React from 'react';
import styled from "styled-components";
import Card from "./Componentes/Cartao.js"

const Body = styled.div `
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Body>
      <Card/>
    </Body>
  );
}

export default App;
