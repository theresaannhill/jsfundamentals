/* Morning Challenge (Pair coding)
-Create a function that takes in strings
-In the fumction, translate a pharse into pig latin and print it to the console.

-If able to do so, return the value into another variable and print that variable.

What is Pig Latin?
* If the word begins with a constant, remove the constant to the first vowel place it at the end
of the word, and add an 'ay' to the end (i.e. Pig Latin=> IgPay Atinlay)
* If the word begins with a vowel, simply add an 'ay' at the end of the word.
*/

let sampleString = 'pig latin' // igpay atinlay

function pigLatin(str) {
    // splitting our string by word. Remember that the split methid returns an array.  We are storing that array in a
   // new variable called wordsArray --->  {'pig", 'latin'}
    let wordsArray = str.split(' ');
    console.log(wordsArray);

    wordsArray.forEach((word, index) => {
        //console.log(word);
        // taking the words our forEach method is looping over, and using the split methid to separate it by
        // individual character
        let lettersArray = word.split('');
        //console.log(lettersArray)

        while(lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o'
        && lettersArray[0] !== 'u'); {
        lettersArray.push(lettersArray[0]);
        lettersArray.shift();
    }
    lettersArray.push('ay');
    wordsArray[index]=lettersArray.join('');
    })
    return wordsArray.join(' ')
}

let pigString = pigLatin(sampleString)
console.log(pigString);

pigLatin(sampleString);