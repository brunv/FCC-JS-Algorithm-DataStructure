/**
 *  Set Default Parameters for your functions:
 *  In order to help us create more flexible functions, ES6 introduces default
 *  parameters for functions. The default parameter kicks in when the argument
 *  is not specified (it is undefined).
 */


function greeting(name = "Anonymous") {
    return "Hello " + name;
}

console.log(greeting("John"));      // "Hello John"
console.log(greeting());            // "Hello Anonymous"


/**
 *  Use the Rest Operator with function parameters:
 *  In order to help us create more flexible functions, ES6 introduces the rest
 *  operator for function parameters. With the rest operator, you can create
 *  functions that take a variable number of arguments. These arguments are stored
 *  in an array that can be acessed later from inside the function.
 */


function howMany(...args) {
    return "You have passed " + args.length + " arguments!";
}

console.log(howMany(0, 1, 2));                              // 3
console.log(howMany("string", null, [1, 2, 3, 4], { }));    // 4


/**
 *  Use the Spread Operator to evaluate arrays in-place:
 *  ES6 introduces the spread operator, which allows us to expand arrays and other
 *  expressions in places where multiple parameters or elements are expected.
 */


// The ES5 code below uses apply() to compute the maximum value in an array:
var arr = [6, 68, 90, 3, 14];
var maximus = Math.max.apply(null, arr);    // returns 90;

// We had to use 'Math.max.apply(null, arr)' because 'Math.max(arr)' returns NaN.
// 'Math.max()' expects comma-separated aguemtns, but not an array.

// The spread separator maked this syntax much better to read and maintain:
const array = [6, 89, 3, 45];
const maximum = Math.max(...array);         // returns 89;

// ...array returns an unpacked array. In other words, it spreads the array.

// However, the spread operator only works in-place, like in an argument to a
// function or an array literal. The following code will not work:
const spreaded = ...array;                  // will throw a syntax error
const arrayCopy = [...array];               // will copy the array
console.log(arrayCopy);
