// Parte II


// 1)

// Crie uma função que receba um número e retorne seu fatorial.

// Resolução

const fatorial = n => {
  let total = 1
  if (n === 0) {
    return total
  } else {
    for (let i = n; i >= 1; i -= 1) {
      total *= i
    }
    return total
  }
}

console.log(fatorial(6));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// Resolução

const fatorialBonus = n => n < 2 ? 1 : n *= fatorialBonus(n - 1)

console.log(fatorialBonus(2));



// 2)

// Crie uma função que receba uma frase e retorne qual a maior palavra.

// Resolução

const longestWord = frase => {
  let maior = ''
  frase.split(' ').forEach(palavra => {
    if (palavra.length > maior.length) {
      maior = palavra;
    }
  });
  return maior;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3) Está na pasta Exercio 3: Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// 4)Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

// Resolução

const funcao = (string, stringQualquer) => {
  const resultado = stringQualquer.replace(/x/gi, string)
  return resultado
}

console.log(funcao('Ederson', 'Tryber x Aqui!'));

// Resolução Alternativa

const funcaoCom = (string, stringQualquer, letra) => {
  let resultado = ''
  stringQualquer.split('').forEach(letraNaString => {
    if (letraNaString === letra) {
      resultado += string;
    } else {
      resultado += letraNaString;
    }
  })
  return resultado
}

console.log(funcaoCom('Ederson', 'Tryber x Aqui!', 'x'));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// Resolução

const minhasSkils = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'LINUX']


const funcao2 = (frase, array) => {
  let resultado = `${frase} Minhas cinco principais habilidades são:`
  array.sort().forEach(habilidade => {
    resultado += `
    ${habilidade}`
  })
  return resultado
}

console.log(funcao2(funcaoCom('Ederson', 'Tryber x Aqui!', 'x'), minhasSkils));