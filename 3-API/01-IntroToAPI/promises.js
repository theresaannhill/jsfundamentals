// Boolean declaration
var amIGood = false;

// Promise
var iCanHasGift = new Promise (
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelBro',
                item: 'Turbo-Man action Figure'
            };
            resolve(gift); // fulfilled
        } else {
            var naughty = "You've made santa's naughty list; enjoy your coal!";
            reject(naughty); //reject
        }
    }
);

// Promise Call
var checkTwice = function () {
    iCanHasGift
    .then(function (fulfilled) {
        // nice list = gift
        console.log(fulfilled);
        // output: { brand: 'HasMattelBro', item: 'Turbo-Man action Figure'}
    })
    .catch(function (error) {
        // naughty list = coal
        console.log(error);
        // output:  You've made santa's naughty list enjoy your coal.
    });
};

checkTwice;