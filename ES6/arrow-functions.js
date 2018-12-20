/**
 * Used var keyword just to run the code like this
 */

/**
 * The standard anonymous function declaration:
 */

var myFunc = function() {
    var myVar = "value";
    return myVar;
}
console.log(myFunc());

/**
 * Using Arrow Functions:
 */

var myFunc = () => {
    var myVar = "value";
    return myVar;
}
console.log(myFunc());

/**
 * When there is no function body, and only a return value, arrow function syntax
 * allows you to omit the keyword return as well as the brackets surrounding the
 * code. This helps simplify smaller functions into one-line statements:
 */

var myFunc = () => "value";
console.log(myFunc());

/**
 * Passing arguments into arrow functions:
 */

let item = 2;
const doubler = (item) => item * 2;

console.log(doubler(item));     // 4
console.log(doubler(5));        // 10
console.log(item);              // 2