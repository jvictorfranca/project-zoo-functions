// function getAnimalMapCase1(string){ //if (options === undefined)

//     return {
//       NE: species.filter((specie) => specie.location === string).map((specie) => specie.name),
//       NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
//       SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
//       SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
//     };

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

// eslint-disable-next-line max-lines-per-function
function getAnimalMap(options) {
  // seu código aqui
  let answer;
  if (options === undefined) {
    answer = {
      NE: getAnimalMapCase1('NE'),
      NW: getAnimalMapCase1('NW'),
      SE: getAnimalMapCase1('SE'),
      SW: getAnimalMapCase1('SW'),
    };
  } else {
    const { includeNames = false, sorted = false, sex = 'any' } = options;
    if (includeNames === true) {
      answer = {
        NE: getAnimalMapCase2('NE'),
        NW: getAnimalMapCase2('NW'),
        SE: getAnimalMapCase2('SE'),
        SW: getAnimalMapCase2('SW'),
      };
    }
  }
  return answer;
}

// // eslint-disable-next-line max-lines-per-function
// function getAnimalMap(options) {
//   // seu código aqui
//   let answer;
//   if (options === undefined) {
//     answer = {
//       NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
//       NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
//       SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
//       SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
//     };
//   } else {
//     const { includeNames = false, sorted = false, sex = 'any' } = options;
//     if (includeNames === true) {
//       answer = {
//         NE: species.filter((specie) => specie.location === 'NE').map((specie) => {
//           const object = {};
//           object[specie.name] = specie.residents.map((resident) => resident.name);
//           return object;
//         }),
//         NW: species.filter((specie) => specie.location === 'NW').map((specie) => {
//           const object = {};
//           object[specie.name] = specie.residents.map((resident) => resident.name);
//           return object;
//         }),
//         SE: species.filter((specie) => specie.location === 'SE').map((specie) => {
//           const object = {};
//           object[specie.name] = specie.residents.map((resident) => resident.name);
//           return object;
//         }),
//         SW: species.filter((specie) => specie.location === 'SW').map((specie) => {
//           const object = {};
//           object[specie.name] = specie.residents.map((resident) => resident.name);
//           return object;
//         }),
//       };
//     }
//   }
//   return answer;
// }




function getAnimalMap(options) {
  // seu código aqui
  let answer;
  if (options === undefined) {
    answer = {
      NE: getAnimalMapCase1('NE'),
      NW: getAnimalMapCase1('NW'),
      SE: getAnimalMapCase1('SE'),
      SW: getAnimalMapCase1('SW'),
    };
  } else {
    const { includeNames = false, sorted = false, sex = 'any' } = options;
    if (includeNames === true) {
      answer = {
        NE: getAnimalMapCase2('NE'),
        NW: getAnimalMapCase2('NW'),
        SE: getAnimalMapCase2('SE'),
        SW: getAnimalMapCase2('SW'),
      };
    }
  }
  return answer;
}