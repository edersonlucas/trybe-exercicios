const { encode, decode, naveDicAltLet, forneceDicionario } = require('./encodedecode')

describe('Testa a função encode e decode', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function')
  })
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
  })
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
  })
  test(`Testa encode se receber encode('ola amigos') o retorno será 4l1 1m3g4s`, () => {
    expect(encode('ola amigos')).toEqual('4l1 1m3g4s')
  })
  test(`Testa decode se receber decode('4l1 1m3g4s') o retorno será ola amigos`, () => {
    expect(decode('4l1 1m3g4s')).toEqual('ola amigos')
  })
  test(`Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro`, () => {
    expect(decode('4l1 1m3g4s').length).toBe('ola amigos'.length)
  })
})