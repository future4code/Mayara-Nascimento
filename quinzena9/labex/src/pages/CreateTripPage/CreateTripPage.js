import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router'
import {Page, Formulario} from './Styled';
import useForm from './FormCreateTrip';

const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("tokenKeys");

        if (token === null) {
            console.log("não");
            history.push("/login");
        }
    }, []);
};


export const CreateTripPage = () => {
    useProtectedPage();

    const history = useHistory()
    const BackToPage = () => {
        history.goBack("")
    }

    const {form, onChange, cleanFields} = useForm({ name: "", planet: "", date: "", description: "", durationInDays: ""})
    

    const Submeter = (event) => {

        console.log(form)
        event.preventDefault();

            const token = window.localStorage.getItem("tokenKeys")
        
            const headers ={ 
               headers: { 
                   auth: token
                }
            }

            const body = {
                name: "Ano novo em Mercúrio",
                planet: "Mercúrio",
                date: "31/12/2019",
                description: "Venha passar a virada pertinho do Sol!",
                durationInDays: 7
            }
           
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/trips", body, headers)
            .then(
                (response) => {
                    alert('Viagem criada com sucesso')
                   form(response)
                    
                }
            ).catch(
                (error) => {
                    console.log('erronapagina', error.response)
                }
            );
       

        cleanFields();   
        }
        ///
  

   
    return (
        <Page>
        <nav>
        <h2> Formulário para administrador </h2> 
        <p> Nova viagem </p> 
        <button onClick = {BackToPage}> Voltar </button> 
        </nav> 
        <Formulario>
        <form onSubmit={Submeter}>
        
            <input
            name="name"
            placeholder={"digite seu nome"}
            type="nome"
            value={form.name}
            onChange={onChange}
            ></input>
            <input
            name="planet"
            placeholder={"escolha planeta"}
            type="planet"
            value={form.planet}
            onChange={onChange}
            required
            ></input>
            <input
            name="date"
            placeholer={"data"}
            type="date"
            value={form.date}
            onChange={onChange}
            required></input>
            <input
            name="description"
            placeholer={"descrição"}
            type="description"
            value={form.text}
            onChange={onChange}
            required>
            </input>
            <input
            name="durationInDays"
            placeholder={"Digite os dias"}
            type="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            required
            ></input>
            <button> Clique</button>
        </form>
        </Formulario>
       </Page>
    )
}