/**
 *  Sum all numbers in a range:
 * 
 *  We'll pass you an array of two numbers. Return the sum of those two numbers
 *  plus the sum of all the numbers between them.
 *  The lowest number will not always come first.
 */

function sumAll(arr) {
    let a = arr[0];
    let b = arr[1];

    if (a < b) {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    } else {
        let sum = 0;
        for (let i = b; i <= a; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(sumAll([1, 4]));    // 10
console.log(sumAll([6, 2]));    // 20


/**
 *  Basic code solution:
 */

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}


/**
 *  Intermediate code solution:
 */

function sumAll(arr) {  
    // Using ES6 arrow function (one-liner)
    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = sortedArr[0];
    var lastNum = sortedArr[1];
    
    // Using Arithmetic Progression summing formula
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
}


/**
 *  Advanced code solution:
 *  
 *  Using the spread operator (...arr) allows passing the actual array to the
 *  function instead of one-by-one elements.
 */

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}