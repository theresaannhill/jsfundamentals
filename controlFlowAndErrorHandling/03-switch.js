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