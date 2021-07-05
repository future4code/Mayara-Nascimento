import React from 'react';
import {useHistory} from 'react-router';
import { Section } from '../Style';
import foguet from '../img/foguet.png';
export const HomePage = () => {
    const history = useHistory()
    const ListaViagem = () => {
        history.push("/trips/list")
    }

    const PageAdmin = () => {
        history.push("/login")
    }


    return ( 
    <Section>
        <nav>
           
        <img src ={foguet}></img><h1> LabeX</h1> 
        <div>
        <button 
        onClick = {
        PageAdmin}> Administrador </button> 
        <button onClick = {
            ListaViagem
        }> conhecer viagens </button> 
        </div>
        </nav> 
        </Section>
         
    )
}