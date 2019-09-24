/*
    - DOM stands for Document Object Model, and it is what allows our JavaScript to interact with the HTML and CSS of our webpage
​
    - every element in a document-  whether it be the HTML document as a whole, the head, the tables within the document, the table headers, text within the table cells - are all part of the DOM for that HTML document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript
*/

// 1. TEST
let x = 10;
console.log(x);

// 2. getElementById

// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'red';

console.log(testParagraph);

/*
    - getElementById will grab the first HTML element with the specified value - if we have multiple elements with the same ID, it will only grab the first one.
*/

// 3. querySelectorAll & innerText, innerHTML, and textContent

console.log(document.querySelectorAll('p.sampleClass')); // querySelectorAll returns a NodeList containing all elements that match the specified group of selectors. NodeList objects are collection of nodes, and nodes are simply just various items in the HTML document itself.

// document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!'; // need to use bracket to select an index from the NodeList array, even if there's only one element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    pTag.innerText = 'My text has changed using a forEach method!';
    // pTag.textContent = 'My text has changed using a forEach method!';
    // pTag.innerHTML = '<h3>My text has changed using a forEach method!</h3>';
})

/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT

    - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a 'node'
    - textContent does the same thing as innerText, but will return the FULL text of a 'node'
    - innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we're referencing
*/

// console.log(document.getElementById('spanTest').innerText);
// console.log(document.getElementById('spanTest').textContent);

// 4. eventListeners - click

//document.getElementById('clickThisButton').addEventListener('click', event => {
    //event.target.style.backgroundColor = 'blue';

    //console.log(event);
    //console.log(event.target);
// }) 

//Challenge

// Make the button toggle between red and blue when clicked

document.getElementById('clickThisButton').addEventListener('click', event => {
    if(event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red'
    }
  })

  // 5. eventlisteners - keyup / getElementsByTag Name

  // getElementsByTagName will return all elements with the given tag name.  We then need to use bracket notation
  // to grab wichi element we wan to target

  console.log(document.getElementsByName('p'))

  document.getElementById('nameInput').addEventListener('keyup', event => {
      console.log(event.target.value)

      document.getElementsByTagName('p')[0].innerText = 'Something Changed';

      
      if (event.target.value == '') {
          document.getElementsByTagName('p')[1].innerText = 'nothing has been typed!';
      } else {
          document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${event.target.value}`
      }
  })
