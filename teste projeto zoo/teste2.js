const { species, employees } = require('./data');
const data = require('./data');


// function calculateEntry(entrants) {
//   // seu código aqui
//   let answer;
//   const valueAdult = data.prices.Adult;
//   const valueChild = data.prices.Child;
//   const valueSenior = data.prices.Senior;
//   if (entrants === undefined || Object.keys(entrants).length === 0 ) { answer = 0; } else { answer = entrants.Adult * valueAdult + entrants.Child * valueChild + entrants.Senior * valueSenior; }
//   return answer;
// }

// function calculateEntry({ Adult = 0, Child = 0, Senior = 0 }) {
//   // seu código aqui
//   let answer;
//   const valueAdult = data.prices.Adult;
//   const valueChild = data.prices.Child;
//   const valueSenior = data.prices.Senior;
//      answer = Adult * valueAdult + Child * valueChild
//      + Senior * valueSenior;
  
//   return answer;
// }

// function calculateEntry({ Adult = 0, Child = 0, Senior = 0 }) {
//   // seu código aqui
//   let answer;
//   const {Adult, Child, Senior} = data.prices;

//      answer = Adult * valueAdult + Child * valueChild
//      + Senior * valueSenior;
  
//   return answer;
// }

// const {Adult, Child, Senior} = data.prices;

// console.log(Adult);
// console.log(Child);
// console.log(Senior);


function calculateEntry(entrants) {
  // seu código aqui
  let answer = 0

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
 

console.log(calculateEntry())