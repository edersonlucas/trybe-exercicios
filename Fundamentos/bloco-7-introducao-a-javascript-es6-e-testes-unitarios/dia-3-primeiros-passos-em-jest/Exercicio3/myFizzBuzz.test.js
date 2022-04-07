const myFizzBuzz = require('./myFizzBuzz')

describe('Testes da função myFizzBuzz', () => {
  test('Teste se o retorno de myFizzBuzz(15) é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  test('Teste se o retorno de myFizzBuzz(9) é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  test('Teste se o retorno de myFizzBuzz(10) é buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  test('Teste se o retorno de myFizzBuzz(7) é 7', () => {
    expect(myFizzBuzz(7)).toBe(7)
  })
  test(`Teste se o retorno de myFizzBuzz('a') é false`, () => {
    expect(myFizzBuzz('a')).toEqual(false)
  })
})