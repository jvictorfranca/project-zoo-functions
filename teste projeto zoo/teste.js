const { species, employees } = require('./data');
const data = require('./data');

function countAnimals(specieName) {
  // seu código aqui
  let answer;

  if (specieName === undefined) { answer = {}; } else { answer = species.find((specie) => specie.name === specieName).residents.length; }
  return answer;
}

console.log(countAnimals('lions'))