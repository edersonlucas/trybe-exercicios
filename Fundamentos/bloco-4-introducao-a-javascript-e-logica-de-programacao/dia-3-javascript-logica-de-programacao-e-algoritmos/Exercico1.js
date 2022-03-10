// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// Atenção! 0! = 1 e 1! = 1

let numero = 10
let resultado
if (numero == 1 || numero == 0) {
  resultado = 1
} else {
  resultado = numero
  for (multiplicador = numero; multiplicador > 0; multiplicador -= 1) {
    if (numero != multiplicador) {
      resultado *= multiplicador
    }
  }
}
console.log(`O Fatorial de ${numero} é igual a ${resultado}`)
