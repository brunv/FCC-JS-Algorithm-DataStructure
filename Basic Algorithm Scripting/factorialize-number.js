/**
 *  Return the factorial of the provided integer.
 * 
 *  If the integer is represented with the letter n, a factorial is the product
 *  of all positive integers less than or equal to n.
 */

function factorialize(num) {

    if (num === 0) {
        return 1;
    }

    return num * factorialize(num-1)
}

console.log(factorialize(5));   // 120
console.log(factorialize(1));   // 1
console.log(factorialize(9));   // 362880
console.log(factorialize(0));   // 1
