const { species, employees } = require('./data');
const data = require('./data');

let percentage = 50.
const increase = percentage / 100;
let senior = data.prices.Senior
const seniorIncrease = senior * increase;
senior += seniorIncrease;
senior = Math.round((senior + 0.0001) * 100) / 100;



console.log(senior)