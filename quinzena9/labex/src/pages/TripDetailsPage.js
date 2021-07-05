import axios from 'axios'
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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



export const TripDetailsPage = () => {

    useProtectedPage()

    useEffect (() => { 
        const token = localStorage.getItem("tokenKeys");

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-cristina-munoz/trip/NoIFVcOiSgTKTIPVZwXS", 
        {
        headers: {
            auth: token}
        })
        .then ((response) => {
            console.log(response.data)
            
        }).catch (
            (error) => {
                console.log('erro', error.response)
            }
        );
    }, []);

    return (
    <div>
        <h1>Bem vindo</h1> 
    </div>)
    
}