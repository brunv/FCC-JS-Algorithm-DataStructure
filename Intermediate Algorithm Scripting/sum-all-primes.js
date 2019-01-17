/**
 *  Sum All Primes:
 * 
 *  Sum all the prime numbers up to and including the provided number.
 *  A prime number is defined as a number greater than one having only two
 *  divisors, one and itself. 
 *  The provided number may not be a prime.
 */

function sumPrimes(num) {
    let result = 0;

    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            result += i;
        }
    }

    function isPrime(num) {
        let aux = 0;
        for (let j = 1; j <= num; j++) {
            if ( num % j == 0)
                aux++;
        }
        return (aux == 2) ? true : false;
    }

    return result;
}

console.log(sumPrimes(10));     // 17
console.log(sumPrimes(977));    // 73156


/**
 *  Intermediate code solution:
 */

function sumPrimes(num) {
    // function to check if the number presented is prime
    function isPrime(number) {
        for (i = 2; i <= number; i++) {
            if(number % i === 0 && number!= i) {
                // return true if it is divisible by any number that is not itself.
               return false;
            }
         }
         // if it passes the for loops conditions it is a prime
        return true;
    }

    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (num === 1) {
        return 0;
    }

    // Check if your number is not prime
    if(isPrime(num) === false) {
        // for non primes check the next number down from your maximum number, do not add anything to your answer
        return sumPrimes(num - 1);
    }
  
    // Check if your number is prime
    if(isPrime(num) === true) {
        // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
        return num + sumPrimes(num - 1);
    }
}


/**
 *  Advanced code solution:
 */

function sumPrimes(num) {
    	
    let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
    
    let onlyPrimes = arr.filter( (n) => { 
        let m = n-1;
        while (m > 1 && m >= Math.sqrt(n)) { 
            if ((n % m) === 0) 
                return false;
            m--;
        }
        return true;
    });
    
    return onlyPrimes.reduce((a,b) => a+b); 
}