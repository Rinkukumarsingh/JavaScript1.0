// Operators in js
// 1. Arithmetic Operators -- +, -, *, /, %, **
// 2. Assignment Operators -- =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators -- ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators -- &&, ||, !
// 5. Unary Operators -- ++, --, -, +

// Arithmetic Operators
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5

// Assignment Operators
let z = 50;
z+= 10 // z = z + 10;
console.log(z); // 60

// Comparison Operators

let a = 12;
let b = 8;
console.log(a > b); // true
console.log(a < b); // false
console.log(a == b); // false
console.log(a != b); // true

// logical Operators
let p = true;
let q = false;
console.log(p && q); // false

// Unary Operators
let count = 0;
count++;
console.log(count); // 1
count--;
console.log(count); // 0

// ternary operator -- it is a shorthand for if-else statement
// for this total three operands are required -- condition ? expression1 : expression2
let age = 18;
isAdult = age>=18 ? 'yes' : 'no';
console.log(isAdult); // yes