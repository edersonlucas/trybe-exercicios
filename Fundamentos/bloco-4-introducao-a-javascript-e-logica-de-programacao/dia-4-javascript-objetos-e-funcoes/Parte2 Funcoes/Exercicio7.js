// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(stringWord, stringEnd) {
  let contador = 0
  let verificar = []
  if (stringWord.length > stringEnd.length && stringWord.length != stringEnd) {
    for (index = stringWord.length - 1; index > 0; index -= 1) {
      verificar.push(stringWord[index])
      contador += 1
      if (stringEnd.length === contador) {
        break
      }
    }
  }
  let inverte = verificar.reverse()
  inverte = inverte.join('')
  if (stringEnd == inverte) {
    return `Tem no final da palavra? ${true}`
  } else {
    return `Tem no final da palavra? ${false}`
  }
}
console.log(verificaFimPalavra('trybe', 'be'))
