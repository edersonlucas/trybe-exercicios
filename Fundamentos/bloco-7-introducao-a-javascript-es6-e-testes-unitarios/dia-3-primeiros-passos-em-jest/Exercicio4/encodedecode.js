function forneceDicionario(tipo) {
  if (tipo === 'encode') {
    return {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
  }
  return {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
}
function naveDicAltLet(letra, dicionario) {
  for (let index in dicionario) {
    if (letra === index) {
      letra = dicionario[index];
    }
  }
  return letra;
}
function encode(string) {
  let resultado = '';
  for (let letraInString of string) {
    resultado += naveDicAltLet(letraInString, forneceDicionario('encode'));
  }
  return resultado;
}

function decode(string) {
  let resultado = '';
  for (let letraInString of string) {
    resultado += naveDicAltLet(letraInString, forneceDicionario('decode'));
  }
  return resultado;
}

module.exports = { encode, decode, naveDicAltLet, forneceDicionario }
