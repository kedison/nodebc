// Exercise 113
// Create a new index113.js file
// Define the function getShapePerimeter that accepts 2 parameters: base and height
// If base and height are equal then calculate the perimeter of a square
// If base and height are not equal then calculate the perimeter of a rectangle
// This function returns a number that represents the shape perimeter
// Show the following output: %perimeter% is the shape perimeter
// If the perimeter is bigger than 100 then show the following output: The perimeter is too big
// Else show the following message: The perimeter is fine
// Call this function a couple of times with different values
// Test all possible cases


const getShapePerimeter = function (base, height) {

    if (typeof (base) == 'number' && typeof (height) == 'number') {
        if (base == height) {
            const perimeter = base * height;
            if (perimeter > 100) {
                console.log(`the perimeter is too big, please try again`);
            } else {
                console.log(`ther perimeter is fine`);
                console.log(`the perimeter of the sqaure is ${perimeter}`);
            }

        } else {
            const perimeter = base * 2 + (height * 2);
            if (perimeter > 100) {
                console.log(`the perimeter is too big, please try again`);
            } else {
                console.log(`ther perimeter is fine`);
                console.log(`the perimeter of the rectangle is ${perimeter}`)
            }
        }
    } else {
        console.log(`please input valid numbers for base and height`)
    }
}
getShapePerimeter(10, 10);