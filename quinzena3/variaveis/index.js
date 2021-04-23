/* 1º exercicio 
let nome = "null"
let idade = null

console.log (typeof["nome","idade"])

//Object: acredito que o console leu a definição do que é uma variável no js.
 2º exercicio 
let nome = prompt("qual o seu nome?")
let idade = prompt("qual a sua idade?")

console.log ("Oi", nome, "você tem", idade, "anos")

 3º exercicio 
let nome = prompt("qual o seu nome?")
let idade = prompt("qual a sua idade?")
let rua = prompt("qual a sua Rua?")
let estado = prompt("qual o seu estado?")
let profissao = prompt("qual a sua profissao?")


console.log ("Oi", nome, " é muito bom saber que você já tem", idade, "anos. Mora na rua", rua, "no estado de", estado, "e a sua profissão é", profissao)




4º exercicio 
let comidasFavoritas = [ 'arroz', 'feijao', 'carne', 'batatas', 'chocolate']


console.log ("Essas são minhas comidas favoritas:", [comidasFavoritas])

const comidaUsuario = prompt ("Qual a sua comida favorita?")

comidasFavoritas[1] = comidaUsuario

console.log ("Essas são minhas comidas favoritas:", comidasFavoritas)
*/

window.alert('o resultado vai dar true')

let tresPerguntas = ['nao sabemos', 'nao sabemos', 'nao sabemos']
let qualCor = prompt ("Você está com cor de roupa preta?")
qualCor = "sim" === "sim";
tresPerguntas [0]= qualCor

let estaEscuro = prompt ("Esta escuro?")
estaEscuro = "sim" === "sim";
tresPerguntas [1]= estaEscuro

let resultado = prompt ("Você gostou do questionario?")
resultado = "sim" === "sim";
tresPerguntas [2]=resultado

console.log ('Você está com cor de roupa preta?',tresPerguntas[0],'Esta escuro?',tresPerguntas[1],'Você gostou do questionario?',tresPerguntas[2])