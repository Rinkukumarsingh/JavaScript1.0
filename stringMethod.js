// String Methods in JS
// String methods are used to perform operations on strings
// such as searching, extracting, replacing, etc. Some of the commonly used string methods are:

const str = 'Hello World';
// 1.length property -- it is used to get the length of the string
console.log(str.length);

// 2.toUpperCase() method -- it is used to convert the string to uppercase
console.log(str.toUpperCase());  

// 3.toLowerCase() method -- it is used to convert the string to lowercase
console.log(str.toLowerCase()); 

// 4.indexOf() method -- it is used to get the index of the first occurrence of a specified value in a string.
console.log(str.indexOf('o'));  

// 5.lastIndexOf() method -- it is used to get the index of the last occurrence of a specified value in a string.
console.log(str.lastIndexOf('o'));  

// 6.slice() method -- it is used to extract a part of a string and return it as a new string, and It includes the start index and excludes the end index.
console.log(str.slice(0, 5));

// 7.substring() method -- it is used to extract a part of a string and return it as a new string, and It includes the start index and excludes the end index.
console.log(str.substring(0, 5));

// 8.trim() method -- it is used to remove whitespace from both ends of a string.
const str2 = '   Hello World   ';
console.log(str2.trim());

// 9.replace() method -- it is used to replace a specified value with another value in a string, and it returns a new string with the replaced value.
const str3 = 'Hello World';
console.log(str3.replace('World', 'JavaScript'));

// 10. charAt() method -- it is used to get the character at a specified index in a string.
console.log(str.charAt(0));

// 11. split() method -- it is used to split a string into an array of substrings, and it returns an array of substrings.
const str4 = 'Hello World';
console.log(str4.split(' ')); // output: ['Hello', 'World']

// 12. includes() method -- it is used to check if a string contains a specified value, and it returns true or false.
console.log(str.includes('Hello')); 

// 13. startsWith() method -- it is used to check if a string starts with a specified value, and it returns true or false.
console.log(str.startsWith('Hello'));   

// 14. endsWith() method -- it is used to check if a string ends with a specified value, and it returns true or false.
console.log(str.endsWith('World'));
