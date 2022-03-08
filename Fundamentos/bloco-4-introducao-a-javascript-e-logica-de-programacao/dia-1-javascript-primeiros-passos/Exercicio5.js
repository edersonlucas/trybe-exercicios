// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 80
const angulo2 = 50
const angulo3 = -10

somaDosAngulos = angulo1 + angulo2 + angulo3
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Algun dos ângulos é inválido')
} else if (somaDosAngulos == 180) {
  console.log(true)
} else {
  console.log(false)
}
