// varilables are named containers for storing data values
// we name variables so that we can refer back to them later

     let a = 2;
/* (1) (2) (3) (4)
1 - variable javascript keyword
2 - name of the variable
3 - assignment operator
4 - variable value
*/



/*
   var, let, const:
   - var: 'old' keyword for variables.  Won't use as often
   - let: 'new' keyword for variables. introduced in es6.
   -const: declares an unchangeable variable

*/

// Declarations: left side of the variable
// Initialization: right side of the variable

let x; 
console.log('Declaration:', x); // declaration

x = 10;
console.log('Intialization:, x'); // initialization

x = 33;
console.log('reintialization', x); 

////////////////////////////////////////////////////////////

let today = 'Great!';
const elevenFifty = 'wonderful'
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);

elevenFifty = 'Super!';
console.log(today, elevenFifty);


