/**
 *  Missing Letters:
 * 
 *  Find the missing letter in the passed letter rang and return it. If all letters
 *  are present in the rang, return undefined.
 */

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str.charAt(0));
    //console.log(start);
    
    let j = 0;
    for (let i = start; i < start + str.length; i++) {
        if (str[j] !== alphabet[i]) {
            return alphabet[i];
        }
        j++;
    }

    return undefined;
}

console.log(fearNotLetter("fghijklmnopr"));    // q


/**
 *  Basic code solution:
 */

function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);
  
        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
  
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
        }  
    }
    return undefined;
}


/**
 *  Intermediate code solution:
 */

function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;
  
    str.split('').map(function(letter,index) {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });
  
    return missing;
}


/**
 *  Simplified Advanced code solution:
 */

function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}


/**
 *  Advanced code solution:
 */

function fearNotLetter(str) {
    var allChars = '';
    var notChars = new RegExp('[^'+str+']','g');
  
    for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  
    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}