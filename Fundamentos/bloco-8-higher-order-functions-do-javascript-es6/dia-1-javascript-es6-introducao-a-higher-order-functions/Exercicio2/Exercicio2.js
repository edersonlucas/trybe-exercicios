/*
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const geraNumeroAleatorio = () => Math.ceil(Math.random() * 5)

const aposta = (num, callback) => {
  const numSorteado = geraNumeroAleatorio
  return callback(num, numSorteado)
}

const checaNumeros = (num, numSorteado) => {
  let resultado;
  if (num === numSorteado) {
    resultado = 'Parabéns você ganhou!'
  } else {
    resultado = 'Tente novamente!'
  }
  return resultado
}


console.log(aposta(5, checaNumeros));

module.exports = { geraNumeroAleatorio, checaNumeros }