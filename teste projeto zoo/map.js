function getAnimalMap(options) {
  // seu código aqui
  let answer;
  if (options === undefined) {
    answer = {
      NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
      NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
      SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
      SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
    };
  } else {
    const { includeNames = false, sorted = false, sex = 'any' } = options;
    if (includeNames === true) {
      answer = {
        NE: species.filter((specie) => specie.location === 'NE').map((specie) => {
          const object = {};
          object[specie.name] = specie.residents.map((resident) => resident.name);
          return object;
        }),
        NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
        SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
        SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
      };
    }
  }
  return answer;
}


