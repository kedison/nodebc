// Exercise 107
// Create a new index107.js file
// Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
// Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
// The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
// In this case you need to validate which number is bigger than the other to get the right feature and output
// Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
// Make sure that the parameters are numbers, you can use typeof for it
// Show a error message in case any of the parameters are not number
// Call the biggerNumber with the following parameters: 6 and 3
// Call the biggerNumber with the following parameters: 2 and 2

const biggerNumber = function (firstParam, secondParam) {

    if (typeof firstParam == 'number' && typeof secondParam == 'number') {
        if (firstParam > secondParam) {
            console.log(`first number ${firstParam} is greater than the second number ${secondParam}`);
            console.log(typeof (firstParam), typeof (secondParam));
        } else if (secondParam > firstParam) {
            console.log(`second number ${secondParam} is greater than the first number ${firstParam}`);
            console.log(typeof (firstParam), typeof (secondParam));
        } else {
            console.log(`both numbers are the same ${firstParam} = ${secondParam}`);
            console.log(typeof (firstParam), typeof (secondParam));
        }

    } else if (typeof firstParam != 'number' && typeof secondParam != 'number') {
        console.log(`both parameters are not numbers`);
    } else if (typeof firstParam != 'number') {
        console.log(`first param is not a number`);
    } else {
        console.log(`second param is not a number`);
    }
}

biggerNumber(1, true);