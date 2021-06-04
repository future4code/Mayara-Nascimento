import axios from 'axios';
import React from 'react';
import styled from "styled-components"


const CardUsuario =  styled.div `
    border: 0.5px solid black;
    padding: 0.8rem;
    margin: 1.5rem;
    width: 30vw;
    height: 5vw;
    display:flex;
    justify-content: space-around;
    text-align:center;
    align-items: center;
    button{
        width: 10vw;
        height: 3vw;
    }
` 


const Main = styled.div`
  display:grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 99vw;
`

const listaDeUsuarios = styled.div`
 display: block;
  text-align: center;
  justify-self: center;
  width: 100vw;
`

export default class ListadeUsuario extends React.Component {
    
    state = {
        todosUsuarios: []
    }

    componentDidMount(){
        this.salvarUsuarios()
    }


    salvarUsuarios = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "mayara-cristina-munoz"
            }
        })
        .then(
            (res) => {
                this.setState({todosUsuarios: res.data})
            }
        )
        .catch((err)=>{
            console.log("(ERROR)Nossos servidores estão com problema.")
        }
        )
    }
   
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "mayara-cristina-munoz"
            }
        }

        )
        .then((res) => {
            alert('Usuario deletado')
            this.salvarUsuarios()
        })
        .catch((err) =>{
            alert('algo deu errado')
        }
        
        )
    }


    render() {
        const listaDeUsuarios = this.state.todosUsuarios.map((user) =>{
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>Delete</button>
            </CardUsuario>
            )
        })


        return (
           <Main> 
           <h1>Lista de Usuários</h1>
           {listaDeUsuarios}
           </Main>
        );
    }
}