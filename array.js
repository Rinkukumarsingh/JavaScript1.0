// Array in JS
// Array is a collection of an item in a linear format, 
// It is a data structure that can hold multiple values of different data types. 
// It is a built-in object in JavaScript and it is used to store a list of items.

// syntax-- 
// let arrayName = [item1, item2, item3, ...];

// Example of array in JS
const arr = [10, 20, 30, 40, 50];
console.log(arr);

// Important -- array is an object type in JS.

// Looping over an Array in JS
// 1. for loop
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 2. for of loop
for (let a of arr){
    console.log(a);
}

// what array mutuble or immutable in JS -- array is mutable in JS, 
// which means that we can change the elements of an array after it is created. 
// We can add, remove or modify the elements of an array.