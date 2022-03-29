// function converterValor(valor) {
//   let contador = 0;
//   let total;
//   for (let numero of valor) {
//     if (contador === 0) {
//       total = numero + ',';
//       contador += 1;
//     } else {
//       total += numero;
//     }
//   }
//   return `R$ ${total}`;
// }

// function converterValorTotal(valor) {
//   let contador = 0;
//   let total;
//   for (let numero of valor) {
//     if (contador === 0) {
//       total = numero;
//       contador += 1;
//     } else if (contador === 1) {
//       total += numero + ',';
//       contador += 1;
//     } else {
//       total += numero;
//     }
//   }
//   return `R$ ${total}`;
// }
// console.log(converterValorTotal(String(3031)));

function converterNumero(numero, formato) {
  let result = '';
  let indexAlt = 0;
  let NumToString = String(numero);
  for (let index = 0; index < formato.length; index += 1) {
    if (
      Number.isInteger(parseInt(NumToString[indexAlt])) === true &&
      Number.isInteger(parseInt(formato[index])) === true
    ) {
      result += NumToString[indexAlt];
      indexAlt += 1;
    } else {
      result += formato[index];
    }
  }
  return result;
}

console.log(converterNumero(1030, 'R$ 00,00'));

// for (index = 0; index < NumToString.length; index += 1) {
//   console.log(NumToString[index]);
//   if (
//     Number.isInteger(parseInt(NumToString[index])) === true &&
//     Number.isInteger(parseInt(formato[index])) === true
//   ) {
//     result += NumToString[index];
//   } else {
//     result += formato[index];
//     index -= 1;
//   }
// }
// return result;
