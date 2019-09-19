

function hi()  
{
    console.log('HI');
    return'hi'; 
    // return 'hi';
}

hi; // nothing
hi();
console.log(hi); // [function: hi]
console.log(hi()); 

/* 
- the parentheses after a function IMMEDIATELY invoke the function that's being called
- we get undefined because we are not returning any infomration or data from our function
*/

function hi()  
{
    console.log('HI');
    return'hi'; 
    // return 'hi';
}

hi; // nothing
hi();
console.log(hi); // [function: hi]
console.log(hi()); 

function list() {
    for (num = 0; num < 11; num++) {
        console.log(num);
    }
}

let arr = ['This', 'is', 'really', 'cool'];
function list() {
    for (arr = 0; arr < 5;) {
        console.log(arr);
    }
}

function values() {
    for (let string of arr) {
        console.log(string);
    }
}

values();

function hi() {
    console.log('HI');
    // return 'hi';
}
​
hi;// nothing
hi(); // HI
console.log(hi); // [function: hi]
console.log(hi());
​
/*
    - the parentheses after a function IMMEDIATELY invoke the function that's being called
    - we get undefined because we are not returning any information or data from our function
*/
​
/*
CHALLENGE
************
​
    - Create a function that, when invoked, lists out the numbers 1-10
*/
​
list(); // can invoke the function list() before the function is written, because function declarations are hoisted
​
function list() {
    for (num = 0; num < 11; num++){
        console.log(num);
    }
}

/*
CHALLENGE
************
​
    - Given the array, create a function that lists out the values individually.
*/
​
let arr = ['This', 'is', 'really', 'cool'];
​
function values() {
    for (let string of arr) {
        console.log(string);
    }
}
​
values();