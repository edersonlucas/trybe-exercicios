/*
Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const aluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificador = (gabarito, respostaAluno, callback) => {
  return callback(gabarito, respostaAluno)
}

const contabilizaAcertos = (gabarito, respostaAluno) => {
  let contador = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostaAluno[i]) {
      contador += 1;
    } else if (respostaAluno[i] !== 'N.A') {
      contador -= 0.5
    }
  }
  contador = contador < 0 ? 0 : contador;
  return contador;
}


console.log(verificador(gabarito, aluno, contabilizaAcertos));

module.exports = contabilizaAcertos;