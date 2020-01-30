// Exercise 21
// Create a new index21.js file
// Define age variable and assign your age as value (number)
// Define phone variable and assign your phone number or similar (number)
// Define streetName variable and assign your street name (string)
// Define streetNumber variable and assign your house street number (number)
// Use console log to show the following messages:
// First message: I'm %age% years old
// Second message: My phone number is: %phone%
// Third message: I live on %streetNumber% %streetName%
// Use template variables for each text


var age = 20;
var phone = 123 + "-" + 4567 + "-" + 8900;
var streetName = "Street Name";
var streetNumber = 1234;

var firstMessage = "I'm " + age + " years old";
var secondMessage = "My phone number is: " + phone;
var thirdMessage = "I live on " + streetNumber + " " + streetName;

console.log(firstMessage);
console.log(secondMessage);
console.log(thirdMessage);

