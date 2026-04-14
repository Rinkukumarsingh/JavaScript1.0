// Some frequntly used array methods are:
// Find(), findIndex(), filter(), map(), forEach(), some(), every() etc.

// Give an real world example of array methods in JS --

// Example of find() method -- it is used to find the first element in an array that satisfies a provided testing function or condition, 
// and it returns the value of the first element that satisfies the testing function, 
// or undefined if no elements satisfy the testing function.

const arr = [10, 20, 30, 40, 50];
const foundElement = arr.find(element => element > 25);
console.log(foundElement); // output: 30

// 2.findIndex() method -- it is used to find the index of the first element in an array that satisfies a provided testing function or condition,
// and it returns the index of the first element that satisfies thecondition,
// or -1 if no elements satisfy the testing function.

const arrIndex = arr.findIndex(ele=> ele === 30);
console.log(arrIndex); // output: 2

// 3.filter() method -- it is used to create a new array with all elements that satisfy a provided testing function or condition,
// and it returns a new array with the elements that satisfy the testing function.

const filteredArray = arr.filter(element => element > 25);
console.log(filteredArray); // output: [30, 40, 50]

// 4.map() method -- it is used to create a new array with the results of calling a provided function on every element in the calling array(some operations on each element of the array),
// and it returns a new array with the results of calling the provided function on every element in the calling array.  

const mappedArray = arr.map(element => element * 2);
console.log(mappedArray); // output: [20, 40, 60, 80, 100]


// 5.forEach() method -- it is used to execute a provided function once for each array element, and it does not return a new array.

arr.forEach(element => console.log(element)); // output: 10, 20, 30, 40, 50

// 6.some() method -- it is used to check if at least one element in an array satisfies a provided testing function or condition, 
// and it returns true if at least one element satisfies the testing function, otherwise it returns false.

    const someResult = arr.some(ele=> ele > 40);
    console.log(someResult); // output: true

// 7.every() method -- it is used to check if all elements in an array satisfy a provided testing function or condition, 
// and it returns true if all elements satisfy the testing function, otherwise it returns false.

const everyResult = arr.every(ele=> ele > 5);
console.log(everyResult); // output: true