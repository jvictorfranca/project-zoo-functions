/* eslint-disable max-lines-per-function */
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
  let answer = employees.find(
    (employee) => employee.firstName === employeeName,
  );
  if (answer === undefined) {
    answer = employees.find((employee) => employee.lastName === employeeName);
  }
  if (answer === undefined) {
    answer = {};
  }
  return answer;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specieName) {
  // seu código aqui
  let answer = {};

  if (specieName === undefined) {
    species.forEach((specie) => {
      answer[specie.name] = specie.residents.length;
      return answer[specie.name];
    });
  } else {
    answer = species.find((specie) => specie.name === specieName).residents
      .length;
  }
  return answer;
}

function calculateEntry(entrants) {
  // seu código aqui
  let answer = 0;

  const valueAdult = data.prices.Adult;
  const valueChild = data.prices.Child;
  const valueSenior = data.prices.Senior;

  if (entrants === undefined || Object.keys(entrants).length === 0) {
    answer = 0;
  } else {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;

    answer = Adult * valueAdult + Child * valueChild + Senior * valueSenior;
  }
  return answer;
}

//= = undefined:
function case0(location, array) { // Funcional
  return array.filter((specie) => specie.location === location).map((specie) => specie.name);
}

//= /= undefined: All names
function case1(location, array) { // Funcional
  return array.filter((specie) => specie.location === location).map((specie) => {
    const obj = {};
    obj[specie.name] = specie.residents.map((resident) => resident.name);
    return obj;
  });
}

function fixOrder(string, action, array) {
  const obj = {};
  string.forEach((value) => {
    obj[value] = action(value, array);
  });
  return obj;
}

function filterSex(sex, array) {
  return array.map((specie) => {
    const obj = { name: specie.name };
    obj.popularity = specie.popularity;
    obj.location = specie.location;
    obj.residents = specie.residents.filter((resident) => resident.sex === sex);
    return obj;
  });
}

function sortResidents(array) {
  return array.map((specie) => {
    const obj = { name: specie.name };
    obj.popularity = specie.popularity;
    obj.location = specie.location;
    obj.residents = specie.residents
      .sort((resident1, resident2) => (resident1.name > resident2.name ? 1 : -1));
    return obj;
  });
}

const order = ['NE', 'NW', 'SE', 'SW'];

function ifSex(sex, array) {
  let answer = array;
  if (sex === 'female' || sex === 'male') {
    answer = filterSex(sex, array);
  }
  return answer;
}

function ifSort(sorted, array) {
  let answer = array;
  if (sorted === true) { answer = sortResidents(array); }

  return answer;
}

function getAnimalMap(options) {
  let answer = [];
  let array = JSON.parse(JSON.stringify(species));
  if (options === undefined || options.includeNames !== true) {
    answer = fixOrder(order, case0, array);
  } else {
    const { sorted = false, sex } = options;

    array = ifSex(sex, array);
    ifSort(sorted, array);
    answer = fixOrder(order, case1, array);
  }
  return answer;
}

function getSchedule(dayName) {
  // seu código aqui
  const object = {};
  let answer;
  Object.keys(data.hours).forEach((day) => {
    if (data.hours[day].open === data.hours[day].close) {
      object[day] = 'CLOSED';
    } else {
      object[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    }
  });
  if (dayName === undefined) { answer = object; } else {
    const answerObj = {};
    answerObj[dayName] = object[dayName];
    answer = answerObj;
  }
  console.log(object);
  return answer;
}

function findEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

function findFirstSpecie(id) {
  const employee = findEmployee(id);
  const firstid = employee.responsibleFor[0];
  return firstid;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  const firstID = findFirstSpecie(id);

  const filtraId = species.find((specie) => specie.id === firstID);
  const olderFiltrado = filtraId.residents.reduce((olderResident, resident) =>
    (resident.age > olderResident.age ? resident : olderResident));
  let result = olderFiltrado;
  result = Object.values(result);
  return result;
}

function round(number) {
  const rounded = Math.round((number + 0.0001) * 100) / 100;
  return rounded;
}

function increasePrices(percentage) {
  // seu código aqui
  const increase = percentage / 100;
  const seniorIncrease = data.prices.Senior * increase;
  const adultIncrease = data.prices.Adult * increase;
  const childIncrease = data.prices.Child * increase;

  data.prices.Senior += seniorIncrease;
  data.prices.Adult += adultIncrease;
  data.prices.Child += childIncrease;

  data.prices.Senior = round(data.prices.Senior);
  data.prices.Adult = round(data.prices.Adult);
  data.prices.Child = round(data.prices.Child);
}

// REQUISITO 11 ALOU

function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

// function getIdFirstname (firstName){
//   return employees.find((employee)=> employee.firstName === firstName).id
// }

function getIdFirstname(firstName) {
  return employees.find((employee) => employee.firstName === firstName) === undefined ? undefined
    : employees.find((employee) => employee.firstName === firstName).id;
}

function getIdLastname(lastName) {
  return employees.find((employee) => employee.lastName === lastName) === undefined ? undefined
    : employees.find((employee) => employee.lastName === lastName).id;
}

function getEmployeeIdAll(text) {
  let answer;
  if (getEmployee(text) !== undefined) { answer = text; }
  if (getIdFirstname(text) !== undefined) { answer = getIdFirstname(text); }
  if (getIdLastname(text) !== undefined) { answer = getIdLastname(text); }
  return answer;
}

function idToName(id) {
  const name = employees.find((employee) => employee.id === id).firstName;
  const { lastName } = employees.find((employee) => employee.id === id);
  return `${name} ${lastName}`;
}

function caseArr() { // no parameters
  return employees.map((employee) => {
    const name = `${employee.firstName} ${employee.lastName}`;
    const obj = {};
    obj[name] = employee.responsibleFor.map((animal) => animal);
    return obj;
  });
}

function findAnimalById(id) {
  return species.find((specie) => specie.id === id).name;
}

function findObjNames(array) {
  return array.map((employee) => {
    const name = Object.keys(employee)[0];
    const obj = {};
    const arrayValues = Object.values(employee)[0];
    obj[name] = arrayValues.map((animal) => findAnimalById(animal));
    return obj;
  });
}

function findPersonArraynames(personName, array) {
  return array.find((person) => Object.keys(person)[0] === personName);
}

function sortArray(array) {
  const tempArray = JSON.parse(JSON.stringify(array));
  tempArray.sort((emp1, emp2) => (Object.keys(emp1)[0] > Object.keys(emp2)[0] ? 1 : -1));
  return tempArray;
}

function arrToObj(array) {
  const obj = {};
  array.forEach((value) => {
    const name = Object.keys(value)[0];
    const inarray = Object.values(value)[0];
    obj[name] = inarray;
    return obj;
  });
  return obj;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const id = getEmployeeIdAll(idOrName);
  const noNames = caseArr();
  const arrayNames = findObjNames(noNames);
  let answer;
  if (idOrName === undefined) {
    answer = sortArray(arrayNames);
    answer = arrToObj(answer);
  } else {
    const fullName = idToName(id);
    answer = findPersonArraynames(fullName, arrayNames);
  }

  return answer;
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
