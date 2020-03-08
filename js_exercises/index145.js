// Exercise 145
// Create a new index145.js
// Copy the user object from the previous exercise with the username and password properties and values
// If the user object username is batman and password is Alfred1960KPO! then show the following output:
// Welcome back batman!!
// Else show the following output:
// Sorry, you can't enter the Batcave, try again..
// Use the user properties to create the conditions


const userObject = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};  


// if (userObject.username === 'batman' && userObject.password === 'Alfred1960KPO!'){
//     console.log('Welcome back batman!');
// }
// else{
//     console.log("Sorry, you can't enter the Batcave, try again..")
// }

function myFunction (inputusername, inputpassword){
    if (userObject.username === inputusername && userObject.password === inputpassword){
        console.log('Welcome back batman!');
    }
    else{
        console.log("Sorry, you can't enter the Batcave, try again..")
    }
}

myFunction ('batman','Alfred1960KPO!' )