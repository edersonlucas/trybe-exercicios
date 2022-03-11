// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

function verificaPalidromo(palavra) {
  let invertida = ''
  let array = palavra.split('')
  array = array.reverse()
  for (letra of array) {
    invertida += letra
  }
  if (palavra === invertida) {
    return `A palavra: ${palavra} é um palíndromopalíndromo? ${true}`
  }
  return `A palavra: ${palavra} é um palíndromo? ${false}`
}

console.log(verificaPalidromo('arara'))
