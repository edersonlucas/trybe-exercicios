function techList(array, string) {
  function objetoList(tecno, nome) {
    return {
      tech: tecno,
      name: nome,
    };
  }
  let dados = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  for (let tecno of array) {
    dados.push(objetoList(tecno, string));
  }
  return dados;
}

module.exports = techList;