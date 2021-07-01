const { species, employees } = require('./data');
const data = require('./data');


function getEmployee (id) {
  return employees.find((employee)=> employee.id === id)
}


// function getIdFirstname (firstName){
//   return employees.find((employee)=> employee.firstName === firstName).id
// }

function getIdFirstname (firstName){
  return employees.find((employee)=> employee.firstName === firstName) === undefined ? undefined 
  : employees.find((employee)=> employee.firstName === firstName).id
}

function getIdLastname (lastName){
  return employees.find((employee)=> employee.lastName === lastName) === undefined ? undefined 
  : employees.find((employee)=> employee.lastName === lastName).id
}

function getEmployeeIdAll (text) {
  let answer;
  if (getEmployee(text)!== undefined){answer = text}
  if (getIdFirstname(text) !== undefined){answer = getIdFirstname(text)}
  if (getIdLastname(text) !== undefined){answer = getIdLastname(text)}
  return answer
}

// console.log(getEmployeeIdAll('Sharonda'));


function case0 () { //no parameters
   return employees.map((employee)=>{
     let name = `${employee.firstName} ${employee.lastName}`
     let obj = {};
     obj[name] = employee.responsibleFor.map((animal)=>animal)
     return obj
   })
}

let noNames = case0()
// console.log(noNames)


function findAnimalById (id) {
  return species.find((specie)=> specie.id === id).name
  
}

// console.log(findAnimalById('0938aa23-f153-4937-9f88-4858b24d6bce'))


// console.log(findObjNames(noNames))
// console.log(Object.values(noNames[0])[0])
// console.log(Object.keys(noNames[0])[0])

function findObjNames (array) {
return array.map((employee)=>{
  let name = Object.keys(employee)[0]
  let obj = {}
  let array = Object.values(employee)[0]
  obj[name] = array.map((animal)=> findAnimalById(animal));
  return obj
})}

let arrayNames = findObjNames(noNames)
console.log(arrayNames)

function idToName (id) {
 let name = employees.find((employee)=> employee.id === id).firstName;
 let lastName = employees.find((employee)=> employee.id === id).lastName;
 return `${name} ${lastName}`
}

function findPersonArraynames (personName, array) {
  return array.find((person)=> Object.keys(person)[0]===personName)
}

console.log(findPersonArraynames('Wilburn Wishart', arrayNames))

function sortArray(array){
  tempArray = JSON.parse(JSON.stringify(array));
  tempArray.sort((emp1, emp2)=> Object.keys(emp1)[0] > Object.keys(emp2)[0] ? 1 : -1 )
  return tempArray

}

let sorted = sortArray(arrayNames);
console.log(sorted)

function arrToObj (array) { 
  let obj = {}
  array.forEach((value)=> {
    let name = Object.keys(value)[0]
    let inarray = Object.values(value)[0]
    obj[name] = inarray
    return obj 
  } )
  return obj
}

let object = arrToObj(sorted)

console.log(object)
