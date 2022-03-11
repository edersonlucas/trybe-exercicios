// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function qualNumeroRepeteMais(array) {
  let valor = 0
  let contador1 = 0
  for (index in array) {
    let contador = 0
    for (index2 in array) {
      if (array[index] == array[index2]) {
        contador += 1
      }
    }
    if (contador > contador1) {
      contador1 = contador
      valor = array[index]
    }
  }
  return valor
}

console.log(qualNumeroRepeteMais([2, 3, 2, 5, 8, 2, 3]))
