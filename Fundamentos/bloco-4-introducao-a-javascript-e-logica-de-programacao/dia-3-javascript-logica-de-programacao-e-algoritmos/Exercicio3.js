// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css']

// Maior do array
let maiorDoArray = ''
for (index = 0; index < array.length; index += 1) {
  if (array[index].length >= maiorDoArray.length) {
    maiorDoArray = array[index]
  }
}
console.log(`A maior palavra do array é: ${maiorDoArray}`)

// Menor do array
let menorDoArray = ''
for (indexDoMenor = 0; indexDoMenor < array.length; indexDoMenor += 1) {
  menorDoArray = array[indexDoMenor]
  if (array[indexDoMenor.length <= menorDoArray.length]) {
    menorDoArray = array[indexDoMenor]
  }
}
console.log(`A menor palavra do array é: ${menorDoArray}`)
