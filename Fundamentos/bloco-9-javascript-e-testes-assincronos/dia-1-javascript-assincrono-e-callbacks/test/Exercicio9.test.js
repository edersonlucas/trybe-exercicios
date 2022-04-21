// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../Exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorExpected = new Error('Não temos esse pokémon para você :(')
    const filtroCharmander = (pokemon) => pokemon.name === 'Charmander1'
    const callback = (error, mensagem) => {
      expect(error).toEqual(errorExpected);
      done()
    }
    getPokemonDetails(filtroCharmander, callback)
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'
    const filtroCharmander = (pokemon) => pokemon.name === 'Charmander'
    const callback = (error, mensagem) => {
      try {
        expect(mensagem).toBe(expected);
        done()
      } catch (erro) {
        done(erro)
      }
    }
    getPokemonDetails(filtroCharmander, callback)
  });
});