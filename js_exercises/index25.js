// Exercise 25
// Create a new index25.js file
// We'll define a super hero character using variables and values
// Use the right data type for each variable
// Variable name: superHeroName, value: Batman
// Variable name: name, value: Bruce Wayne
// Variable name: fly, value: false
// Variable name: hasBatmobile, value: true
// Variable name: life, value: (value between 0 and 100)
// Variable name: freeTime, value: null
// Show each value using console.log() with the variable name (string) as first parameter and the actual variable value as second
// Example: console.log('name', name);
// Also show the variable names and the type of value it has assigned (use typeof)


var superHeroName = 'Batman';
var name = 'Bruce Wayne';
var fly = false;
var hasBatMobile = true;
var life = 60;
var freeTime = null;

console.log('Super Hero Name:', superHeroName, typeof (superHeroName));
console.log('Name:', name, typeof (name));
console.log('Fly:', fly, typeof (fly));
console.log('Has Bat Mobile:', hasBatMobile, typeof (hasBatMobile));
console.log('Life:', life, typeof (life));
console.log('Free Time:', freeTime, typeof (freeTime));

var undefinedVariable = undefined;

console.log(undefinedVariable, typeof (undefinedVariable));