// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// Bonus: use somente um if .

const numero1 = 11
const numero2 = 6
const numero3 = 11

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
  console.log('Tem algum número par:', true)
} else {
  console.log('Tem algum número par:', false)
}
