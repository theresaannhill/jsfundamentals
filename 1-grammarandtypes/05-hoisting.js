let name = 'Theresa';
console.log(name);


b();

function b() {
    console.log('I have been hoisted');
}

// BOOLEAN: has two possible values of either true or false
​
let on = true;
console.log(on);
​
let off = false;
console.log(off);
​
// NULL: null is an empty value. Think of it as an empty container. Nothing is in it, but it can be filled in later

let empty = null;
console.log(empty);
​
// UNDEFINED: no value is assigned and does not act as an empty container
​
let undef = undefined;
console.log(undef);
​
let correct;
console.log(correct);
​
// NUMBERS: numbers are literally just numbers. Also referred to as integers
​
let degrees = 85;
console.log(degrees);
​
let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's
console.log(rounded);
​
let notQuite = 0.2 + 0.1;
console.log(notQuite);
​
let a = Number('123');
console.log(a);
​
// STRINGS: datatype used to represent text. Either wrapped in single or double quotes
​
let stringOne = 'single quotes';
let stringTwo = "double quotes";
console.log(stringOne, stringTwo);
​
// numbers vs strings
let first = 1050 + 100;
console.log(first);
​
let second = '1050' + '100';
console.log(second);

// OBJECTS: objects are used to store many values instead of a singular value
// objects hold key/value pairs
​
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
​
console.log(frodo);
console.log(typeof frodo);
​
// ARRAYS: containers that hold a list of items
​
let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);
​
// addition and concatenation
let third = 1050 + '100';
console.log(third);
console.log(typeof third);
​
/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
​
    Set each variable to its respective type.
​
    console.log your whole address (with a space between variables).
*/

let firstName = 'Zach'
let lastName = 'Maynard'
let houseNumber = 12175
let street = 'Visionary Way'
let city = 'Fishers'
let state = 'IN';
let zipcode = 46038;
​
console.log(firstName + ' ' + lastName + ' ' + houseNumber + " "  + street + " " + city + " "  + state + ' ' + zipcode)
console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);
​
// STRING PROPERTIES
    // properties are qualities associated with a datatype
    // strings and number both have qualities associated with them, and their own properties
​
let myName = 'Zach';
console.log(myName.length); // only time javascript doesnt start counting from 0
// STRING METHODS: methods are tools that help us manipulate our data
    // .Properties use '.', methods use '.Methods()'
    ​
    let myNameIs = 'Zach';
    console.log(myNameIs.toUpperCase());
    ​
    let home = 'my home is greenwood';
    console.log(home.includes('greenwood'));
    ​
    // Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
    ​
    let sent = 'this sentence will be split into individual parts';
    let newSent = sent.split('');
    console.log(newSent);

    - javaScript is interpreted line-by-line (so read top to bottom), but before the code is executed, there is a first pass made by the compiler - which is where hoisting is performed. During the first pass of code, the code is interpreted and then compiled for execution, but execution of the code doesn't actually happen until the second pass.

   - during the first pass of the code, the parser runs through our code and begins to setup what we have written for translation. It recognizes where we have declared variables and where we have declared functions. This first pass of the code essentially is looking at anything on the left side of our assignment operator (let firstName = ______), and is storing those declared variables to memory for assignment during the second pass of our code, and then hoisting any necessary functions.

   - during the second pass of our code, or the execution phase, is actually when the values we have given to our variables are assigned. Since JavaScript allows for the reassignment of variables (except for const), the actual assignment of our variables needs to happen during the second pass through of our code. That way if we declare a variable and initialize it with a value, but later change that value in our code, the secondary value we assign to the variable is what is read and assigned.

   *** First pass: Stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there), but does not assign them their values. Anything that needs to be hoisted is hoisted.

   *** Second pass: Assigns the values to our variables and executes any hoisted source code

   console.log(name);
let name = 'Zach'

b();

function b() {
   console.log("I have been hoisted");
}


Lets take a look at the example in the code snippet above:
What is happening during the first pass, or creation phase of our code? The compiler will look for any variable declarations and store them in memory, but the value will not be assigned. Any functions that need hoisted will also be hoisted. In this case, our variable of name will be stored in memory, but the value of 'Zach' will not be assigned. Our function b will also be hoisted.

So what's happening during the second pass, or execution phase of our code? Lets start with the function and disregard lines 1 & 2 for now. Why can we run this code without receiving any errors? During the first pass through of our code, our function b was hoisted. Although it looks like this code may break since we are invoking the function before we actually define the function, this isn't the case. Since the function b was hoisted during the first pass through of our code, we can actually invoke said function before defining it. You can essentially think of our function b as being defined before (or being above) the invocation since it was hoisted during the first pass through.

Now let's talk about our variable name. We know that our variable was stored to memory during the first pass through of our code and that no value was assigned. During the second pass through, our value of 'Zach' will be assigned to our variable of name. Why would this example throw us an error, though? Well, as I mentioned in my previous message, JavaScript is read and interpreted line-by-line. This means that although our variable of name is stored in memory, we are trying to run a console.log of that variable before we assign it it's value during the second pass through of our code. Take a look at this error message in the screenshot below. We see the error message: "cannot access 'name' before initialization". So our compiler knows that the variable of name is defined (it was stored to memory during the first pass), it just hasn't been initialized (or the value hasn't been assigned). Again, since JavaScript is read line-by-line, we are trying to console.log our variable of name before it's given a value. (edited) 

Loading history...



