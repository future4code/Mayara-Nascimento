import React from 'react';
import ListadeUsuario from './componentes/ListaUsuario.js';
import Cadastro from './componentes/TelaDeCadastro.js';
import styled from "styled-components"


const Main = styled.div`
  display:grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 99vw;
`

const Section = styled.div`
 display: block;
  text-align: center;
  justify-self: center;
  width: 100vw;
  font-size: 1rem;
  button{
        width: 10vw;
        height: 3vw;
        background-color: beige;
        border: none;
        
        font-size: 1rem;
    }

  input{
      width: 5w;
        height: 2vw;
        margin: 5px;
  }
`

export default class App extends React.Component {
  state = {
    pageAtual: "TelaUsuario"
  };

  mudarPagina = () => {
    if (this.state.pageAtual === "TelaUsuario") {
      this.setState({ pageAtual:  "Lista"});
    } else if (this.state.pageAtual === "Lista") {
      this.setState({ pageAtual:  "TelaUsuario" });
    }
  };

  AtualPagina = () => {
    switch (this.state.pageAtual) {
      case "TelaUsuario":
        return <Cadastro />;
      case "Lista":
        return <ListadeUsuario/> ;
      default:
        return <div>página não encontrada</div>;
    }
  };


  render() {
    return (
      <main>
        <Section>
          <h1>Labenusers</h1>
          <button onClick={this.mudarPagina}>Trocar de página</button>
          {this.AtualPagina()}
        </Section>
        </main>
    );
  }
}
