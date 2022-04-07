const hydrate = string => {
  let soma = 0;
  string.split('').forEach(letra => {
    if (Number.isInteger((parseInt(letra))) === true) {
      soma += parseInt(letra)
    }
  })
  return soma > 1 ? `${soma} copos de água` : `${soma} copo de água`
}

module.exports = hydrate