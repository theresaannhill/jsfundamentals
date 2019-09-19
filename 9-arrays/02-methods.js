let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (foodITem of food) {
    console.log(foodITem);
}
food.push('Pizza');  // appends pizza to the end of the array
console.log('push:', food);

food.splice(1, 1, 'Bananas'); // removes shrimp and adds bananas 
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potatoe Pie');
console.log('splice 2:', food);

food.pop();  // pop removes the last item of an array
console.log('pop:', food);

food.shift(); // removes the first element in an array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak');  // unshift adds one or more elements to the beginning of an array
console.log('unshift:', food);






