const searchEmployee = require('./searchEmployee')

describe('Testa a função bônus', () => {
  it('Testa se a função existe', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  it(`Testa se passado um id que nao conste no banco de dados ele retorna um erro 'ID não identificado'`, () => {
    expect(() => { searchEmployee('9852-1-2', 'lastName') }).toThrow(Error('ID não identificada'))
  })
  it(`Testa Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível`, () => {
    expect(() => { searchEmployee('9852-2-2', 'lastNome') }).toThrow(Error('Informação indisponível'))
  })
  it(`Testa se passado o id:'1256-4' e a info: 'firstName' será retornado 'Linda'`, () => {
    expect(searchEmployee('1256-4', 'firstName')).toEqual('Linda')
  })
  it(`Testa se passado o id:'5569-4' e a info: 'lastName' será retornado 'Jobs'`, () => {
    expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs')
  })
})