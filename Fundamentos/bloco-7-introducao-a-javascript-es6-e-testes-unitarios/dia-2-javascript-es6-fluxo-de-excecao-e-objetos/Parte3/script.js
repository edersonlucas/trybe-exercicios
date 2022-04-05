const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1

const addToObject = (object, key, value) => object[`${key}`] = value

addToObject(lesson2, 'turno', 'noite')

console.log(lesson2);

// Exercicio 2

const listKeyToObject = object => Object.keys(object).forEach(Key => console.log(Key))
listKeyToObject(lesson3);

// Exercicio 3

const lengthToObject = object => `O tamanho do objeto é ${Object.keys(object).length}`

console.log(lengthToObject(lesson3));

// Exercicio 4

const valueToObject = object => Object.values(object).forEach(Value => console.log(Value))

valueToObject(lesson3)

// Exercicio 5


// const allLessons = {
//   lesson1: {},
//   lesson2: {},
//   lesson3: {},
// }
// allLessons.lesson1 = Object.assign({}, lesson1)
// allLessons.lesson2 = Object.assign({}, lesson2)
// allLessons.lesson3 = Object.assign({}, lesson3)

// console.log(allLessons);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Exercicio 6
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudandes = objeto => {
  let somatorio = 0
  for (let i = 1; i <= Object.keys(objeto).length; i += 1) {
    somatorio += objeto[`lesson${i}`].numeroEstudantes
  }
  return somatorio
}

console.log(totalEstudandes(allLessons));

// Exercicio 7

const getValueByNumber = (objeto, posicao) => Object.values(objeto)[posicao]


console.log(getValueByNumber(lesson1, 0));

// Exercicio 8
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// const verifyPair = (objeto, chave, valor) => {
//   let contador;
//   const array = Object.entries(objeto)
//   array.forEach(elemento => {
//     contador = 0
//     elemento.forEach(outro => {
//       if (outro === chave || outro === valor) {
//         contador += 1
//       }
//     })
//   })
//   if (contador === 2) {
//     return true
//   } else {
//     return false
//   }
// };
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const verifyPair = (objeto, chave, valor) => {
  const chaveAndValue = Object.entries(objeto)
  for (let i = 0; i < chaveAndValue.length; i += 1) {
    if (chaveAndValue[i][0] === chave && chaveAndValue[i][1] === valor) {
      return true
    }
  }
  return false
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


// Bônus

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.Use o objeto criado no exercício 5.


const qtAssistiuAula = (objeto, materia) => {
  let total = 0
  Object.keys(objeto).forEach(key => {
    console.log(Object.keys(objeto[key]));
    if (Object.values(objeto[key]).includes(materia)) {
      total += Object.values(objeto[key])[1]
    }
  })
  return total
}

console.log(qtAssistiuAula(allLessons, 'Matemática'));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


const createReport = (objeto, professor) => {
  const novo = {}
  const aula = []
  let total = 0
  Object.keys(objeto).forEach(key => {
    console.log(Object.keys(objeto[key]));
    if (Object.values(objeto[key]).includes(professor)) {
      aula.push(novo.professor = Object.values(objeto[key])[0])
      total += Object.values(objeto[key])[1]
      novo.professor = Object.values(objeto[key])[2]
      novo.aulas = aula
      novo.estudantes = total
    }
  })
  return novo
}

console.log(createReport(allLessons, 'Maria Clara'))