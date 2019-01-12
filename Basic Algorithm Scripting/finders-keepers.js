/**
 *  Finders Keepers
 * 
 *  Create a function that looks through an array and return the first element
 *  in the array that passes a truth teste. If no element passes the teste,
 *  return undefined.
 */

function findElement(arr, func) {
    let num = 0;

    for (let i=0; i<arr.length; i++) {
        num = arr[i];
        if(func(num)) {
            return num;
        }
    }

    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));