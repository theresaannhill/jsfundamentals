let FB = 30;

switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log ('Fizz Buzz');
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