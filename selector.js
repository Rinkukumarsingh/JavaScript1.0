// Selectors in Java Script

// Selectors are used to select the elements from the HTML document. 
// It is used to manipulate the elements in the HTML document. 
// It is used to change the content, style, and attributes of the elements in the HTML document.

// Types of Selectors in Java Script
// 1. getElementById() -- It is used to select the element by its id attribute. It returns a single element.
const element = document.getElementById('myId');
console.log(element);

// 2. getElementsByClassName() -- It is used to select the elements by their class attribute. It returns a collection of elements.
const elements = document.getElementsByClassName('myClass');
console.log(elements);

// 3. getElementsByTagName() -- It is used to select the elements by their tag name/Element. It returns a collection of elements.
const tags = document.getElementsByTagName('p');
console.log(tags);

// ##Best Approach
// The querySelector() and querySelectorAll() methods are the most flexible and powerful selectors in JavaScript. They allow you to select elements using CSS-style selectors.
const element2 = document.querySelector('#myId');
// It Always returns the first element that matches the specified selector, even if there are multiple elements that match the selector.
console.log(element2);

const elements2 = document.querySelectorAll('.myClass');
// It returns a static NodeList of all elements that match the specified selector. If no matches are found, it returns an empty NodeList.
console.log(elements2); 