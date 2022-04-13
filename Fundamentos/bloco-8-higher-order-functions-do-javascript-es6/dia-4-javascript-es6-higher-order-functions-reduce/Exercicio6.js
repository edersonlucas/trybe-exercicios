const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(estudandes, boletins) {
  const medias = boletins.map((notas) => notas.reduce((total, nota) => total += nota, 0) / notas.length)
  return estudandes.map((aluno, index) => ({ name: aluno, average: medias[index] }))
}

// Segundo modo de resolver o mesmo problema

// function studentAverage(estudandes, boletins) {
//   return boletins.reduce((array, notas, index) => {
//     const media = notas.reduce((total, nota) => total += nota, 0) / notas.length
//     array.push({ name: estudandes[index], average: media })
//     return array
//   }, [])
// }

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];