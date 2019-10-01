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

var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I noticed you received posable plastic Batman figurine during the Y ultide season.  What do you think of my new "
            + gift.brand + ' ' + gift.item + '?';

            resolve(message);
            }
    );
    };

    var checkTwice = function () {
        console.log('before Christmas'); // log before
        iCanHasGift
        .then(playDate)
        .then(function(fulfilled){
            console.log(fulfilled);

        })
    .catch(function(error){
        console.log(error)
    });
    console.log('after opening gifts'); // log after
    }

    checkTwice()