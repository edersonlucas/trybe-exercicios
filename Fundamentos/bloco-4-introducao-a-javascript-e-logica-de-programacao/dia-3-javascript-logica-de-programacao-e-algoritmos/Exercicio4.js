// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo = 0
for (let numero = 0; numero <= 50; numero += 1) {
  let contador = 0
  for (let divisor = 1; divisor <= numero; divisor += 1) {
    if (numero % divisor === 0) {
      contador += 1
    }
  }
  if (contador === 2) {
    maiorNumeroPrimo = numero
  }
}

console.log(`O maior número primo entre 0 e 50 e: ${maiorNumeroPrimo}`)
