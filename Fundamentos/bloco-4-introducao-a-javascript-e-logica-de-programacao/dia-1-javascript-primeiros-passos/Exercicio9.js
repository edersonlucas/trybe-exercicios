// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// Bonus: use somente um if .

const numero1 = 10
const numero2 = 11
const numero3 = 2

if (numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1) {
  console.log('Tem algum número impar:', true)
} else {
  console.log('Tem algum número impar:', false)
}
