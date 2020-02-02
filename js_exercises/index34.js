// Exercise 34
// Create a new index34.js file

// Define the following variables: income, revenue and taxes

// Assign the following values:

// income: 1000
// revenue: 600
// taxes: 500
// This months objectives are:

// Income of at least 800 or more

// Spend less than 400 on taxes

// We pay bonus if our revenue is 600

// Show the following output (console.log()):

// Income Objective: true or false (use greater than or equal operator)
// Taxes Objective: true or false (use less than operator)
// Bonus Objective: true or false (use equality operator)

let actualIncome = 1000;
let actualRevenue = 600;
let actualTaxes = 500;

let targetIncome = 800;
let targetTaxes = 400;
let bonus = 600;

console.log('income met = ', actualIncome >= targetIncome);
console.log('taxes met = ', actualTaxes < targetTaxes);
console.log('bonus met = ', actualRevenue == bonus);
