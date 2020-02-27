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


const validateUser = function (username) {

    var user = {
        name: 'john',
        password: 'john123'
    };
    // var user = {
    //     name: 'robert',
    //     password: 'robert123'
    // };

    let x = user.name;
    let y = user.password;

    var list = [
        x
    ];

    if (username ===list) {
        console.log("hi " + user.name);
    } else {
        console.log('user not found');
    }

}
validateUser('john');