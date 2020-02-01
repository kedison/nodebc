// Exercise 33
// Create a new index33.js file
// Define the userCount variable and assign the following value: 100
// Increment the user count by 5
// Show the following output: Users count: %userCount%
// Decrement the user count by 3
// Show the following output: Users count: %userCount%
// We bought a new company so now we double the user count
// Show the following output: Users count: %userCount%
// We know that 50% of the users identify as men and the other 50% identify as women
// Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
// Use as many assignment operators as you can

let userCount = 100;

userCount += 5;
console.log(userCount);

userCount -= 3;
console.log(userCount);

userCount *= 2
console.log(userCount);

const menCount = userCount * (50/100);
const menCountPercentage = (menCount/userCount) * 100;

const womenCount = userCount - menCount;
const womenCountPercentage = (womenCount/userCount) * 100;


console.log('total user count = ' + userCount);
console.log('---------------')
console.log('men count = ' + menCount);
console.log('men count % = ' + menCountPercentage + '%');
console.log('---------------')
console.log('women count = ' + womenCount);
console.log('women count % = ' + womenCountPercentage + '%');
