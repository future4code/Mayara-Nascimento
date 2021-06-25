import React from 'react';
import { useHistory } from 'react-router';
export const HomePage = () => {
    const history = useHistory ()
    const ListaViagem = () => {
        history.push("/trips/list")
    }

    const PageAdmin = () => {
        history.push("/login")
    }

    
    return (
        <div>
            <h1>Login Admin</h1>
            
            <button onClick = {PageAdmin}>Admin</button>
            <button onClick ={ListaViagem}>Lista Viagem</button>
        </div>
 )
}