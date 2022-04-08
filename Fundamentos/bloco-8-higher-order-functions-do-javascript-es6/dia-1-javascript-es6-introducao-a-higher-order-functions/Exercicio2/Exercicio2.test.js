const { geraNumeroAleatorio, checaNumeros } = require('./Exercicio2')

describe('Testa a funcao checaNumeros', () => {
  it(`Testa se checaNumeros(5, 4) retorna 'Tente novamente!'`, () => {
    expect(checaNumeros(5, 4)).toEqual('Tente novamente!')
  })
  it(`Testa se checaNumeros(5, 5) retorna 'Parabéns você ganhou!'`, () => {
    expect(checaNumeros(5, 5)).toEqual('Parabéns você ganhou!')
  })
})

describe('Testa a funcao  geraNumeroAleatorio', () => {
  it(`Testa se gerarNumeroAleatorio gera um número entre 1 e 5`, () => {
    const numeroGerado = geraNumeroAleatorio()
    const resposta = numeroGerado <= 5 && numeroGerado >= 1 ? `Sim` : `Não`
    expect(resposta).toEqual('Sim')
  })
})
