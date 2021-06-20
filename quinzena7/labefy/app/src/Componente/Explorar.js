import axios from 'axios';
import React from 'react';


export class PesquisarMusica extends React.Component {
    state = {
        adicionarMusica: {
            name: "",
            artist: "",
            url: "",
        }
    }


    addMusicaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.musicas
        }
        axios.post(url, body,{
            headers: {
                Authorization: "mayara-cristina-munoz"
              }
        })
        .then(
            (res) => {
                console.log(res)
            }
        )
        .catch((err)=>{
            console.log(err)
        }
        )
    
    }

    MusicaAdd = (e) => {
        this.setState( {adicionarMusica: e.target.value})
    }


    render() {
        return ( <div>
            <h1>Insira uma musica</h1>
            <input
            placeholder ={"Adicionar musica"}
            value ={this.state.name}
            onChange={"this.nomeMusica"}
            ></input>
             <input
            placeholder ={"Artista"}
            value ={this.state.artist}
            onChange={""}
            ></input>
            <input
            placeholder ={"url"}
            value ={this.state.url}
            onChange={""}
            ></input>
            <button onClick ={this.MusicaAdd}>Enviar</button>
            </div>
        );
    }
}

export default PesquisarMusica;