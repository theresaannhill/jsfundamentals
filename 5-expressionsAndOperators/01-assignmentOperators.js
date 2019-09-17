/* 
 - falsy values: a falsty is a vlue that is considered false when encountered in boolean context
    - there are 6 falsy values in javascript
        1. false
        2. 0
        3. "", '', ``
        4. null
        5. undefined
        6. NaN ( not a number)

*/

let isOn = true;

if (isOn == true) {
    console.log('the light is on!')
} 

if (isOn) { 
    console.log('the light is on')
}

let isOn = false;

if (isOn == false){
    console.log ('the light is off')
}

if(weather < 65) {
    console.log('wear a jacket');

}
