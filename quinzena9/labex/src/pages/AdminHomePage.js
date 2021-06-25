import React from 'react';
import { useHistory } from 'react-router';

export const AdminHomePage = () =>{
        const history = useHistory ()
        const BackToPage = () => {
            history.goBack()
        }

    return(
        <div>
        <h1>Administrador</h1>
        <p>Administrador ver lista de viagens e deleta-las</p>
        <button onClick ={BackToPage}>Voltar</button>
        </div>
        )
}
