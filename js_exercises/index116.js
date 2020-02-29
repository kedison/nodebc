// Exercise 116
// Create a new index116.js file
// Define the getHexaColor function that accepts one of the following web colors as parameter:
// white
// black
// blue
// green
// yellow
// pink
// This function returns the hexa color for the given parameter color:
// param: white, return value: #FFFFFF
// param: black, return value: #000000
// param: blue, return value: #0b24fb
// param: green, return value: #0e7e12
// param: yellow, return value: #fffd38
// param: pink, return value: #fec1cc
// The returned value must be a string
// Call the function using each posible value as parameter
// Show each hexa color as output

const getHexaColor = function (colorText) {
    let map = new Map();

    map.set('white', '#FFFFFF');
    map.set('black', '#000000');
    map.set('blue', '#0b24fb');
    map.set('green', '#0e7e12');
    map.set('yellow', '#fffd38');
    map.set('pink', '#fec1cc');

    if(typeof(colorText) == 'string'){
        if(map.has(colorText)){
            return map.get(colorText);
        }
        else {
            return 'sorry theres no such color in our database, try another color';
        }

    } else{
         return 'please input a valid color string';
    }
}

console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('pink'));

console.log(getHexaColor('red'));