const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matrix) {
  return matrix.reduce((arrayNovo, item) => {
    item.forEach((elemento) => arrayNovo.push(elemento))
    return arrayNovo
  })
}


console.log(flatten(arrays));