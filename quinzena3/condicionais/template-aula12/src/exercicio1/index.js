//analisa se o número dividido por 2 dá 0.

 const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
   
// a.o código ler o preço da fruto com a condição da string.
// b. o texto que está no console log
//c.  ñ funciona
 let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
   
// mensagem ñ definida. pq a váriavel está dentro da condição. e o console a chamou fora.
 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
   

 
4
const idade = prompt('digite sua idade')

const calculo = Number(idade)

if (calculo > 18) {
    console.log ('Você pode dirigir')
}else {
    console.log ('Você NÃO pode dirigir')
}   

5.
const turno = prompt ("qual turno vc estuda? digite M para manhã V para Tarde ou N para noite")
 
if (turno === "M"){
    console.log('Bom dia')
} else if (turno === "V") {
    console.log('Boa tarde')
} else {
    console.log('Boa noite!')
}   

6. 
 
switch (turno) {
    case "M":
        console.log('Bom dia')
      break;
    case "V":
        console.log('Boa tarde')
      break;
      case "N":
        console.log('Boa noite!')
    default:
       
      break;
  }   

  7.

  const genero = prompt('qual genero de filme vc vai assistir?')
  const qualpreço = prompt('qual o preço do ingresso?')

  if (genero === "fantasia" && qualpreço < 15){
      console.log('Bom filme')
  }else{
    console.log('Escolha outro filme :(')
  }
