import styled from 'styled-components'


export const Page = styled.div `
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: auto;

 nav {
     justify-content: space-evenly;
     text-align: center;
     align-items: center;
     display: flex;
     width: 99.90vw;
     height:50px;
     color:#2a1a3d;
     

     button {
         width: 140px;
         height: 25px;
         border:none;
         
     }
 }


`


export const Formulario = styled.div`
    grid-row:2;
    grid-column: 1/2;
    margin:100px auto;
    width:250px;
    font-size:1rem;
    align-items: center;
    input{
    margin-top:40px;
    width: 250px;
    height:35px;
    border-radius: 20px;
    border-color: #ffffff;
    outline:0;
    text-align:center;
    text-transform: uppercase;
    } 
    button {
    margin-top:40px;
    width: 250px;
    height:35px;
    background-color:#909090;
    border:none;
    color:white;
    font-size:1rem;
    :hover{ 
        background-color:#282828;
    }
    }
`

export default Page;