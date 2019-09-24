function callbackfunction() {
    for(let i = 0; i < 100; i++){
        console.log(i)
    }



    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    }
    return data;

}

function showGreeting(dataFromFunction){
    return "hello" + dataFromFunction.name + ", I hear you're the greatest?!"
}
console.log(
    showGreeting(callbackfunction())
)