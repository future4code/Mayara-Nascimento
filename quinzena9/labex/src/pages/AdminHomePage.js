import React, {useState, useEffect}  from 'react';
import { useHistory } from 'react-router-dom';
import {Section, Card} from '../Style';
import axios from 'axios';
import useForm from './CreateTripPage/FormCreateTrip'
 
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

export const AdminHomePage = () =>{
    
    const  [trips, setTrips] = useState ([
        {
            id: "0aQ9retlt9zxpeo40G2M",
            name: "Multi luau em Jupiter",
            description: "Noite mágica, com vista para as 69 luas de Jupiter",
            planet: "Jupiter",
            durationInDays: 540,
            date: "21/12/20"
          }
    ])

    const history = useHistory();
       const BackToPage = () => {
           history.goBack()
       }     

       const CreateTrip = () => {
           history.push("/admin/trips/create")
       }

       const Logout = () => {
           history.push("/")
           localStorage.clear()
       }

       useProtectedPage()
    
        useEffect (() => { 
            const token = localStorage.getItem("tokenKeys");
    
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/trip/NoIFVcOiSgTKTIPVZwXS", 
            {
            headers: {
                auth: token}
            })
            .then ((response) => {
                console.log(response)
                setTrips(response)
                
            }).catch (
                (error) => {
                    console.log('erro', error.response)
                }
            );
        }, []);

        

    return(
        <Section>
            <nav>
        <h1>Bem vindo, Administrador</h1>
        <p>Administrador ver lista de viagens e deleta-las</p>
        <button onClick ={BackToPage}>Voltar</button>
       
        <button onClick ={CreateTrip}>Criar Viagem</button>
        <button onClick={Logout}> Sair</button>
       
        </nav>
        <main>
    

        
       
        </main>
        </Section>
        )
}
