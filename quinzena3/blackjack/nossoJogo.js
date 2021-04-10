/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log('Bem vindo ao jogo de BlackJack')

let jogo = confirm('quer iniciar uma nova partida?')

if (jogo === true){
   computador = comprarCarta()

   usuario = comprarCarta()
   

   console.log(`Usuário - ${usuario.texto} - pontuação ${usuario.valor}`)
   console.log(`Computador - ${computador.texto} - pontuação ${computador.valor}`)

  
      if ( usuario.valor > computador.valor){

         console.log ("O usuário ganhou!")
   
      } else if ( usuario.valor < computador.valor){
   
         console.log ("O computador ganhou!")
   
      } else{
         console.log("empate")
      }  
  
} else {
   console.log('o jogo acabou')
}
