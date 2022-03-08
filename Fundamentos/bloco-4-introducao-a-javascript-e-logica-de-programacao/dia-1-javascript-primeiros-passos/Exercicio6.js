// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'RAinHA'

switch (peca.toLowerCase()) {
  case 'bispo':
    console.log('diagonais')
    break
  case 'peão':
    console.log('horizontalmente para frente')
    break
  case 'torre':
    console.log('horizontalmente e verticalmente')
    break
  case 'cavalo':
    console.log('duas casas horizontalmente ou verticalmente')
    break
  case 'rainha':
    console.log('verticalmente, horizontalmente ou diagonalmente')
    break
  case 'rei':
    console.log('horizontalmente, verticalmente ou diagonalmente')
    break
  default:
    console.log('Erro peça inválida.')
}

// Não sei nada de xadrez
