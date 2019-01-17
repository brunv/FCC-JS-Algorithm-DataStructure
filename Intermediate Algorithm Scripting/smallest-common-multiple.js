/**
 *  Smallest Common Multiple:
 * 
 *  Find the smallest common multiple of the provided parameters that can be evenly
 *  devided by both, as well as by all sequential numbers in the rang between these
 *  parameters.
 *  The range will be an array of two number that will not necessarily be in
 *  numerical order.
 */

/**
 *  Basic code solution:
 */

function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
        return b - a;
    });
  
    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
  
    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;
  
    // Run code while n is not the same as the array length.
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }
  
        loop++;
    } while (n !== newArr.length);
  
    return quot;
}

console.log(smallestCommons([1,5]));        // 60


/**
 *  Intermediate code solution:
 */

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}


/**
 *  Advanced code solution:
 */

function smallestCommons(arr) {

    // range
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
  
    let smallestCommon = lcm(min, min + 1);
  
    while(min < max) {
        min++;
        smallestCommon = lcm(smallestCommon, min);
    }
  
    return smallestCommon;
}
  
/**
* Calculates Greatest Common Divisor
* of two nubers using Euclidean algorithm
* https://en.wikipedia.org/wiki/Euclidean_algorithm
*/
function gcd(a, b) {
    while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}
  
/**
* Calculates Least Common Multiple
* for two numbers utilising GCD
*/
function lcm(a, b) {
    return (a * b / gcd(a, b));
}