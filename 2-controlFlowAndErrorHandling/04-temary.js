// act as a shortcut for writing if/else or switch statements

let num = 6;

// ternary
(num > 0) ? console.log('yes it is') : console.log('no it isnt');
// (1) (2)               (3)

/*

1. parens act as out if. checks if the statement evaluates as true
2. if the statement is true, run what's after the questin mark
3. colon acts as our 'else' or catch all statement

*/

if (num > 0) {
    console.log('yes it is')
} else {
    console.log('no it isnt')
}

let num = 6;

(num == 0) ? console.log('hello')  : (num < 0)  ? console.log('hi')  : console.log('goodbye');

if (num < 17) {
    console.log('Sorry, you're too young to do anything')
} else {
    console.log('no it isnt')
}

let num = 16;

(num == 0) ? console.log('hello'): (num < 0) ? console.log('hi') : console.log('goodbye');

let age = 22;

(age >= 25) ? console.log('you can rent a car!') : (age >=21) ? console.log('yay you can drink') :
(age >= 18) ? console.log('yay you can vote') : console.log('you are too young to do anything')

// ternary
let FB = 30;
​
(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz')
    : (FB % 5 === 0) ? console.log('Buzz')
    : (FB % 3 === 0 ) ? console.log('Fizz')
    :  console.log(FB)

