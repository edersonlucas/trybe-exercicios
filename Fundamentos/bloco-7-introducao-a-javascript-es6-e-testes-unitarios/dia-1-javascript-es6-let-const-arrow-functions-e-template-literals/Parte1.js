// Parte 1

// Exercicio1: Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// Código Original

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// Resolução

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

testingScope(true);

// // Exercicio2: Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordenar = array => {
//   let frase = 'Os números ';
//   array = array.sort((a, b) => {
//     return a - b;
//   });
//   for (numero in array) {
//     if (parseInt(numero) === array.length - 1) {
//       frase += `${String(array[numero])},`;
//     } else {
//       frase += `${String(array[numero])}`;
//     }
//   }
//   return `${frase} se encontram ordenados de forma crescente!`;
// };

const fraseOk = array => {
  let frase = 'Os números ';
  for (numero in array) {
    if (parseInt(numero) !== array.length - 1) {
      frase += `${String(array[numero])},`;
    } else {
      frase += `${String(array[numero])}`;
    }
  }
  return `${frase} se encontram ordenados de forma crescente!`;
};

// const ordenar = array => {
//   const ordenado = [];
//   const tamanhoInicialArray = array.length;
//   for (let index1 = 0; index1 < tamanhoInicialArray; index1 += 1) {
//     let inicio;
//     for (let index = 0; index < array.length; index += 1) {
//       if (index === 0) {
//         inicio = array[index];
//       } else if (array[index] <= inicio) {
//         inicio = array[index];
//       }
//     }
//     ordenado.push(inicio);
//     array.splice(array.indexOf(inicio), 1);
//   }
//   return fraseOk(ordenado);
// };

const ordenar = array => {
  array = array.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return fraseOk(array);
};

// console.log(ordenar(oddsAndEvens));

console.log(ordenar(oddsAndEvens)); // será necessário alterar essa linha 😉
