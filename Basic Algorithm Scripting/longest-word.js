/**
 *  Find the longest word in a string
 */

/**
 *  Basic code solution:
 */

function findLongestWordLength(str) {
    let words = str.split(' ');
    console.log(words);

    let longestWord = 0;

    for (let i=0; i<words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }
    return longestWord;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


/**
 *  Intermediate code solution:
 */

function findLongestWordLength(str) {

    return str.split(' ').reduce(function(x, y) {
        return Math.max(x, y.length)
    }, 0);
}
