//String in JS
// String is a primitive data type in javascript, It is used to store text data,
// It is a sequence of character enclosed in single quotes, double quotes or backticks. It is immutable, which means that once a string is created, it cannot be changed.

// String can be created using single quotes, double quotes or backticks
const str1 = 'Hello World';
const str2 = "Hello World";
const str3 = `Hello World`;

//Template  literals in js -- It is a new feature introduced in ES6, it is used to create string using backticks.
//  It allows us to embed expressions inside a string using ${} syntax.

const name = `Rinku Singh Rajput`;
const age = 25;
const city = 'Bangalore';

const Info = `My name is ${name},I am ${age} years old and I live in ${city}`;
console.log(Info);