const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let answer = employees.find((employee) => employee.firstName === employeeName);
  if (answer === undefined) {
    answer = employees
      .find((employee) => employee.lastName === employeeName);
  }
  if (answer === undefined) {
    answer = {};
  } return answer;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specieName) {
  // seu código aqui
  let answer = {};

  if (specieName === undefined) {
    species.forEach((specie) => {
      answer[specie.name] = specie.residents.length; return answer[specie.name];
    });
  } else { answer = species.find((specie) => specie.name === specieName).residents.length; }
  return answer;
}

function calculateEntry(entrants) {
  // seu código aqui
  let answer = 0;

  const valueAdult = data.prices.Adult;
  const valueChild = data.prices.Child;
  const valueSenior = data.prices.Senior;

  if (entrants === undefined || Object.keys(entrants).length === 0) { answer = 0; } else {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;

    answer = Adult * valueAdult + Child * valueChild
     + Senior * valueSenior;
  }
  return answer;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
