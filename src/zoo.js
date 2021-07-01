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

// function fixOrder(string, action) {
//   const obj = {};
//   string.forEach((value) => {
//     obj[value] = action(value);
//   });
//   return obj;
// }

// function getAnimalMapCase1(string) { // if (options === undefined)
//   return species.filter((specie) => specie.location === string)
//     .map((specie) => specie.name);
// }

// function getAnimalMapCase2(string) {
//   return species.filter((specie) => specie.location === string).map((specie) => {
//     const object = {};
//     object[specie.name] = specie.residents.map((resident) => resident.name);
//     return object;
//   });
// }

// function getAnimalMapCase3(string) {
//   return species.filter((specie) => specie.location === string).map((specie) => {
//     const object = {};
//     object[specie.name] = specie.residents.map((resident) => resident.name).sort();
//     return object;
//   });
// }

// function getAnimalMapCaseMale(string) {
//   return species.filter((specie) => specie.location === string).map((specie) => {
//     const object = {};
//     object[specie.name] = specie.residents.filter((resident) => resident.sex === 'male').map((resident) => resident.name).sort();
//     return object;
//   });
// }

// function getAnimalMapCaseFemale(string) {
//   return species.filter((specie) => specie.location === string).map((specie) => {
//     const object = {};
//     object[specie.name] = specie.residents.filter((resident) => resident.sex === 'female').map((resident) => resident.name).sort();
//     return object;
//   });
// }

// eslint-disable-next-line complexity
function getAnimalMap(options) {
  // seu código aqui
  // let answer;
  // const order = ['NE', 'NW', 'SE', 'SW'];
  // if (options === undefined) {
  //   answer = fixOrder(order, getAnimalMapCase1);
  // } else {
  //   const { includeNames = false, sorted = false, sex = 'any' } = options;
  //   if (includeNames === true) {
  //     answer = fixOrder(order, getAnimalMapCase2);
  //   } if (includeNames === true && sorted === true) {
  //     answer = fixOrder(order, getAnimalMapCase3);
  //   } if (includeNames === true && sex === 'male') {
  //     answer = fixOrder(order, getAnimalMapCaseMale);
  //   } if (includeNames === true && sex === 'female') {
  //     answer = fixOrder(order, getAnimalMapCaseFemale);
  //   } if (includeNames === true && sex === 'male') {
  //     answer = fixOrder(order, getAnimalMapCaseMale);
  //   } if (includeNames === true && sex === 'female') {
  //     answer = fixOrder(order, getAnimalMapCaseFemale);
  //   }
  // }
  // return answer;
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
