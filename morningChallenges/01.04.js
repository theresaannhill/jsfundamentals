function fizzbuzz() {
for (let x = 0; x <= 100; x++) {
    if (x % 15 === 0) {
        console.log('Fizzbuzz');
    } else if (x % 5 === 0) {
        console.log('Fizz');
    } else if (x % 3 === 0) {
        console.log('Buzz')
    } else {
        console.log(x);
    }
}
}
fizzbuzz();

