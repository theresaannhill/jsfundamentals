/* 
What is API?

- API stands for Application Program Interface

- in basic terms, API's allow applications to communicat with one another
- the API is not the database or the server, it is the code that allows us access Point(s) to
ther server
-those access points come i the forma of an endpoint, which directs us to different sets of
data we can access

Astnchronous Programming

-Asynchronous Programmin allows out code to continue to run while we're waiting on a response
from and API or outside data source. Once we've completed fetching or retreiving our data, it
then presents us with that data, without having to wait on any other processes or code.


*/

const baseURL = 'https://api.spacexdata.com/v2/rockets'; // this is my base thats reaching out to
// the space x rockets

const searchForm = document.querySelector('form'); // referencing form from html document
const spaceShip = document.querySelector('ul'); // referencing ul from html documnent

searchForm.addEventListener('submit', fetchSpace); // grabbing searchform variable, adding event listener,
// event is a submit event, and the submit calls fetchSpace function

function fetchSpace(event) {



event.preventDefault();


    fetch(baseURL) // fetch starts the process of fetching a resource from a network,
    // and that fetch returns a promise.  That promise is fulfilled or "resolved" once the reponse from
    // the fetch is available.
    .then(data => {
       // console.log(data)
        return data.json();
    }) 
    .then(json => {
       // console.log('promise results:' json);

       // a callback function is a function that is to be executed after function has
       //finished executing.  In this case, our callback function is "displayRockets", and it is waiting on 
       //our 'fetchSpace' function and all of it's promises to resolve being called
       // and passed data
       displayRockets(json)
    })
    
}

function displayRockets(json) {
    console.log('data:', json)

    let rockets = json.forEach(rocket => {
        let r = document.createElement('li');
        let desc = document.createElement('li');
        r.innerText = rocket.name;
        desc.innerText = rocket.description;
        spaceShip.appendChild(r);
        spaceShip.appendChild(desc);

    })


}


