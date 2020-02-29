// Exercise 115
// Create a new index115.js file
// Define a getLongerText that accepts two string values
// This function returns the longer text
// After calling the function show the longer word as output
// Call this function 3 times with different words


const getLongerText = function (str1, str2){
    if(typeof (str1) == 'string' && typeof (str2) == 'string'){
        if(str1.length > str2.length){
            return "first string is longer, the string is: " + str1;
        }
        else if (str2.length > str1.length) {
            return "second string is longer, the string is: " + str2;
        }
        else {
            return "both strings are the same length, the strings are: " + str1 + " / " + str2;
        }
    }
    else {
        console.log('please inout a valid string text')
    }
}

console.log(getLongerText('one', 'two'));
console.log(getLongerText('longer', 'short'));
console.log(getLongerText('long', 'shorter'));