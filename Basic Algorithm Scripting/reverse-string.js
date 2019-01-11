/**
 *  Reverse a String
 */

function reverseString(str) {
    let revString = str.split('');
    console.log(revString);
    revString.reverse().join('');
    return revString
}

console.log(reverseString("hello world"));

/**
 *  The first step is to split the string by characters using split(''). Notice
 *  that we don't leave anything in between the single quotes, this tells the
 *  function to split the string by each character. Using the split() function
 *  will turn the string into an array of characters.
 */

/**
 *  Next we chain the reverse() function, which takes our array of characters
 *  and reverses them.
 */

/**
 *  Finally, we join('') to put our characters back together into a string. Notice
 *  once again that we left no spaces in the argument foi join, this makes sure
 *  that the array of characters is joined back together by each character.
 */