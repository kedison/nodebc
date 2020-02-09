// Exercise 58
// Create a new index58.js file
// Define a hour variable
// Assign the hour variable a value between 1 and 24
// If hour is bettwen 5 to 12 show the following message: Good morning
// If hour is bettwen 12 to 18 show the following message: Good afternoon
// If hour is bettwen 18 to 22 show the following message: Good evening
// If hour is bettwen 22 to 5 show the following message: Good night
// Change the hour value to test each case

let hour = 0;

if (hour >= 5 && hour <=12) {
    console.log('Good morning');
}
else if (hour >=13 && hour <= 18) {
    console.log('Good afternoon');
}
else if (hour >=19 && hour <= 22){
    console.log('Good evening');
}
else if (hour >=1 && hour <= 4 || hour >=23 && hour <=24) {
    console.log('Good night');
}
else {
    console.log('invalid input, please check inputted hour')
}