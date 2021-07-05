import React from 'react';
import { useHistory } from 'react-router-dom'
import {Page, Formulario, Nav} from './Styled';
import axios from 'axios';
import useForm from './formCandidato';

export const ApplicationFormPage = () =>{

    const history = useHistory ()
    const BacktoPage = () => {
        history.goBack("")
    }

    const {form, onChange, cleanFields} = useForm({ id:"", name: "", age: "", applicationText:"", profession: "", country:""})
    
    

    

    const ApplytoTrip = (event) => {
            
        console.log(form)
        event.preventDefault();
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/trips/${form.id}/apply`
        const body = {
            name: "Astrodev",
            age: 20,
            applicationText: "Quero muuuuuuito ir!!!",
            profession: "Chefe",
            country: "Brasil"

        }
        
        axios.post(url, body
        ).then((response) => {
            
            form(response)
            console.log(form)
            
        }).catch((error)=> {
            console.log("naodeucerto", error.response)
        })

        cleanFields();    
    }
    
   
    return (
        <Page>
            <nav>
            <h1>Usuário se candidata</h1>
            <button onClick = {BacktoPage}>Voltar</button>
            </nav>
        
        <Formulario>
        <form onSubmit={ApplytoTrip}>
            

            <select value={form.id} onChange={onChange.id}>
                    <option>Selecione uma viagem</option>
                    <option id="9te6jDxGwh61dmXNSFCi">Picnic de Inverno em Plutão</option>
                    <option id="UY1Wt46fEWgjfMOjQKpo">Ano novo em Mercúrio</option>
                    <option id="YEBHK4FVQjv0KjQVV3RZ">Nenhum surfista intergalático pode ficar fora dessa!</option>
                </select>
             <input
            name="name"
            placeholder={"digite seu nome"}
            type="nome"
            value={form.name}
            onChange={onChange}
            ></input>
            <input
            name="age"
            placeholder={"sua idade"}
            type="idade"
            value={form.age}
            onChange={onChange}
            required
            ></input>
            <input
            name="applicationText"
            placeholer={"texto de candidatura"}
            type="texto"
            value={form.applicationText}
            onChange={onChange}
            required></input>
            <input
            name="profession"
            placeholer={"profissão"}
            type="profession"
            value={form.profession}
            onChange={onChange}
            required>
            </input>
            <input
            name="country"
            placeholder={"Digite seu País"}
            type="pais"
            value={form.country}
            onChange={onChange}
            required
            ></input>
            <button> Clique</button>
        </form>
        </Formulario>
        </Page>
    )
}

export default ApplicationFormPage