const uppercase = require('../Exercicio7')

describe('Teste da função uppercase', () => {
  it('Testa se a função transforma um letras de palavras em letras maiusculas', (done) => {
    uppercase('trybe', (palavra) => {
      try {
        expect(palavra).toBe('TRYBE')
        done()
      } catch (error) {
        done(error);
      }
    });
  })
})