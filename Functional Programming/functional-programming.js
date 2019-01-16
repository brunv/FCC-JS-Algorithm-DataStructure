/**
 *  Avoid Mutations and Side Effects Using Functional Programming:
 * 
 *  One of the core principle of functional programming is to not change things.
 *  Changes lead to bugs. It's easier to prevent bugs knowing that yout functions
 *  don't change anything, including the function arguments or any global variable.
 * 
 *  Recall that in functional programming, chaging or altering things is called
 *  'mutation', and the outcome is called a 'side effect'. A function, ideally,
 *  should be a 'pure function', meaning that it does not cause any side effects.
 */

// Let's try to master this discipline and not alter any variable or object
// in out code:

var fixedValue = 4;             // the global variable

function incrementer() {
    return fixedValue + 1;
}

var newValue = incrementer();   // should be equal 5
console.log(newValue);
console.log(fixedValue);        // should print 4


/**
 *  Pass Arguments to avoid External Dependence in a Function:
 * 
 *  The code above was a step closer to functional programming principles, but
 *  there is still something missing.
 * 
 *  We didn't alter the global variable value, but the function 'incrementer'
 *  would not work without the global variable 'fixedValue' being there.
 * 
 *  Another principle of functional programming is to always declare your
 *  dependencies explicity. This means if a function depends on a variable or
 *  object being present, then pass that variable or object directly into the
 *  function as an argument.
 * 
 *  There are several good consequences from this principle. The function is easier
 *  to test, you know exactly what input it takes, and it won't depend on anything
 *  else in your program.
 * 
 *  This can give you more confidence when you alter, remove, or add new code. You
 *  would know what you can or cannot change and you can see where the potential
 *  traps are.
 * 
 *  Finally, the function will always produce the same output for the same set of
 *  inputs, no matter what part of the code executes it.
 */

var fixedValue = 4;             // the global variable

function incrementer(initialValue) {
    return initialValue + 1;
}

var newValue = incrementer(fixedValue); // should be equal 5
console.log(newValue);
console.log(fixedValue);                // should print 4


/**
 *  Refactor Gloval Variables out of Functions:
 * 
 *  So far, we have seen two distinct principles for functional programming:
 *  1) Don't alter a variable or object - create new variables and objects and
 *  return them if need be from a function.
 *  2) Declare function arguments - any computation inside a function depends only
 *  on the arguments, and not on any global object or variable.
 * 
 *  Adding one to a number is not very exciting, but we can apply these principles
 *  when working with arrays or more complex objects.
 */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// This function should add a book to the list and return the list
function add (bookList, bookName) {
    return [...bookList, bookName];  
}

// This function should remove a book from the list and return the list
function remove (bookList, bookName) {
    let list = [...bookList];
    if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);