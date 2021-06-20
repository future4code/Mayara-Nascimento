import React from 'react';
import PlaylistsCriadas from "./Biblioteca.js";


export class PesquisarMusica extends React.Component {
    state = {
        resultado: []
    }



    render() {
        return (
            <h1>Insira uma musica</h1>
        );
    }
}

export default PesquisarMusica;