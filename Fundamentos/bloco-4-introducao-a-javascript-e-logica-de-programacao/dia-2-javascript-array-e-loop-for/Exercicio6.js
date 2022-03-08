// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let totalImpares = 0

for (let number of numbers) {
  if (number % 2 != 0) {
    totalImpares += 1
  }
}
if (totalImpares > 0) {
  console.log(`No seu array tem ${totalImpares} números impares`)
} else {
  console.log('nenhum valor ímpar encontrado')
}
