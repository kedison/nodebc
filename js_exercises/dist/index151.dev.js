"use strict";

// Exercise 151
// Create a new index151.js
// Define a groot object
// Add 2 methods, greet and speak
// Both methods will return the following phrase:
// I'm Groot!!
// Using console.log call both methods (one time each) and show the following output:
// Greet: I'm Groot!!
// Seack: I'm Groot!!
var groot = {
  greet: function greet() {
    return "Greet: I'm Groot!!";
  },
  speak: function speak() {
    return "Speak: I'm Groot!!";
  }
};
console.log(groot.greet());
console.log(groot.speak());