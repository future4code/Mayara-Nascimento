
import styled from 'styled-components';

export const Section = styled.div`

font-family: Roboto, -apple-system, BlinkMacSystemFont,;
 display: grid;
 grid-template-rows: auto;
 grid-auto-columns: 1fr 2fr 1fr;
 align-content: center;
text-align: center;

img {
    margin-top:40px;
    width:60px;
}    
nav {
    grid-columns:2;
    justify-content: space-between;
}
 
 h1{ 
    margin:15px;
    font-size:32px;
    font-weight:500;
    font-style:normal;
    text-align: center;
 }

 button {
    width: 300px;
    height: 48px;
    margin-top:20px;
    border: 1px solid rgba(188, 188, 188, 0.88);
    box-sizing: border-box;
    border-radius: 20px;
    font-size: 1rem;
    font-style:normal;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.03em;
    color: #1D2129;
    text-transform: uppercase;
    font-variant: small-caps;

 }

 div {
     
     margin-top: 80px;
     align-items: center;
     justify-content: center;
     display:flex;
     flex-direction: column;
     
 }
`






export default Section