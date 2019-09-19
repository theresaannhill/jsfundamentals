/* how can we iterate over an array?
- for of loop
- for loop
- forEach() method

*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

// for (let i = 0; i < food.length; i++){
//     console.log(food[i])
// }

// food.forEach(foodItem => {
//     console.log(foodItem);
// })

food.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})

let movie = ['Forest Gump', 'Urban Cowboy', 'ET', 'Matrix', 'Bugs Life'];

movie.forEach((movieItem, index) => {
    console.log(movieItem);
    console.log(index);
})

movie.splice(5, 1, 'Princess Bride');  
console.log('splice:', movie);

movie.splice(5, 5, 'Star Wars');  
console.log('splice:', movie);

