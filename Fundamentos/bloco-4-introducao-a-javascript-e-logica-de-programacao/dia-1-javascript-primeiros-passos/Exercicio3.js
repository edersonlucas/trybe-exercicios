// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numero1 = 40
const numero2 = 43
const numero3 = 36

if (numero1 > numero2 && numero1 > numero3) {
  console.log('O maior número é o', numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log('O maior número é o', numero2)
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log('O maior número é o', numero3)
} else {
  console.log('Os números são iguais')
}
