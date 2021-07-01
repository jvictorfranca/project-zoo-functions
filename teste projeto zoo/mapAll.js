function fixOrder(string, action) {
  const obj = {};
  string.forEach((value) => {
    obj[value] = action(value);
  });
  return obj;
}

// function getAnimalMapCase1(string) { // if (options === undefined)
//   return species.filter((specie) => specie.location === string)
//     .map((specie) => specie.name);
// }

// function getAllResidents(string) {
//   return species.filter((specie) => specie.location === string).map((specie) => {
//     const object = {};
//     object[specie.name] = specie.residents.map((resident) => resident);
//     return object;
//   });
// }


function getAnimalMapCase1(string) { // if (options === undefined)
  return species.filter((specie) => specie.location === string)
    .map((specie) => specie.name);
}


function getAnimalMapCase2(string) {
  return species.filter((specie) => specie.location === string).map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.map((resident) => resident.name);
    return object;
  });
}

function getAnimalMapCase3(string) {
  return species.filter((specie) => specie.location === string).map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.map((resident) => resident.name).sort();
    return object;
  });
}

function getAnimalMapCaseMale(string) {
  return species.filter((specie) => specie.location === string).map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.filter((resident) => resident.sex === 'male').map((resident) => resident.name).sort();
    return object;
  });
}

function getAnimalMapCaseFemale(string) {
  return species.filter((specie) => specie.location === string).map((specie) => {
    const object = {};
    object[specie.name] = specie.residents.filter((resident) => resident.sex === 'female').map((resident) => resident.name).sort();
    return object;
  });
}

function getAnimalMap(options) {
// seu código aqui
let answer;
const order = ['NE', 'NW', 'SE', 'SW'];
if (options === undefined) {
  answer = fixOrder(order, getAnimalMapCase1);
} else {
  const { includeNames = false, sorted = false, sex = 'any' } = options;
  if (includeNames === true) {
    answer = fixOrder(order, getAnimalMapCase2);
  } if (includeNames === true && sorted === true) {
    answer = fixOrder(order, getAnimalMapCase3);
  } if (includeNames === true && sex === 'male') {
    answer = fixOrder(order, getAnimalMapCaseMale);
  } if (includeNames === true && sex === 'female') {
    answer = fixOrder(order, getAnimalMapCaseFemale);
  } if (includeNames === true && sex === 'male') {
    answer = fixOrder(order, getAnimalMapCaseMale);
  } if (includeNames === true && sex === 'female') {
    answer = fixOrder(order, getAnimalMapCaseFemale);
  }
}
return answer;
}



// function getAnimalMap(options) {
//   // seu código aqui
//   let answer;
//   const order = ['NE', 'NW', 'SE', 'SW'];
//   if (options === undefined || options.includeNames === false) {
//     answer = fixOrder(order, getAnimalMapCase1);
//   } else { const { includeNames = false, sorted = false, sex = 'any' } = options; }

//       //   if (includeNames === true) {
//   //     answer = fixOrder(order, getAnimalMapCase2);
//   //   } if (includeNames === true && sorted === true) {
//   //     answer = fixOrder(order, getAnimalMapCase3);
//   //   } if (includeNames === true && sex === 'male') {
//   //     answer = fixOrder(order, getAnimalMapCaseMale);
//   //   } if (includeNames === true && sex === 'female') {
//   //     answer = fixOrder(order, getAnimalMapCaseFemale);
//   //   } if (includeNames === true && sex === 'male') {
//   //     answer = fixOrder(order, getAnimalMapCaseMale);
//   //   } if (includeNames === true && sex === 'female') {
//   //     answer = fixOrder(order, getAnimalMapCaseFemale);
//   //   }
//   // }

//   answer = fixOrder(order, getAllResidents);
//   return answer;
// }