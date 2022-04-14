/*
2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest .
*/


const sumAll = (...values) => {
  return `A soma de todos os números é ${values.reduce((acc, value) => acc += value, 0)}`
}

console.log(sumAll(1, 4, 5));