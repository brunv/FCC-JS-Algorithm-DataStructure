/**
 *  Sum all odd Fibonacci numbers:
 * 
 *  Given a positive integer 'num', return the sum of all odd Fibonacci numbers
 *  that are less than or equal to 'num'.
 *  The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
 *  number in the sequence is the sum of the two previous numbers. The first six
 *  numbers of the Fibonacci sequence are 1,1,2,3,5 and 8.
 */

function sumFibs(num) {
    let sequence = fibonacci(num);
    console.log(sequence);

    function fibonacci(num) {
        let prox = 1;
        let ant = 0;
        let sum = 0;
        let result = [1];

        while(sum <= num) {
            sum = prox + ant;
            ant = prox;
            prox = sum;

            if (sum <= num) result.push(sum);
        };

        return result;
    }

    const reducer = (acc, value) => acc + value;

    return sequence.filter(item => item % 2 != 0).reduce(reducer);
}

console.log(sumFibs(20));       // 23


/**
 *  Basic Code Solution:
 */

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}


/**
 *  Intermediate code solution:
 */

function sumFibs(num) {
    
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
    
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2);
    });
}