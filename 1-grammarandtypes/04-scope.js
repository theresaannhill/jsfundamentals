// scope is how a computer keeps track of all the variables in a program

let x = 12;

function scope() {
    let x = 33;
console.log(x);
}


scope();
console.log(x);

y = 12;

function scope() {
 y = 33;
 console.log(y);
}
scope();
console.log(y);

// var vs let

var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
}
console.log(x);
}

varTest();
console.log(x);

//let example

let x = 12;

function letTest()  {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x)
}
letTest();
console.log(x)

//const example

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();




