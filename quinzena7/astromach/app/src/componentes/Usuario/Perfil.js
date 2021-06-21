import { render } from "@testing-library/react";
import React from "react";

export const Card = () => {

   const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    const aluno = "mayara"

    render()
    return (
        <div>
            {url}
        </div>
    )
}

export default Card;