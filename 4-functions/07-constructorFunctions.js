let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy'
    age: 15,
    canVote: false

}

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}

function Person {
    constructor(name, age, canVote) {
        this.name = name;
        this.age = age;
        this.canVote = canVote;
    }
}

let person4 = new Person('James', 80, true);
Console.log(person4);

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}
​
let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}
​
let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}
​
//            (7)   (8)
let person4 = new Person('James', 80, true);
console.log(person4);
​
/*
    1. the function keyword
     2. the function name. For constructor functions, the name should be capitalized
    3. parameters. These will be the values of the object once we call the function
    4. the 'this' keyword gives us the ability to refer back to whatever called or activated it. In this case, 'this' refers to our function 'Person'
    5. this will be the key of the new object we create. This is NOT referring to the parameter
    6. this IS referring to the parameter we pass through our constructor function
    7 & 8 - the 'new' keyword is calling our Person constructor function, and creating a 'new' person with the values we pass in as arguments
*/


