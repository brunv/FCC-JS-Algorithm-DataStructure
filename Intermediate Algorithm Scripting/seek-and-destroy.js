/**
 *  Seek and Destroy:
 * 
 *  You will be provided with an initial array (the first argument in the destroyer
 *  function), followed by one or more arguments. Remove all elements from the
 *  inital array that are of the same value as these arguments.
 * 
 *  Note: you have to use the 'arguments' object.
 */

function destroyer(arr, ...args) {
    //console.log(args);
    return arr
        .filter(item => args.indexOf(item) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


/**
 *  Basic code solution:
 */

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }

    // filters the null's created by the delete operator
    return arr.filter(Boolean);
}


/**
 *  Intermediate code solution:
 */

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    //console.log(args);    // [2, 3]

    return arr.filter(function(val) {
        // pass the filter when val is not in args
        return !args.includes(val);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


/**
 *  Advanced code solution:
 */

const destroyer = (arr, ...args) => arr.filter(item => !args.includes(item));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));