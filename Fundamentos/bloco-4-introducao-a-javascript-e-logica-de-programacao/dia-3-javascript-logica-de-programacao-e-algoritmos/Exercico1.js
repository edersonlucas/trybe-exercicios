// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// O fatorial de um número n é caracterizado como n!

// O fatorial de um número inteiro e positivo “n”, representado por “n!” é obtido a partir da multiplicação de todos os seus antecessores até o número um, cuja expressão genérica é n! = n . (n – 1). (n – 2). (n – 3) ... 2,1.

// Pela definição dada, o fatorial de 2 corresponde a 2! (lê-se 2 fatorial), sendo assim 2! = 2 . 1 = 2. Veja abaixo o fatorial de outros números inteiros:

// • 3! = 3 . 2 . 1 = 6
// • 4! = 4. 3 . 2 . 1 = 24
// • 5! = 5 . 4 . 3 . 2 . 1 = 120
// • 6! = 6 . 5 . 4 . 3 . 2 . 1 = 720
// • 7! = 7 . 6 . 5 . 4 . 3 . 2 . 1 = 5.040
// • 8! = 8 . 7 . 6 . 5 . 4 . 3 . 2 . 1 = 40.320
// • 9! = 9 . 8 . 7 . 6 . 5 . 4 . 3 . 2 . 1 = 362.880
// • 10! = 10 . 9 . 8 . 7 . 6 . 5 . 4 . 3 . 2 . 1 = 3.628.800

// Atenção! 0! = 1 e 1! = 1

let numero = 6
let resultado
if (numero == 1 || numero == 0) {
  resultado = numero
} else {
  resultado = numero
  for (multiplicador = numero; multiplicador > 0; multiplicador -= 1) {
    if (numero != multiplicador) {
      resultado *= multiplicador
    }
  }
}
console.log(`O Fatorial de ${numero} é igual a ${resultado}`)
