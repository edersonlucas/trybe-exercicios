const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  return array.reduce((totalA, name) => {
    name.split('').forEach((letra) => letra === 'a' || letra === 'A' ? totalA += 1 : totalA)
    return totalA
  }, 0)
}

console.log(containsA(names));