// Exercise 149
// Create a new index149.js
// Define a user variable and assign a literal object as value
// This user will have your personal data
// Add at least 10 properties and values to describe you
// Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
// Define at least 5 properties when we initialize the user object:
// const myObject = {
//   property: value,
//   property: value,
// }
// Define the rest of the user properties using the dynamic way
// const myObject = {
//   property: value,
//   property: value,
// }

// myObject.newProperty = value;
// myObject.newProperty = value;
// myObject.newProperty = value;
// Show the user object as output

const userProfile = {
    string: 'string',
    number: 10,
    boolean: true,
    array: [1,2,3],
    object: {t1:'a', t2:'b', t3:'c'}
};

console.log(userProfile);

userProfile.string1 = 'string1';
userProfile.number1 = 11;
userProfile.boolean1 = false;
userProfile.array1 = [3,2,1];
userProfile.object1 = {q1:'a', q2:'b', tq3:'c'};

console.log(userProfile);
