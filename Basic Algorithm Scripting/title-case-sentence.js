/**
 *  Title case sentence
 * 
 *  Return de provided string with the first letter of each word capitalized.
 *  Make shure the rest oft the word is in lower case.
 */

/**
 *  Basic code solution:
 *  We are modifying the 'reaplaceAt' function using prototype to facilitate
 *  the use of the program.
 *  Split the string by white spaces, anda create a variableto track the updated
 *  title. Then we use a loop to turn the first character of the word to uppercase
 *  and the rest to lowercase.
 */

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
    var words = str.split(' ');
    var sentence = [];

    for (let word in words) {
        sentence[word] = words[word].toLowerCase().replaceAt(0, words[word].charAt(0).toUpperCase());
    }

    return sentence.join(' ');
}

console.log(titleCase("I'm a little tea pot"));


/**
 *  Intermediate code solution:
 *  We are making entire string lower case and the converting it into array. Then
 *  we are using map function to replace the lowercase character with uppercase.
 *  Finally, we are returning the string using join method.
 */

function titleCase(str) {

    let convertToArray = str.toLowerCase().split(' ');

    let result = convertToArray.map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()));

    return result.join(' ');
}


/**
 *  Advanced code solution:
 *  The solution works by first lowercasing all the characters in the string and
 *  then only uppercasing the first character of each word.
 */

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}