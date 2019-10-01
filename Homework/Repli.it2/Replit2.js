   var starWarsPeopleList = document.querySelector('ul');

   var starWarsPeopleList = document.querySelector('ul');

async function myFn() {
  }

const myFn = async () => {
  }

async function fn() {
  return 'this should print last'
}

fn().then(console.log)

fetch('https://swapi/.co/api/people/1.json')
        .then(response => response.json)
        .then(json => console.log(json))
        .catch(error => console.log (error))


const request = async () => {
        const response = await fetch ('https://swapi.co/api/people/1.json')
        const response = await response.json();
        console.log(json);
}

request();


  // fetch('https://swapi.co/api.people/1')
  // .then(function(response){
     //  return response.json();
   // })

   // .then(function(json){
      //  let people = json.results;
       // for(p of people){
        //    console.log(p);
       // }
       // for(p in people){
        //    console.log(p);
       // }
   // });
            
            //.then(function(json){
    //    console.log(json)
    //});
   
   //const request = async () => {
  // const response = await fetch ('https://swapi.co/api/people')
   //const response = await response.json();
   //console.log(json);
//}