// Function in Java Script

// Function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).

// Function Declaration
function greet(name) {
    console.log('Hello ' + name);
}

// Function Expression -- It is a function that is assigned to a variable. It can be anonymous or named.
const greet1 = function(name) {
    console.log('Hello ' + name);
}

// 1. Arrow Function -- It is a new feature introduced in ES6, it is a shorter syntax for writing function expressions. 
// It does not have its own this, arguments, super, or new.target keywords.
// It is nothing but a compact way of writing a function expression. It is also known as fat arrow function.

const greet2 = (name) => {
    console.log('Hello ' + name);
}

// Invoking a function -- calling a function to execute the code inside the function. 
greet('Rinku Singh Rajput');
greet1('Rinku Singh Rajput');
greet2('Rinku Singh Rajput');

// 2. callback function -- It is a function that is passed as an argument to another function and is executed after some operation has been completed.
function greet3(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function callback() {
    console.log('This is a callback function');
}

greet3('Rinku Singh Rajput', callback);
// output:
// Hello Rinku Singh Rajput
// This is a callback function

// 3. Higher Order Function -- It is a function that takes one or more functions as arguments and/or returns a function as its result.
function higherOrderFunction(callback) {
    console.log('This is a higher order function');
    callback();
}   

//output:
// This is a higher order function
// This is a callback function

