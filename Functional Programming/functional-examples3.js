/**
 *  Combine an array into a string using the 'join()' method:
 * 
 *  The 'join' method is used to join the elements of an array together to create
 *  a string. It takes an argument for the delimiter that is used to separate the
 *  array elements in the string.
 */

var arr = ["Hello", "World"];
var string = arr.join(" ");    // "Hello World"

function sentensify(str) {
    return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));


/**
 *  Apply functional programming to convert string to URL Slugs:
 * 
 *  Let's combine what we have learned to solve a practical problem. Many content
 *  management sites (CMS) have the titles of a post added to part of the URL for   
 *  simple bookmarking purposes. For example, if you write a Medium poost titled
 *  "Stop using reduce", it's likely the URL would have some form of the title
 *  string in it (".../stop-using-reduce"). Ypu may have already noticed this on
 *  the freeCodeCamp site.
 */

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.split(/\W/).filter((obj) => obj !== '').join("-").toLowerCase();
    // return title.toLowerCase().trim().split(/\s+/).join('-');
}

var winterComing = urlSlug(globalTitle);
console.log(winterComing);


/**
 *  Use the 'every' method to check that every element in an array meets a criteria
 * 
 *  The 'every' method works with arrays to check if every element passes a
 *  particular test. It returns a Boolean value: 'true' if all values meet the
 *  criteria, 'false' if not.
 */

var number = [1, 5, 8, 0, 10, 11];

number.every(function(currentValue) {
    return currentValue < 10;
});     // false

function checkPositive(arr) {
    return arr.every(function(item) {
        return item >= 0;
    });
}

console.log(checkPositive([1, 2, 3, -4, 5]));       // false


/**
 *  Use the 'some' method to check that any elements in an array meet a criteria:
 * 
 *  The 'some' method works with arrays to check if any element passes a particular
 *  test. It return a Boolean value: 'true' if any of the values meets the
 *  criteria, 'false' if not.
 */

var numbers = [10, 50, 8, 220, 110, 11];

number.some(function(currentValue) {
    return currentValue < 10;
});     // true

function checkPositiveAgain(arr) {
    return arr.some(function(item) {
        return item >= 0;
    });
}

console.log(checkPositiveAgain([1, 2, 3, 4, -5]));  // true


/**
 *  Introduction to Currying and Partial Application:
 * 
 *  The 'arity' of a function is the number of arguments it requires. Currying a
 *  function means to convert a function of N arity into N funciont of arity 1.
 *  
 *  In other words, it restructures a function so it takes one argument, then
 *  returns another function that takes the next argument, and so on.
 * 
 *  This is useful in your program if you can't supply all the arguments to a
 *  function at one time. You can save each function call into a variable, which
 *  will hold the returned function reference that takes the next argument when
 *  it's available.
 * 
 *  Similarly, 'partial application' can be described as applying a few arguments
 *  to a function at a time and returning another function that is applied to more
 *  arguments.
 */

// Un-curried function:
function unCurried(x, y) {
    return x + y;
}

// Curried function:
function curried(x) {
    return function(y) {
        return x + y;
    }
}

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2));      // 3

// Impartial function:
function impartial(x, y, z) {
    return x + y + z;
}

var partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10));        // 13

function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}
console.log(add(10)(20)(30));