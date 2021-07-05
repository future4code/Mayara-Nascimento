import styled from 'styled-components';

export const Card = styled.div `
    width: 480px;
    height: 320px;
    margin: 2%;
    padding: 2%;
    display: flex;
    color: #313335;
    border-radius: 20px;
    opacity: 80%;
    
  
    box-shadow: 2px 2px 5px #909090;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
        width:90%;
        height: 30px;
        background-color: #075E54;
        border:none;
        font-size:1rem;
        color:#ffffff;
        :hover{
            color:#000000;
            width:90%;
            background-color:#25D366;
            font-weight: 600;
        }
    }
    
`

export const Title = styled.div `
    font-size:1.3rem;
    font-weight: 600;
`

export const Description = styled.div `
    font-size:1rem;
`

export const SectionListTrip = styled.div `
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

 

main {
    margin-top:40px;   
    grid-row:2;
    align-items: center;
    width:90vw;
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
}
`
export default Card