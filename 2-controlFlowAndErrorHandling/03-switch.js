/*
- switch statements execute a block of code depending on different cases
- switch statements are often used together with break or default keywords
    - break keyword breaks out of the swithc block altogether
    - Default keyword specifies code to run if ther is no case match

*/

let officeCharacter = 'Pam';

switch (officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break
    case 'Dwight':
        console.log('I am fast.  To give you a reference point, im somewhere between a snake and a mongoose... And a panther');
        break
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break
    default:
        console.log('I'm sorry, ${officeCharacter}, but do I know you?);
}

let dessertMenu = 'Pie';

switch (dessertMenu) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream.');
        break
    default:
        console.log('I'm sorry, ${dessertMenu}, is not on the menu?);
}

// switch statement with multiple conditions

let num = -40;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
        case (num > 0):
            console.log('case 2 ran');
            
}

/*
    - switch statements execute a block of code depending on different cases
    - swtich statements are often used together with break or default keywords
        - break keyword breaks out of the switch block alltogether
        - default keyword specifies code to run if there is no case match
*/
​
let officeCharacter = 'Jim';
​
switch (officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break;
        case 'Dwight':
        console.log('I am fast. To give you a reference point, im somewhere between a snake and a mongoose... And a panther');
        break;
    case 'Jim':
        console.log(`Bears. Beets. Battlestar Galactica`);
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
        // backticks are used for string interpolation
}
​
/*
CHALLENGE
************
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/
​
let dessertMenu = 'carrots';
​
switch(dessertMenu) {
    case 'pie':
        console.log('pie pie, me oh my');
        break;
    case 'cake':
        console.log('cake is great');
        break;
    case 'ice cream':
        console.log('i scream for ice cream');
        break;
    default:
        console.log(`${dessertMenu} is not on the menu`)
}
​
// switch statement with multiple conditions
​
let num = -8;
​
switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work')
} 

// switch
let FB = 10;
​
switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
        case (FB % 3 === 0):
        console.log('Fizz')
        break;
    default:
        console.log(FB);
}