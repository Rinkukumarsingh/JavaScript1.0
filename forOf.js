// for of loop  in js -- it is used to iterate over the iterable objects like array, string, map, set etc. It is introduced in ES6.

// for of loop with array
const arr = [10, 20, 30, 40, 50];
for (let a of arr){
console.log(a);
}

// for of loop with string

const str = 'ECOLAB';
for (let char of str){
  console.log('\n' + char);
}

// for in loop in js -- it is used to iterate over the enumerable properties of an object. It is also introduced in ES6.

const student ={
    name: 'Rinku Singh Rajput', 
    age: 25,
    city: 'Bangalore'
}
for(let key in student){
    console.log(key + ': ' + student[key]);
}