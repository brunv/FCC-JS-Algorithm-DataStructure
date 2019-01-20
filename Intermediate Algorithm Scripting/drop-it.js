/**
 *  Drop It:
 * 
 *  Given the arry 'arr', iterate through and remove each element starting from
 *  the first element until the funtion 'func' returns 'true' when the iterated
 *  element is passed through it.
 *  Then return the rest of the array once the condition is satisfies, otherwise,
 *  'arr' should be returned as an empty array.
 */

/**
 * Basic code solution:
 */

function dropElements(arr, func) {
    
    let times = arr.length;
    for (let i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

console.log(dropElements([1,2,3,7,1], function(n) {return n > 3;}));


/**
 *  Intermediate code solution:
 * 
 *  Using the ES6 'findIndex()' function to find the index of the element that
 *  passes the condition. Slice the foind index until the end.
 */

function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length, arr.length);
}


/**
 *  Advanced code solution:
 */

function dropElements(arr, func) {
    while(arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}