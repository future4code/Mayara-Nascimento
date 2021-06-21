import React, {useState} from "react"; 
import { baseUrl, usuario } from "url.js";
import axios from "axios"; 

export default function Card () {
    const [pessoa, setPessoa] = useState([]);

    const pegarPessoas = () =>{
        setCarregar(true)
        axios.get (`${baseUrl}${usuario}/person`)
        .then ((res)=> {
            console.log(res.data)
        })
        .catch( (err) => {
           console.log (err)
        })
    }

 
    const cardCorpo =  () => (
        <div>
            
        <h1>Cartao</h1>
        <div
        photo ={pessoa.photo}
        name ={pessoa.nome}
        age ={pessoa.age}
        bio ={pessoa.bio}
        />
        <button 
        onClick={"aceitar"}>Ok</button>
        />
        <button
        onClick={"recusar"}
        />X</button>
        </div>
    )



        return (
         <div>{cardCorpo}</div>
        )
}