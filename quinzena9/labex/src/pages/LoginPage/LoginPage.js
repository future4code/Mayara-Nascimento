import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import  {Page, Formulario} from './Styled';
import {useForm} from './useForm';

export const LoginPage = () => {
    const history = useHistory ()
    const BackToPage = () => {
        history.goBack ()
    }

    

    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

    
    
    const onSubmitLogin = (event) => {
       


        console.log(form)
        event.preventDefault();
  
        const token = localStorage.getItem('token')
        
        const body = {
            email: form.email,
            password: form.password
        }
       axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/login', body)
       .then((response) => {
           
       
           console.log('Ok:', response.data.token)
            localStorage.setItem('tokenKeys', response.data.token)
            history.push("/admin/trips/list")
        })
           .catch(
               (error) => {
                   console.log(error.response)
                   alert('Email ou senha inválido.')
               })



  
  
        cleanFields();       
    }
    
   
               

    return (
        <Page>
            <nav>
            <h1>Login Admin</h1>
           
            
        
        <button onClick ={BackToPage}>Voltar</button>
        </nav>
        <Formulario>
        <form onSubmit={onSubmitLogin}>
            <input 
            name="email"
            placeholder ={ "Digite seu Email"}
            type ="email"
            value ={form.email}
            onChange={onChange}
            required
            ></input>
            <input
            name="password"
            placeholder="Digite sua senha"
            type= "password"
            value={form.password}
            onChange={onChange}
            required
            pattern={"^.{6,}"}
            title={"Sua senha precisa ter no minimo 6 caracteres"}></input>
            <button>Enviar</button>
        </form>
        </Formulario>
        </Page>
 )
}
