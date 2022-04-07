// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// const idExiste = (id) => {
//   const ids = []
//   professionalBoard.forEach(item => {
//     ids.push(item.id)
//   })
//   if (ids.includes(id) !== true) {
//     throw new Error('ID não identificada')
//   }
//   return true
// }

const searchEmployee = (id, info) => {
  let pessoa;
  let resposta;
  const ids = []
  professionalBoard.forEach(item => {
    ids.push(item.id)
  })
  if (ids.includes(id) !== true) {
    throw new Error('ID não identificada')
  } else {
    professionalBoard.forEach(item => {
      if (item.id === id) {
        pessoa = item
      }
    })
    if (Object.keys(pessoa).includes(info)) {
      resposta = pessoa[info]
    } else {
      throw new Error('Informação indisponível')
    }
  }
  return resposta
}


// const searchEmployee = (id, info) => {
//   let pessoa;
//   let resposta;
//   const ids = []
//   professionalBoard.forEach(item => {
//     ids.push(item.id)
//   })
//   if (ids.includes(id) !== true) {
//     throw new Error('ID não identificada')
//   } else {
//     professionalBoard.forEach(item => {
//       if (item.id === id) {
//         pessoa = item
//       }
//     })
//     if (Object.keys(pessoa).includes(info)) {
//       resposta = `ID: ${id}, ${info}: ${pessoa[info]}`
//     } else {
//       throw new Error('Informação indisponível')
//     }
//   }
//   return resposta
// }

module.exports = searchEmployee