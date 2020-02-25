// Exercise 108
// Create a new index108.js file
// Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
// The function must sort the params values from lower to higher
// Call the function with the following parameters: 10, 8, 25
// Show the following result as output: 8, 10, 25
// Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
// If highToLow is true then you need to show the following output: 25, 10, 8
// Call the function again with the following parameters: 10, 8, 25, true

// long method
// let sortFunction = function (firstParam, secondParam, thirdParam){
//         let small = 0;
//         let medium = 0;
//         let large = 0;

    
//         if(firstParam > secondParam && firstParam > thirdParam){
//             large = firstParam;
//         } else if(firstParam > secondParam && firstParam < thirdParam){
//             medium = firstParam;
//         } else if (firstParam < secondParam && firstParam < thirdParam){
//             small = firstParam;
//         }
    
//         console.log(small, medium, large);
// }

// sortFunction(15,5,10);



// If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:

// If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
// So, the compare function has the following form:

// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
// To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

// function compareNumbers(a, b) {
//   return a - b;
// }
// The sort method can be conveniently used with function expressions:

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

// // [1, 2, 3, 4, 5]


// array.sort method with compare function

// var arrayList =[];
// let sortFunction = function (firstParam, secondParam, thirdParam) {
//     arrayList.push(firstParam, secondParam, thirdParam)
//     let compareNumbers = function (a,b){
//         return a-b;
//     }
//     console.log(arrayList.sort(compareNumbers));
// }

// sortFunction(10,8,25);

// added boolen fourth param

var arrayList =[];
let highToLow = true;

let sortFunction = function (firstParam, secondParam, thirdParam, fourthParam) {
    if(fourthParam == true){
    arrayList.push(firstParam, secondParam, thirdParam)
    let compareNumbers = function (a,b){
        return a-b;
    }
    console.log(arrayList.sort(compareNumbers));
    }
    else {
        console.log(`fourth param is false`);
    }
}


sortFunction(10,8,25, false);


