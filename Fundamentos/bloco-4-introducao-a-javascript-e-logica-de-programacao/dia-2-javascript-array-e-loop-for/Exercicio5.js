// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let valor = 0

for (i = 0; i < numbers.length; i += 1) {
  if (valor < numbers[i]) {
    valor = numbers[i]
  }
}
console.log(`O mair valor contido no array é ${valor}`)
