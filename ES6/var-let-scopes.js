/**
 * With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.
 */

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/**
 * This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable.
 * This is because the stored function will always refer to the value of the updated global i variable.
 */

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3

/**
 * As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns 
 * the global i and not the value i had when the function was created in the for loop.
 * The let keyword does not follow this behavior:
 */

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

/**
 * i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. 
 * printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by 
 * the let keyword within the loop statement.
 */