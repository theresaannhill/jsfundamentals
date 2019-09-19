let hi = () => {
    return 'hi';
   // (1) 
} 
 let greeting = hi();
// (2)
 console.log(greeting);

 /*
1. keyword that brings data from inside of the local scope of the function outside of the function
2. declare a new variable to hold the value of the return
3. when called or 'invoked', the function return becomes the value of our variable 'greeting'
 */

 function capitalizeName(name) {
     let capName = '';

     for (let l in name) {

         if (l == 0) {
             capName += name[1].toUpperCase();
             } else {
                 capName += name[1].toLowerCase();
             }
     }
     //console.log(capName);
     return capName;
 }

 const myName = capitalizeName('zAcHAry');
 const jessicaName = capitalizeName ('JeSSIca');
 console.log(myName + '' + 'how are you doing today?');
 console.log(`${jessicaName}, how are you doing today`);

 const getTip = (bill) => {
    if (bill > 0 && bill < 50) {
      return bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
      return bill * 0.15;
    } else {
      return bill * 0.1;
    }
  };
  
  function simpleTipCalculator(bill) {
    console.log(getTip(bill));
  }
  
  simpleTipCalculator(27)
  simpleTipCalculator(83)
  simpleTipCalculator(500)

  function tipCaluculator(bill) {
      let tip = bill * 0.2;
      return tip.toFixed(2) 
      }
      let totalTip = tipCaluculator (19.88);
      console.log(totalTip);

      let hi = () => {
        //    (1)
            return 'hi';
         }
        //     (2)     (3)
        let greeting = hi();
        
        console.log(greeting);
        ​
        /*
            1.keyword that brings data from inside of the local scope of the function outside of the function
            2. declare a new variable to hold the value of the return
            3. when called or 'invoked', the function return becomes the value of our variable 'greeting'
        */
       function capitalizeName(name) {
        let capName = '';
    ​
        for (let l in name) {
    ​
            if (l == 0) {
                capName += name[l].toUpperCase();
            } else {
                capName += name[l].toLowerCase();
            }
    ​
        }
    ​
        return capName;
    ​
    }
    ​
    const myName = capitalizeName('zAcHArY');
    // const jessicasName = capitalizeName('jeSSiCa');
    console.log(myName + ', how are you doing today?');
    // console.log(`${jessicasName}, how are you doing today`);
    ​
    /*
    CHALLENGE
    ************
    ​
        Make a tip calculator using a function
        Have it RETURN the value
        Capture that returned value in a VARIABLE
        Print that variable
    */
    ​
    function tipCalculator(bill) {
        let tip = bill * 0.2;
        return tip.toFixed(2) // toFixed() is the number of digits to appear after a decimal
    }
    ​
    let totalTip = tipCalculator(37.34);
    console.log(totalTip);
       
    
    
    
    
    
    
    