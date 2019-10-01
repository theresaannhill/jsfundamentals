fetch('https://rickandmortyapi.com/api/character')

.then(response => response.json())
.then(json => displayResults(json));

function displayResults(json){
console.log(json);
let image1 = json.results[0].image;
let image2 = json.results[1].image;

document.getElementById('imageOne').src = image1
document.getElementById('imageTwo').src = image2

}