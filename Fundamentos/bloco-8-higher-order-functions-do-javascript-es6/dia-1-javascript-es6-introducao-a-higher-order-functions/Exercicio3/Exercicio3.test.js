const contabilizaAcertos = require('./Exercicio3');

describe('Testa a funcao contabilizaAcertos', () => {
  const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  it(`Testa de se a funcao ao receber os seguintes arrays Gabarito:'['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']', resposta aluno: '['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']' retorna uma nota 5`, () => {
    let respostaAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    expect(contabilizaAcertos(gabarito, respostaAluno)).toBe(5)
  })
  it(`Testa de se a funcao ao receber os seguintes arrays Gabarito:'['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']', resposta aluno: '['B', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']' retorna uma nota 3.5`, () => {
    const respostaAluno = ['B', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    expect(contabilizaAcertos(gabarito, respostaAluno)).toBe(3.5)
  })
  it(`Testa de se a funcao ao receber os seguintes arrays Gabarito:'['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']', resposta aluno: '['B', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']' retorna uma nota 0`, () => {
    const respostaAluno = ['B', 'N.A', 'A', 'C', 'D', 'C', 'N.A', 'A', 'C', 'B'];
    expect(contabilizaAcertos(gabarito, respostaAluno)).toBe(0)
  })
  it(`Testa de se a funcao ao receber os seguintes arrays Gabarito:'['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']', resposta aluno: '['B', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']' retorna uma nota 10`, () => {
    const respostaAluno = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    expect(contabilizaAcertos(gabarito, respostaAluno)).toBe(10)
  })
})