// Array methods in JS
// Array methods are used to perform operations on arrays such as adding, removing, sorting, etc. 
// Some of the commonly used array methods are:

const arr = [10, 20, 30, 40, 50];

// 1.push() method -- it is used to add one or more elements to the end of an array, 
// and it returns the new length of the array.
arr.push(60);
console.log(arr); // lenght of arr is 6

// 2.pop() method -- it is used to remove the last element from an array, and it returns the removed element.
const removedElement = arr.pop();
console.log(removedElement); // output: 60
console.log(arr); // lenght of arr is 5

// 3.unshift() method -- it is used to add one or more elements to the beginning of an array, and it returns the new length of the array.
arr.unshift(5);
console.log(arr); // lenght of arr is 6, output: [5, 10, 20, 30, 40, 50]

// 4.shift() method -- it is used to remove the first element from an array, and it returns the removed element.
const removedFirstElement = arr.shift();
console.log(removedFirstElement); // output: 5
console.log(arr); // lenght of arr is 5, output: [10, 20, 30, 40, 50]

// 5. toString() method -- it is used to convert an array to a string, and it returns a string representation of the array.
console.log(arr.toString()); // output: '10,20,30,40,50'

// 6. slice() method -- it is used to extract a part of an array and return it as a new array and modified the original array, and it includes the start index and excludes the end index.
console.log(arr.slice(1, 4)); // output: [20, 30, 40]

// 7. splice() method -- it is used to add or remove elements from an array, and it returns an new array of the removed elements.
// To remove elements from an array using splice() method, it includes start and end index, and it modifies the original array.

console.log(arr.splice(1, 2)); // output: [20, 30], arr is now [10, 40, 50]
// To add elements to an array using splice() method
arr.splice(1, 0, 20, 30); // it adds 20 and 30 at index 1, and it modifies the original array.
console.log(arr); // output: [10, 20, 30, 40, 50]

// 8. sort() method -- it is used to sort the elements of an array in place and returns the sorted array.
const arr2 = [40, 10, 30, 20, 50]; // lenght will be same as arr, but the elements are in different order.
console.log(arr2.sort()); // output: [10, 20, 30, 40, 50]

// 9. reverse() method -- it is used to reverse the order of the elements in an array, and it returns the reversed array.
console.log(arr.reverse()); // output: [50, 40, 30, 20, 10]

// 10. indexOf() method -- it is used to get the index of the first occurrence of a specified value in an array, 
// and it returns the index of the first occurrence of the specified value, or -1 if it is not found.

const arr3 = [10, 20, 30, 40, 50];
console.log(arr3.indexOf(30)); // output: 2
console.log(arr3.indexOf(60)); // output: -1

// 11. includes() method -- it is used to check if an array contains a specified value, and it returns true or false.
console.log(arr3.includes(30)); // output: true

// 12. join() method -- it is used to join the elements of an array into a string, 
// and it returns a string with the joined elements.

console.log(arr3.join(', ')); // output: '10, 20, 30, 40, 50'

