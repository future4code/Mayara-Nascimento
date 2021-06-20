import React from 'react';
import { CriarPlaylist } from "./Componente/Inicio.js";
import styled from "styled-components";
import PlaylistsCriadas from './Componente/Biblioteca.js';
import PesquisarMusica from './Componente/Explorar.js';

const Section = styled.div`
    display:grid;
    grid-template-columns: repeat(1fr, 3);
    grid-template-rows: 10vh 91vh;
    justify-content: center;
    margin: 0;
    border:none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    
`
const Nav = styled.div`
font-size: 1.5rem;
display: flex;
color:#FF0000;
font-weight: 500;
text-align: center;
  p {
    margin: 1.2rem 1.1rem;
       
    }
    button{
        margin: 1rem 1rem;
        border:none;
        font-size: 1.5rem;
        color:#FF0000;
        background-color: white;
    }
`




class App extends React.Component {
  state = {
    Tela: "Inicio"
  }

  PaginaAtual = () =>{
    if (this.state.Tela === "Inicio") {
      return <CriarPlaylist/>
    } else if (this.state.Tela === "Biblioteca"){
      return <PlaylistsCriadas/>
    } if (this.state.Tela === "Pesquisar"){
      return <PesquisarMusica/>
    } 
  }

  Playlists = () =>{
    this.setState({Tela: "Biblioteca"})
  }


  AdicionarMusica = () =>{
    this.setState({Tela: "Inicio"})
  }

  Pesquisar = () =>{
    this.setState({Tela: "Pesquisar"})
  }

  

  render() {
    return (<Section>
       <Nav>
                <p><b>Lab</b>efy</p>
                <button onClick ={this.AdicionarMusica}>Início</button>
                <button onClick ={this.Playlists}>Biblioteca</button>
                <button onClick ={this.Pesquisar}>Explorar</button>
       </Nav>

      {this.PaginaAtual()}
    </Section>
    );
  }
}

export default App;
