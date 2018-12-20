/**
 * However, it is important to understand that objects (including arrays and functions)
 * assigned to a variable using const are still mutable. Using the const declaration
 * only prevents reassignment of the variable identifier.
 */

"use strict";

const s = [5, 10, 15];
// s = [5, 10, 25];         // throws error, truing to assign a const
s[2] = 50;                  // works just as it would with an array declared with var or let

console.log(s);             // returns [5, 10, 50]

/**
 * As you can see, you can mutate the object [5, 10, 15] itself and the variable s will
 * still point to the altered array [5, 10, 50]. Like all arrays, the array elements
 * in s are mutable, but because const was used, you cannot use the variable identifier
 * s to point to a different array using the assignment operator.
 */