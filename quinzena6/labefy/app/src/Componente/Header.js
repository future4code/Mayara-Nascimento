import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
font-size: 1.5rem;
display: flex;
color:#FF0000;
font-weight: 500;
    p {
        margin: 1rem 2rem;
    }
    a{
        margin: 1rem 1rem;
    }
`


export class Menu extends React.Component {
    render() {
        return (
            <Nav>
                <p><b>Lab</b>efy</p>
                <a>Início</a>
                <a>biblioteca</a>
            </Nav>
        );
    }
}

export default Menu;
