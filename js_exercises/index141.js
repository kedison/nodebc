// Exercise 141
// Create a new index141.js file
// Define a tripExpenses array with the following values:
// The first item is hotel fee, it's a number, type a value that you like
// The second item is trip fee, it's a number, type a value that you like
// The third item is meals fee, it's a number, type a value that you like
// Define a budget variable and assign the sum of all the tripExpenses using reduce
// Show the tripExpenses items as output with the following format:
// hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
// Show the final budget items as output with the following format
// Total trip budget: %budget%

// const tripExpenses = [1,2,1];
// const accumulatorReducer = (accumulatorR,x,y) => accumulatorR + x + y;
// const currentValueReducer = (currentvR) => currentvR;
// const totalReducer = (accumulator, currentValue) => accumulator + currentValue;

// var aR = tripExpenses.reduce(accumulatorReducer);
// var cR = tripExpenses.reduce(currentValueReducer);
// var totalTripBudget = tripExpenses.reduce(totalReducer);

// console.log(aR);
// console.log(cR);

// console.log(totalTripBudget);

const tripExpenses = [1,2,3];

let sum = tripExpenses.reduce((accumulator, currentValue) => accumulator + currentValue,0);


console.log(sum)

not done yet

