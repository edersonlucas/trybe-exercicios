// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const valor1 = 11
const valor2 = 10

if (valor1 > valor2) {
  console.log('O maior valor é o', valor1, 'o menor valor é o', valor2)
} else if (valor1 == valor2) {
  console.log(valor1, 'e', valor2, 'são iguais')
} else {
  console.log('O maior valor é o', valor2, 'o menor valor é o', valor1)
}
