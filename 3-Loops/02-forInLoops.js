for ( let j = 0;  j <  5; j++ ) {
    console.log(j + " ")
  }

  for ( let j = 10;  j >  5; j-- ) {
    console.log(j);
  }

  for ( let j = 5; j < 16; j++ ) {
    console.log(j);
  }

  for ( let j = 0; j <= 10; j += 2) {
    console.log(j);
  }

  let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));

  blah = function () {
    return lala;
    lala = "hi";
  };
  console.log(blah());

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());

  function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());

 let apples = x => console.log(`There are ${x} apples.`);
apples(10);

for ( let j = 10;  j >  5; j-- ) {
  console.log(j);
}

for ( let j = 0; j <= 10; j = 2) {
  console.log(j);
}

// great for iterating over values in an object. Properties in an object are whats called 'enumerable'
    // for in loops iterate over an objects enumerable properties
    ​
    let student = {
        name: 'Peter',
        awesome: true,
        degree: 'JavaScript',
        week: 1
    };
    ​
    // console.log(student.name)

    for (let item in student) {
      // console.log(item);
      console.log(student[item]);
  }
  ​
  let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
  ​
  for (cat in catArray) {
      // console.log(cat);
      console.log(catArray[cat]);
  }
  ​
  /*
  CHALLENGE
  ************
  ​
      - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
  */

 let name = 'doNoVaN';
 let capName;

 for (let index in name){
     // console.log(n);
     if (index == 0) {
         capName = name[index].toUpperCase();
     } else {
         capName += name[index].toLowerCase();
     }
 }

 console.log(capName);