// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(numero) {
  somatorio = 0
  if (numero >= 1) {
    for (inicio = 1; inicio <= numero; inicio += 1) {
      somatorio += inicio
    }
  } else if (numero === 0) {
    return numero
  } else {
    return `${numero} não é um número natural! Essa função só aceita números naturais, tente novamente`
  }
  return `O somatório de todos os números de 1 até ${numero} é: ${somatorio} `
}

console.log(somatorio(5))
