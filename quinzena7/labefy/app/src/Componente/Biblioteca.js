import React from "react"
import axios from "axios"
import styled from "styled-components";

const Card = styled.div `
    display: flex;
    flex-direction: row;
    
   border: 1px solid black;
    padding: 10px;
    margin: 10px;
    color:#FF0000;
    font-size:1.2rem;
   
    p {
        font-weight: 500;
    }

    button{
        font-size:1.1rem;
        border: none;
        margin: 0 0 0 20%;
        width: 200px;
    }

`


export class PlaylistsCriadas extends React.Component {
    state = {
        bibliotecaMusica:[]
    }


    componentDidMount() {
        this.TodasPlaylists()
    }




    TodasPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
                headers: {
                    Authorization: "mayara-cristina-munoz"
                }
            })
            .then(
                (res) => {
                    console.log('entenda', res.data.result.bibliotecaMusica)
                    this.setState({ bibliotecaMusica: res.data.result.list })
                })
            .catch(
                (err) => {
                    console.log(err.res?.data.result.bibliotecaMusica)
                })

    }

        excluirPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, {headers:{Authorization: "mayara-cristina-munoz"}})
            .then(
                (res) => {
                    alert('Playlist deletada')
                    this.TodasPlaylists()
                })
            .catch(
                (err) => {
                    alert('Algo deu errado')
                })
        }
        
    

    render() {
        console.log(this.state.bibliotecaMusica)
          const Lista = this.state.bibliotecaMusica.map((musicas) => {
                return <Card key ={musicas.id}>
                <p>{musicas.name} </p>   
                <button onClick = {() => this.excluirPlaylist(musicas.id)}>Remover</button>
                </Card>}
            )
      


        return ( 
        <div>
           
          {Lista}
          </div>
        );
    }
}

export default PlaylistsCriadas;