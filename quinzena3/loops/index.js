// Exercício 1 está imprimindo o valor de 1 à 5
//Exercício 2 vai imprimir qual número é maior que 18. No caso tem mais que 1 número.
//Exercício 3
// console.log(original) //a. Imprima cada um dos valores do array original.

// b. cada um dos valores do array original divididos por 10
let original = [90, 30, 40, 50, 60, 120, 180, 500]


//a. 

for (const numeros of original){
    console.log('Numero do array: ', numeros)
}

//B.
    
for (const numeros of original){
    console.log('Numero do array: ', numeros/10)
}

//c.
const pares = []

for (const numeros of original){
    if(numeros % 2 === 0){
        pares.push(numeros)
    }
}

console.log('Números pares:', pares)
//d. index começa pela posição, i < contar até a posição x

const arrayDeStings = [];

for (let i = 0; i < original.length; i++) {
    const string =  `O elemento de index ${i} é: ${original[i]}`
    arrayDeStings.push(string); 
}
console.log('array de strings:', arrayDeStings)

//e.

let valorMenor = original[0]
let valorMaior = original[0]


for (let i = 0; i < original.length; i++){
    if(original[i] > valorMaior){
        valorMaior = original[i]
    }else if(original[i] < valorMenor){
        valorMenor = original[i]
    }
}

console.log(`o numero do array menor é ${valorMenor} e o numero maior é ${valorMaior}`)

