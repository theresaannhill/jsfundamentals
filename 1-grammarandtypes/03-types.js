// BOOLEAN: has two possible values of either true or false

let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL: null is an empty value.  Think of it as an empty container. NOthing is in it, but it can be filled in later

let empty = null;
console.log(empty);

//  UNDEFINED: No value assigned and does not act as an empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// NUMBERS: numbers are literally just numbers.  Also referred to as integers

let degrees = 85;
console.log(degrees);

let precise = 9999999999999999;
console.log(precise);

let rounded = 999999999999999999; // 16 9's
console.log(rounded);

let NotQuite = 0.2 = 0.1;
console.log(NotQuite);

let a = Number('123');
console.log(a);

//STRINGS:  datatype used to represent text.  Either wrapped in single or double quotes

let stringOne = 'single quotes';
let stringTwo = 'double quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

// OBJECTS:  Objects are used to store many values instead of a singular value
// Objects hold key/value pairs

let frodo = {
    race: 'hobbit'
    rings: 1,
    cloak: true
 }
 console.log(frodo);
 console.log(typeof frodo);

 //ARRAYS:  containers that hold a list of items

 let burritos = ['large', 4, true];
 console.log(burritos);
 console.log(typeof burritos);

 // addition and concatenation
    let third = 1050 + '100';
    console.log(third);
    console.log(typeof third);

    // STRING PROPERTIES
    // properties are qualities associated with a datatype
    // strings and numbers both have qualities associated with them, and their own properties

let myName = 'Theresa';
console.log(myName.length); // only time javascript doesn't start counting from 0

// STRING METHODS: methods are tools that help us manipulate our data
 // .Properties use '.', methods use '.Methods()'

let myName = 'Theresa';
console.log(myName.toUpperCase));

var str = 'This sentence will be split into individual parts.';

var words = str.split(' ');
console.log(words[3]);
// expected output: "be"

var chars = str.split('');
console.log(chars[8]);
// expected output: "e"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["This sentence will be split into individual parts."]




