/*

 - Introduced in ES 8, async functions can be thought of as an alternate way of
 writing promise based code - Which allows us to avoid chaining promises

 - async.await allows us to program using an asynchoronous request, like a fetch,
 in a synchronous manner
 
*/

// syntax: - async functions unlock the use of the await keyword inside of an async function.
// async function.  Using await in any other case results in a syntax error.

async function myFn() {
    // await ....
    }

    const myFn = async () => {
        await // this would result in a syntax error since the function is not declared as an async function.
    }

        // async functions are normal javascript functions but they always retrun a promise by dfault.

        async function fn() {
            return 'hello'
        }

        fn().then(console.log)

        function fn() {
            return Promise.resolve('hello');
        }

        fn().then(console.log)

        // catching errors

        async function foo () {
            throw Error('this is a mistake');
        }
       //foo().then(console.log);
        foo().catch(console.log);

        // await

        // async functions pause at each expression

        fetch('https://random.dog.dog/woof.json')
        .then(response => response.json)
        .then(json => console.log(json))
        .catch(error => console.log (error))


const request = async () => {
        const response = await fetch ('https://random.dog/woof.json')
        const response = await response.json();
        console.log(json);
}

request();
