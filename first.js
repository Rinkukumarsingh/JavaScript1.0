//why JS?
// Variable in js -- varibale are like container which can store data and value
var a = 10;
console.log(a);

// keyword to declare variable in js
// var, let, const -- var are not used in modern js because it has global scope and redeclaration is allowed.(before - 2015 ES6)
// let and const are block scope and redeclaration is not allowed.
let b = 20;
console.log(b);
const c = 30;
console.log(c);

// Data types in js
// 1. Primitive data types -- number, string, boolean, null, undefined, symbol, BigInt
// 2. Non-primitive data types -- object, array, function

// keyWord - typeof -- it is used to check the data type of a variable

let d = 'Rinku Singh Rajput';
console.log(typeof d);
console.log(typeof a);

// Object in js -- it is a collection of key-value pairs
const obj = {
    name:'Ram',
    age: 25,
    city: 'Delhi'
}
console.log(typeof obj);

// how to access the value of an object
// two ways -- > obj.key or obj['key']

console.log(obj.name);
console.log(obj['age']);
