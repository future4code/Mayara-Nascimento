import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import { SectionListTrip, Card, Description, Title} from './Style';


export const ListTripsPage = ( ) => {
    const history = useHistory ()
    const Candidatar = () => {
        history.push("/trips/application")
    }
    const BackToPage = () => {
        history.goBack("")
    }

   const  [trips, setTrips] = useState ([
    {
        id: "0aQ9retlt9zxpeo40G2M",
        name: "Multi luau em Jupiter",
        description: "Noite mágica, com vista para as 69 luas de Jupiter",
        planet: "Jupiter",
        durationInDays: 540,
        date: "21/12/20"
      },
      {
        id: "HF3V6C2VFWoQ3QUOVJON",
        name: "Picnic de Inverno em Plutão",
        description: "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
        planet: "Plutão",
        durationInDays: 980,
        date: "21/12/20"
      },
      {
        id: "NoIFVcOiSgTKTIPVZwXS",
        name: "Ano novo em Mercúrio",
      description: "Venha passar a virada pertinho do Sol!",
        planet: "Mercúrio",
        durationInDays: 7,
        date: "31/12/2019"
      },
      {
        id: "QuWBcnjEQXAlxjLtAjLS",
        name: "Surfando em Netuno",
        description: "Nenhum surfista intergalático pode ficar fora dessa!",
        planet: "Netuno",
        durationInDays: 540,
        date: "21/12/20"
      },
      {
        id: "vX4GWQtFDENjFEo7EAF1",
        name: "Festança Marciana",
        description: "Uma viagem bem legal, na melhor época de marte",
        planet: "Marte",
      durationInDays: 228,
        date: "21/12/21"
      }
   ])
    
    
    


    useEffect (() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/trips')
        .then( (response) => {
            console.log(response.data.trips)
            setTrips(response.data.trips)
        })
    }, []);
    

    return (
        <SectionListTrip>
             <nav>
            <h1>Viagens</h1>
            <p>Candidate-se para sua viagem</p>
            <button onClick={BackToPage}>Sair</button>
            </nav>

            <main>
                
                
                    {trips.map((list) => {
                        return <Card>
                        <Title key="name">{list.name}</Title>
                        <Title key ="date"> {list.date}</Title>
                        <Description key="description">{list.description}</Description>
                        <Description key="planet"> {list.planet}</Description>

                        <button onClick ={Candidatar}>Candidatar</button>
                        </Card>
                    })}
                
            </main>
           
           
                   
                
        </SectionListTrip>
        
    );

}