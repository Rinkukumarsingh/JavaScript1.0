// loop in js
// 1. for loop -- it is used when we wanted to execute the block of code n number of times and we know the number of iteration in advance.
for(let i = 0; i < 5; i++){
    console.log(i);
}
// 2. while loop -- it is used when we don't know the number of iteration in advance and first it will check the condition and then it will execute the block of code. 
let j = 0;
while(j < 5){
    console.log(j);
    j++;
}
// 3. do-while loop -- it is used when we want to excute the block of code atleast once and then it will check the condition.
let k = 0;
do{
    console.log(k);
    k++;
} while(k < 5);