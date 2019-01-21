/**
 *  Palindrome Checker:
 * 
 *  Return 'true' if the given string is a palidrome. Otherwise, return 'false'.
 * 
 *  A palidrome is a word os sentence that's spelled the same way both forward and
 *  backward, ignoring ponctuation, case, and spacing.
 * 
 *  Note: you'll need to remove all non-alphanumeric characters (ponctuation,
 *  spaces and symbols) and turn everything into the same case in order to check
 *  for palindromes.
 * 
 *  We'll also pass string with special symbols, such as "2A3*3a2", "2A3 3a2", and
 *  "2_A3*3#A2".
 */


function palindrome(str) {
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    //console.log(str);

    let charArray = str.split('');
    let secondArray = [];
    let isEven = (str.length % 2 == 0) ? true : false;

    if (isEven) {
        secondArray = charArray.splice(charArray.length / 2, charArray.length);
        secondArray.reverse();      // reverse the second array
        // console.log(charArray, secondArray);
    } else {
        secondArray = charArray.splice(charArray.length / 2, charArray.length);
        secondArray.shift();        // removes the middle element
        secondArray.reverse();      // reverse the second array
        // console.log(charArray, secondArray);
    }

    return charArray.every(
        function(element, index) {
            return element === secondArray[index];
        }
    );
}

//  everything should return 'true'
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("My age is 0, 0 si ega ym."));


/**
 *  Basic code solution:
 * 
 *  Performs very poorly with larger strings
 */

function palindrome(str) {

    return str.replace(/[\W_]/g, '').toLowerCase() === 
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}


/**
 *  Intermediate code solution:
 */

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');

    for(var i = 0, len = str.length - 1; i < len/2; i++) {
        if(str[i] !== str[len-i]) {
            return false;
        }
    }
    return true;
}


/**
 *  Advanced code solution: 
 * 
 *  The simpler solutions performs very poorly on long strings because they operate
 *  on the whole string multiple times (toLowerCase(), replace(), split(),
 *  reverse(), join()) before comparing the whole string twice.
 * 
 *  The beauty of this solution is it never needs to read thorugh the whole string,
 *  even once, to know it's not a palindrome. Why read through the entire string if
 *  you can tell that it's not a palindrome just by looking at two letters?
 * 
 *  Uses a while loop instead of a for loop as a best practice - because we are
 *  using two variables, one is the index starting from the beginning of the
 *  string, and the other at the end of the string.
 */

// This solution performs at minimum 7x better, at maximum infinitely better.
// The guy who did it just failed this in an interview.
function palindrome(str) {
    //assign a front and a back pointer
    let front = 0
    let back = str.length - 1

    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
            front++
            continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
            back--
            continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
    }

    //if the whole string has been compared without returning false, it's a palindrome!
    return true

}