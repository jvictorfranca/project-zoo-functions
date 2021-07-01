const { species, employees } = require('./data');
const data = require('./data');

// { includeNames = false, sorted = false, sex = 'any' }
let options = { includeNames : false, sorted : false, sex : 'any' }
const { includeNames = false, sorted = false, sex = 'any' } = options;

//== undefined:
function case0 (location, array) { // Funcional
  return array.filter((specie)=>specie.location === location).map((specie)=>specie.name)
}


//=/= undefined: All names
function case1 (location, array) { // Funcional
  return array.filter((specie)=>specie.location === location).map((specie)=>{
    let obj = {};
    obj[specie.name]=specie.residents.map((resident)=> resident.name)
    return obj
  })
}
let order =['NE', 'NW', 'SE', 'SW']

function fixOrder(string, action, array) {
  const obj = {};
  string.forEach((value) => {
    obj[value] = action(value, array);
  });
  return obj;
}

let allSpecies = fixOrder(order, case0, species)
// console.log(allSpecies)



// ==/ undefined:
// sex = female.

// function filterSex(sex, array) { // Nao funcional
//   return array.map((specie)=>{
//     let obj = {};
//     obj[specie.name]= specie.residents.filter((resident)=>resident.sex === sex)
//   return obj})
// }

function filterSex(sex, array) {
  return array.map((specie)=>{
    let obj = {};
    obj['name']= specie.name;
    obj['popularity']=specie.popularity;
    obj['location'] = specie.location;
    obj['residents'] = specie.residents.filter((resident)=> resident.sex === sex)
  return obj})
}

function sortResidents(array){
  return array.map((specie)=>{
    let obj = {};
    obj['name']= specie.name;
    obj['popularity']=specie.popularity;
    obj['location'] = specie.location;
    obj['residents'] = specie.residents.sort((resident1, resident2)=> resident1.name>resident2.name ? 1 : -1)
  return obj})
}



// let female = filterSex('female', species)
// let sortedFemales = sortResidents(female)

let array = species;
options = options = { includeNames : false, sorted : true, sex : 'male' }
let answer = [];
if (options === undefined || options.includeNames === false){
  answer = fixOrder(order, case0, array)
} else{
  if (options.sex === 'female' || options.sex === 'male'){array = filterSex(options.sex, array)}
  if (options.sorted === true) { array = sortResidents(array); }
  answer = fixOrder(order, case1, array)
}

console.log (answer['NE'])











//Ver final:

function getAnimalMap(options) {
  let answer = [];
  let array = species;
  if (options === undefined || options.includeNames === false) {
    answer = fixOrder(order, case0, array);
  } else {
    if (options.sex === 'female' || options.sex === 'male') {
      array = filterSex(options.sex, array);
    } if (options.sorted === true) { array = sortResidents(array); }
    answer = fixOrder(order, case1, array);
  }
  return answer;
}