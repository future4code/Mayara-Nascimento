import React, { useReducer } from "react"
import axios from "axios"
import styled from "styled-components";

const Card = styled.div `
   border: 1px solid black;
    padding: 10px;
    margin: 10px;
    color:#FF0000;
    background-color: yellow;

`


export class PlaylistsCriadas extends React.Component {
    state = {
        bibliotecaMusica: []
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
                    this.setState({ bibliotecaMusica: res.data })
                })
            .catch(
                (err) => {
                    console.log(err)
                })

    }

    render() {
        console.log(this.state.bibliotecaMusica)
        /* const listaMusica = this.state.bibliotecaMusica.map(
            (list) => {
                return <Card>{list.name}</Card>
            }
        )
 */
        return ( <div> 
            {/* {listaMusica} */}
         </div>
        );
    }
}

export default PlaylistsCriadas;