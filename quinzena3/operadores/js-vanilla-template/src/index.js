1.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)


2.
 

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i + 1] = 19
console.log('e. ', array)

const valor = array[i + 6]
console.log('f. ', valor)


3.
const SuaIdade = prompt(`sua idade?`)
const IdadeAmigo = prompt(`Qual a idade do seu melhor amigo?`)
const comparador = SuaIdade < IdadeAmigo && SuaIdade > IdadeAmigo

const g = Number(SuaIdade) - Number(IdadeAmigo)


 console.log('Sua idade é maior do que a do seu melhor amigo?', comparador)
 console.log(`A diferença de idade é ${g} ano`)




4.


const insiraNumero = prompt('Insira um numero par')


const numeroPar = Number(insiraNumero / 2)

console.log(numeroPar)



5.
const listaDeTarefas = []

listaDeTarefas[0]= prompt('digite uma tarefa')
listaDeTarefas[1]= prompt('digite uma tarefa')
listaDeTarefas[2]= prompt('digite uma tarefa')

console.log(listaDeTarefas)

const num = prompt('qual tarefa você ñ concluiu? digite o numero:') 


listaDeTarefas.splice (Number(num))

prompt(`as tarefas que você realizou foi ${listaDeTarefas}`)
 

6.
const emailDoUsuario = prompt(`digite seu email`)
const nomedeUsuario = prompt (`digite seu nome de usuario`)



console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),${nomedeUsuario} `) 