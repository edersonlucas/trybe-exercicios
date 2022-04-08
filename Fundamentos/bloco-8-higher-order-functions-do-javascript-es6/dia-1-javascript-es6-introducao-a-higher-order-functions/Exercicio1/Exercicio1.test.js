const { newEmployees, nameAndEmail } = require('./Exercicio1')

describe('Testa a função newEmployees', () => {
  it(`Testa se ao colocar newEmployees(nameAndEmail) retorna '{
    id1: { nomeCompleto: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
    id2: { nomeCompleto: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
    id3: { nomeCompleto: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
  }'`, () => {
    expect(newEmployees(nameAndEmail)).toEqual({
      id1: { nomeCompleto: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
      id2: { nomeCompleto: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
      id3: { nomeCompleto: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
    })
  })
})