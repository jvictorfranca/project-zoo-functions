const { species, employees } = require('./data');
const data = require('./data');



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

let options = { includeNames : false, sorted : true, sex:'female'}
const { sorted = false, sex='any' , includeNames = false} = options;

  let answer = [];
  let array = species;
  if (options === undefined || options.includeNames !== true) {
    answer = fixOrder(order, case0, array);
  } else {
  
    array = ifSex(sex, array);
  
    ifSort(sorted, array);
    answer = fixOrder(order, case1, array);
  }

console.log(answer['NE'])
