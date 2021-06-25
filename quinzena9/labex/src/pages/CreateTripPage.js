import React from 'react'
import { useHistory } from 'react-router'
export const CreateTripPage = () =>{
    const history = useHistory ()
    const BackToPage = () => {
        history.goBack ("")
    }
    return (
        <div>
            <h2>Formulário para administrador</h2>
            <p>Nova viagem</p>
            <button onClick ={BackToPage}>Voltar</button>
        </div>
    )
}