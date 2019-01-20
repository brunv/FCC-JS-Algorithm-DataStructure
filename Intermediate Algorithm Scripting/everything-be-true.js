/**
 *  Everything be true:
 * 
 *  Check if the predicate (second argument) is 'truthy' on all elements of a
 *  collection (first argument).
 *  In other words, you are given an array of colletion of objects. The predicate
 *  'pre' will be an object property and you need to return 'true' if its value is
 *  'truthy'. Otherwise, return 'false'.
 * 
 *  In JavaScript, 'truthy' values are values that translate to 'true' when
 *  evaluated in Boolean context.
 *  Remember you can access object properties thorugh either dot notation or []
 *  notation.
 */

function truthCheck(collection, pre)  {

    return collection.every(item => item[pre]);
}

console.log(truthCheck(
    [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}
], "sex"));


/**
 *  Basic code solution:
 */

function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}


/**
 *  Intermediate code solution:
 */

function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}


/**
 *  Advanced code solution:
 * 
 *  Array.every method internally checks if the value returned from the callback
 *  is truthy.
 */

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}