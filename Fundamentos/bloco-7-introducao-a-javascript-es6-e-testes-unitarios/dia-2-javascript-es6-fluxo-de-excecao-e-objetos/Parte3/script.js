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

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}
allLessons.lesson1 = Object.assign({}, lesson1)
allLessons.lesson2 = Object.assign({}, lesson2)
allLessons.lesson3 = Object.assign({}, lesson3)

console.log(allLessons);