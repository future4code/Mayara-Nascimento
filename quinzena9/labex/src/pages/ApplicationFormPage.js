import React from 'react';
import { useHistory } from 'react-router-dom'

export const ApplicationFormPage = () =>{

    const history = useHistory ()
    const BacktoPage = () => {
        history.goBack("")
    }

    return (
        <div>
            <h1>Usuário se candidata</h1>
            <button onClick = {BacktoPage}>Voltar</button>
        </div>
    )
}