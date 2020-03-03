// Exercise 109
// Create a new index109.js file
// Define a validateUser function that accepts the following parameters: username and password
// This function returns true or false if username and password match any of the following values:
// username: nacho, password: Nerd1979
// username: pedro, password: Batman0217
// username: marta, password: Mother2312
// Show the following output if username and password belong to a user: Welcome %username%, nice to see you again
// Show the following output if username and password don't belong to a user: Please input valid credentials
// Try calling the validateUser with valid credentials and also with invalid ones



// const validateUser = function (username, password) {
//     var usernameList = [1, 2];
//     var passwordList = [1, 2];

//     var un = usernameList.includes(username, 0);
//     var pw = passwordList.includes(password, 0);

//     if(username == un && password == pw){
//         console.log(`welcome ${username}, your log in is successful`);
//     }
//     else {
//         console.log('invalid credentials');
//     }
// }

// validateUser(0, 0);


// const validateUser = function (username, password) {

//     var user = {
//         name: 'john',
//         password: 'john123'
//     };

//     let x = user.name;
//     let y = user.password;

//     var usernameArray = [x];
//     var passwordArray = [y];

//     if (username == usernameArray && password == passwordArray) {
//         console.log("hi " + user.name);
//     } else {
//         console.log('user not found');
//     }

// }
// validateUser('john', 'john123');
const validateUser = function (username, password) {

const map1 = new Map();
map1.set('bar', 'foo');
map1.set('waa', 'fla');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('waa'));
// expected output: undefined
}


validateUser('john', 'john123');

not done yet
