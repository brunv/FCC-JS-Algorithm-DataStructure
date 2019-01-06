/**
 *  Match Literal Strings:
 */

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);    // returns true

// Any other forms of "Kevin" will not match. For example, the regex /Kevin/
// will not match "kevin" or "KEVIN".

let wrongRegex = /kevin/;
wrongRegex.test(testStr);   // returns false


/**
 *  Match Literal String with different possibilities:
 *  Using regexes like /coding/, you can look for the pattern "coding" in
 *  another string. This is powerful to search single strings, but it's limited
 *  to only one pattern. You can search multiple patterns using the alternation
 *  or OR operator: |.
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);  // returns true


/**
 *  Ignore Case while matching:
 *  Case is the difference between uppercase letters and lowercase letters. You
 *  can match bot cases using what is called flag - the i flag. You can use it
 *  by appending it to the regex.
 */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);   // returns true