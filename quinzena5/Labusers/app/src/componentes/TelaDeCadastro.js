import axios from 'axios';
import React from 'react';
import styled from "styled-components"

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
    }

  input{
      width: 5w;
        height: 2vw;
        margin: 5px;
  }

  
`

export default class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    pegarNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    pegarEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    realizarCadastro = () => {
       const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
           name: this.state.nome,
           email: this.state.email
       } 

       axios.post(url, body, {
       headers:{
        Authorization: "mayara-cristina-munoz"
       }})
       .then((res)=>{
        alert("usuário cadastrado com sucesso")
        this.setState({nome:"", email:""})
       })
       .catch((err)=>{
        alert("Usuário ou email já está cadastrado ou inválido, tente outro =(")
       })
    }

    render() {
        return (
            <Section >
                <h1>Criar usuário</h1>
               
                <input
                    placeholder={"Coloque Seu nome"}
                    value={this.state.nome}
                    onChange={this.pegarNome}
                />
                <input
                    placeholder={"Coloque seu email"}
                    value={this.state.email}
                    onChange={this.pegarEmail}
                />
               
                <button onClick={this.realizarCadastro}>Cadastrar</button>

            </Section>
        );
    }
}