import React from 'react';
import { useHistory } from 'react-router';
export const LoginPage = () => {
    const history = useHistory ()
    const BackToPage = () => {
        history.goBack ()
    }

    const UsuariosCadastrados = () => {
        history.push("/admin/trips/list")
    }
    const CriarViagens = () => {
        history.push("/admin/trips/create")
    }
    return (
        <div>
            <h1>Login Admin</h1>
            <button onClick ={CriarViagens}>Criar Viagens</button>
            
        <button onClick ={UsuariosCadastrados}>Pagina de Adm</button>
        <button onClick ={BackToPage}>Voltar</button>
        </div>
 )
}