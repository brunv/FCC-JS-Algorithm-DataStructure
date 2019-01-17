/**
 *  Search and Replace:
 * 
 *  Perform a search and replace on the sentence using the arguments provided and
 *  return the new sentence. First argument is the sentence to perform the search
 *  and replace on. Second argument is the word that you will be replacing
 *  (before). Thrid argument is what you will be replacing the second argument
 *  with (after).
 * 
 *  Note: preserve the case of the first character in the original word when you
 *  are replacing it. For example if you mean to replace whe word "Book" with the
 *  word "dog", it should be replaced as "Dog".
 */

/**
 *  Basic code solution:
 */

function myReplace(str, before, after) {
    var index = str.indexOf(before);

    if(str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }

    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));


/**
 *  Intermediate code solution:
 */

function myReplace(str, before, after) {
    //Create a regular expression object
      var re = new RegExp(before,"gi");
    //Check whether the first letter is uppercase or not
      if(/[A-Z]/.test(before[0])){
      //Change the word to be capitalized
        after = after.charAt(0).toUpperCase()+after.slice(1);
         }
         //Replace the original word with new one
      var  newStr =  str.replace(re,after);
    
     return newStr;
}


/**
 *  Advanced code solution:
 */

// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =  String.prototype.capitalize ||
    function() {
        return this[0].toUpperCase() + this.slice(1);
    };

const Util = (function () {
// Create utility module to hold helper functions
    function textCase(str, tCase) {
        // Depending if the tCase argument is passed we either set the case of the
        // given string or we get it.
        // Those functions can be expanded for other text cases.
        
        if(tCase) {
            return setCase(str, tCase);
        } else {
            return getCase(str);
        }

        function setCase(str, tCase) {
            switch(tCase) {
                case "uppercase": return str.toUpperCase();
                case "lowercase": return str.toLowerCase();
                case "capitalized": return str.capitalize();
                default: return str;
            }
        }

        function getCase(str) {
            if (str === str.toUpperCase()) { return "uppercase"; }
            if (str === str.toLowerCase()) { return "lowercase"; }
            if (str === str.capitalize()) { return "capitalized"; }
            return "normal";
        }
    }

    return {
        textCase
    };
})();

function myReplace(str, before, after) {
    const { textCase } = Util;
    const regex = new RegExp(before, 'gi');
    const replacingStr = textCase(after, textCase(before));

    return str.replace(regex, replacingStr);
}