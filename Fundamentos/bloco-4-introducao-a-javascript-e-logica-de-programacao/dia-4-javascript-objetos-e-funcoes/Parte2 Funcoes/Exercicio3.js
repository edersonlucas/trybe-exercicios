// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenor(array) {
  let posicao = 0
  for (numero of array) {
    if (numero <= posicao) {
      posicao = numero
    }
  }
  return `O menor número está na posição: ${array.indexOf(posicao)}`
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))
