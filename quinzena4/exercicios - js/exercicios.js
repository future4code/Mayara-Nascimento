//Exercício 1

let array = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function inverteArray(array) {
   return array.reverse();
    
}


//Exercício 2
let arrayPares = [1, 2, 3, 4, 5, 6]

function retornaNumerosParesElevadosADois (arrayPares) {
   let resultado = [0, 0, 0]
   resultado[0]  = Math.pow(arrayPares[1], 2)
   resultado[1]  = Math.pow(arrayPares[3], 2)
   resultado[2]  = Math.pow(arrayPares[5], 2)
  return resultado
}


//Exercício 3

function retornaNumerosPares (arrayPares) {
   let resultado = []
   for( const numeros of arrayPares){
     if (numeros % 2 === 0){
        resultado.push(numeros)
     }
   }
   return resultado
}

//Exercício 4

let arrayNumeroMaior = [10, 18, 7, 56, 39]

function retornaMaiorNumero(arrayNumeroMaior) {
   let resultado = 0;

   for (let i = 0; i < arrayNumeroMaior.length; i++){
      if(arrayNumeroMaior[i] > resultado){
         resultado = arrayNumeroMaior [i]
      }
   }
   return resultado

}

//Exercício 5

arrayElementos = [1, 2, 3, 4, 5, 6]

function retornaQuantidadeElementos (arrayElementos) {
   let resultado = arrayElementos.length
   return resultado
}

//Exercício 6

 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2
 const booleano4 = !booleano3 
 

function retornaExpressoesBooleanas() {
   respostas = [
      booleano1 && booleano2 && !booleano4,
      ((booleano1 && booleano2) || !booleano3),
      (booleano2 || booleano3) && (booleano4 || booleano1),
      !(booleano2 && booleano3) || !(booleano1 && booleano3),
      !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
    ]

   return respostas
}


//Exercício 7


function retornaNNumerosPares(n) {
   let osNs = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

   let resultado = []
   
   for( const numeros of osNs){
     if (numeros % 2 === 0){
        resultado.push(numeros)
     }
   }
   return resultado
}


// Exercício 8

let a = 20
let b = 20
let c = 20

function checaTriangulo(a, b, c) {
 if ( a !== b && b !== c){
    return 'Escaleno'
 } else if (a === b && b === c) {
    return 'Equilátero'
 } else {
    return 'Isósceles'
 }
} 

// Exercício 9

let num1 = 30
let num2 = 15

function comparaDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  let maiorDivisivelporMenor;

   if ( num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
   } else {
      maiorNumero = num2;
      menorNumero = num1;
   }

   maiorDivisivelporMenor = maiorNumero % menorNumero === 0

   let diferenca = maiorNumero - menorNumero;

   return {
      maiorNumero, maiorDivisivelporMenor, diferenca
   }
}


// Exercício 10

let arraySegundoMaiorEMenor = [-1, 2, 34, 26, 15, 50, 46, 102]

function segundoMaiorEMenor(arraySegundoMaiorEMenor){

   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMenor = 0
   let indiceMaior = 0
   let novoArray = []

   for ( let i of arraySegundoMaiorEMenor) {
      if (i < menor ){
         menor = i
         indiceMenor = arraySegundoMaiorEMenor.indexOf (menor)
      }
      if (i > maior) {
         maior = i
         indiceMaior = arraySegundoMaiorEMenor.indexOf(maior)
      }
   }
   arraySegundoMaiorEMenor.splice(indiceMaior, 1)
   arraySegundoMaiorEMenor.splice(indiceMenor, 1)

   for (let i of arraySegundoMaiorEMenor) {
      if ( i < segundoMenor){
         segundoMenor = i
      }
      if ( i > segundoMaior){
         segundoMaior = i
      }
   }
    novoArray.push (segundoMaior)
    novoArray.push (segundoMenor)
    return novoArray
}



//Exercício 11

let array11 = [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
function ordenaArray(array11) {

  return array11.sort(function (a, b) { return a - b;})
}

// Exercício 12

function filmeFavorito() {
   const resposta = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
  
   return resposta 
   
}



// Exercício 13

function imprimeChamada() {
   
   const resposta = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci.']
    }
   
   return  `Venha assistir ao filme ${resposta.nome}, de ${resposta.ano}, dirigido por ${resposta.diretor} e estrelado por ${resposta.atores}`
   
} 
// Exercício 14

let lado1 = 10
let lado2 = 20 

function criaRetangulo (lado1, lado2) {
   
    let crieUmRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
    
   
   return crieUmRetangulo 
}



// Exercício 15

pessoa = {}

function anonimizaPessoa(pessoa) {
  pessoa = {
      nome: "Mayara",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }
   
   pessoa.nome = "ANÔNIMO"

   return  pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter( (arrayDePessoas) => { return arrayDePessoas.idade >= 18})
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter( (arrayDePessoas) => { return arrayDePessoas.idade <= 18})
   return novoArray
}

// Exercício 17, letra A

let array17 =  [-1, 1, 2, 5, 25, 4]

function multiplicaArrayPor2(array17) {
   const novoArray = array17.map((num) =>{
      return num * 2
   })
   return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array17) {
   const novoArray = array17.map((num) => { return (num *2).toString() })
   return novoArray  
}

// Exercício 17, letra C

function verificaParidade(array17) {
   const novoArray = array17.map ((num) => {
      if (num % 2 === 0){
         return `${num} é par`
      } else {
         return `${num} é ímpar`
      }
   });
   return novoArray
}


// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizadas = [];
   for (const pessoa of pessoas){
      if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
         autorizadas.push(pessoa)
      }
   }
   return autorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizadas = [];
   for (const pessoa of pessoas){
      if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60){
         naoAutorizadas.push(pessoa)
      }
   }
   return naoAutorizadas
}

//Exercício 19

/* const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ] */
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
   let consultasNome = [
      { nome: "João", dataDaConsulta: "01/10/2021" },
      { nome: "Pedro", dataDaConsulta: "02/07/2021" },
      { nome: "Paula", dataDaConsulta: "03/11/2021" },
      { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
    ]
    
   return consultasNome.sort();
 }
 
 // Exercício 19, letra B
 
 
 function ordenaPorData() {
 
  //
   
 }

//Exercício 20


function atualizaSaldo() {
  const contas = [
      { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
      { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
      { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
      { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
      { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
      { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    
   contas.forEach((conta) => {
   let totalDeCompras = 0
   conta.compras.forEach((valor) => {
     totalDeCompras += valor
   })
   conta.saldoTotal -= totalDeCompras
 })
 return contas
}
