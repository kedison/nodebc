// Exercise 110
// Create a new index110.js file
// Define the average function that accepts 5 numbers as parameter
// Call the average function with the following values: 2, 4, 10, 20, 30
// After executing the call show the following message: The average is %average%



let averageFunc = function (firstNum, secondNum, thirdNum, fourthNum, fifthNum){
    var average = (firstNum + secondNum + thirdNum + fourthNum + fifthNum)/ 5;

   
    var count = averageFunc();
    var averageList = [];
    averageList.push(count);
    
    console.log(`the average is ${average}, and the inputted numbers are ${averageList}`);
}

averageFunc(2,2,2,2,2);