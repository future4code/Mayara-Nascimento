import React from 'react';
import styled from "styled-components";
import axios from "axios";
const Section = styled.div`
grid-row:2;
justify-items: center;


    div{
      width: 80%;
    }

    button{
      width: 100px;
      height: 26px;
      background-color: black;
      color:white;
     
    }
    input{
      width: 150px;
      height: 20px;
      
    }
`



export class CriarPlaylist extends React.Component {

  state = {
    musicas: ""
  }

 Musicas = (e) =>{
   this.setState({musicas:e.target.value})
  }


  Adicionar = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.musicas
    }
    axios.post(url, body, {
      headers: {
        Authorization: "mayara-cristina-munoz"
      }})
      .then((res) => {
        alert('sua playlist foi cadastrada com sucesso')
        this.setState({name: " "})
      })
      .catch( (err) =>{
        alert(err.response.data.message)
      }

      )
  }


    render() {
    return (
      <Section>
        <h1>Crie uma playlist</h1>
        <div>
          <input 
          placeholder= {"Coleção"}
          value={this.state.name}
          onChange={this.Musicas}
          ></input>
          <button
          onClick ={this.Adicionar}
          >Adicionar</button>
        </div>
      </Section>
    );
  }
}

export default CriarPlaylist;
