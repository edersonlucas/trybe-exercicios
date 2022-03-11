// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function quemTemMaisLetra(array) {
  let maiorPalavra = ''
  for (nome of array) {
    if (nome.length > maiorPalavra.length) {
      maiorPalavra = nome
    }
  }
  return `A palavra com maior quantidade de caracteres é: ${maiorPalavra}`
}

console.log(
  quemTemMaisLetra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
)
