import React from 'react';
import {useHistory } from 'react-router-dom';
export const ListTripsPage = ( ) => {
    const history = useHistory ()
    const Cadastrar = () => {
        history.push("/trips/application")
    }
    const BackToPage = () => {
        history.goBack("")
    }

    return (
        <div>
            <h1>Viagens</h1>
            
            <button onClick ={Cadastrar}>Cadastrar</button>
            <button onClick ={BackToPage}>Voltar</button>
        </div>
    )

}