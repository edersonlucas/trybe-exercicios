// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(array) {
  let posicao = 0
  for (numero of array) {
    if (numero > posicao) {
      posicao = numero
    }
  }
  return `O maior valor está no índice: ${array.indexOf(posicao)}`
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]))
