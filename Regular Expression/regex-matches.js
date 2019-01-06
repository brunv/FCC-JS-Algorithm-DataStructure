/**
 *  Matching anything with Wildcard Period:
 *  Sometimes you won't (or don't need to) know the exact characters in your
 *  patterns. Thinking of all words that match, say, a misspelling would take
 *  a long time. Luckily, you can save time using the wildcard character: '.'
 * 
 *  The wildcard character '.' will match any one character. The wildcard is
 *  also called dot and period. You can use the wildcard characte just like any
 *  other caracter in the regex.
 */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

humStr.match(huRegex);     // returns ["hum"]
hugStr.match(huRegex);     // returns ["hug"]


/**
 *  Match single character with multiple possibilities:
 *  You can search for a literal pattern with some flexibility with character
 *  classes. Character classes allow you to define a group of characters you
 *  wish to match by placing them inside square brackets.
 */

// For example, you want to match "bag", "big" and "bug" but not "bog".

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;

bigStr.match(bgRegex);      // returns ["big"]
bagStr.match(bgRegex);      // returns ["bag"]
bugStr.match(bgRegex);      // returns ["bug"]
bogStr.match(bgRegex);      // returns null


/**
 *  Match letters of the alphabet:
 *  You saw how you can use character sets to specify a group of characters to
 *  match, but that's a lot of typing when you need to match a large range of
 *  characters (for example, every letter in the alphabet). Fortunately, there
 *  is a built-in feature that makes this short and simple.
 * 
 *  Inside a character set, you can define a range of characters to match using
 *  a hyphen character: '-'.
 */

// For example, to match lowercase letters 'a' through 'e' you would use [a-e]

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;

catStr.match(bgRegex);      // returns ["cat"]
batStr.match(bgRegex);      // returns ["bat"]
matStr.match(bgRegex);      // returns null


/**
 *  Match numver and letters of the alphabet:
 *  Using the hyphen (-) to match a range of characters is not limited to
 *  letters. It also works to match a range of numbers.
 *  Also, it is possible to combine a range of letters and numbers in a
 *  single character set.
 */

let jennyStr = "Jenny8675309";
let myRegex= /[a-z0-9]/ig;

jennyStr.match(myRegex);    // matches all letters and numbers in jennyStr


/**
 *  Match single charactes not specified:
 *  So far, you have created a set of characters that you want to match, but
 *  you could also create a set of characters that you do not want to match.
 *  These types of character sets are called negated character sets.
 *  
 *  To create a negated character set, you place a caret character '^' after
 *  the opening bracket and before the characters you do not want to match.
 * 
 *  For example, /[^aeiou]/gi matches all characters that are not a vowel.
 *  Note that characters like ., !, [, @, / and white space are matched - the
 *  negated vowel character set only excludes the vowel characters.
 */

// For example, /[^aeiou]/gi matches all characters that are not a vowel.
// Note that characters like ., !, [, @, / and white space are matched - the
// negated vowel character set only excludes the vowel characters.

// This regex matches all characters that are not a number or a vowel:
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);    // returns [ ,b,l,n,d, ,m,c,.]


/**
 *  Match characters that occur one or more times:
 *  Sometimes, you need to match a character (or group of characters) that
 *  appears one or more times in a row. This means it occurs at least once,
 *  and may be repeated.
 * 
 *  You can use the + character to check if that is the case. Remember, the
 *  character or pattern has to be present consecutively. That is, the character
 *  has to repeat one after the other.
 * 
 *  For example, /a+/g would find one match in "abc" and return ["a"]. Because
 *  of the +, it would also find a single match in "aabc" and return ["aa"].
 */

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);  // returns [ss, ss]


/**
 *  Match characters that occur zero or more times:
 *  There's also an option that matches character that occur zero or more times.
 *  
 *  The character to dot this is the asterisk or star: '*'.
 */

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

soccerWord.match(goRegex);      // return ["goooooooo"]
gPhrase.match(goRegex);         // return ["g"]
oPhrase.match(goRegex);         // return null


/**
 *  Find characters with Lazy Matching:
 *  In regular expressions, a greedy match finds the longest possible part of
 *  a string that fits the regex pattern and returns it as a match. The
 *  alternative is called a laxy match, which finds the smallest possible part
 *  of the string thar satisfies the regex pattern.
 * 
 *  You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is
 *  basically a pattern that starts with t, ends with i, and has ome letters in
 *  between.
 * 
 *  Regular exprssions are by deafult greedy, so the match would return ["titani"].
 *  It finds the largest sub-string possible to fit the pattern.
 *  However, you can use the '?' character to change it to lazy matching. "titanic"
 *  matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
 */

// Make the regex return the HTML tag <h1> and not the text "<h1>Winter is
// coming</h1>". Remember the wildcard '.' in a regular expression matches 
// any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.1*?>/;
let result = text.match(myRegex);       // returns ["<h1>"]


/**
 *  Match beginning string patterns:
 *  In an earlier challenge, you used the caret character (^) inside a character
 *  set to create a negated character set in the form [^thingsThatWillNotBeMatched].
 *  Outside of a character set, the caret is used to search for patterns at the
 *  beginning of strings.
 */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);           // returns true

let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);              // returns false


/**
 *  Match ending string patterns:
 *  There is also a way to search for patterns at the end of strings.
 *  You can search the end of strings using the dollar sign character '$' at
 *  the end of the regex.
 */

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);             // returns true

let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);              // returns false


/**
 *  Matching all letters and numbers:
 *  Using character classes, you were able to search for all letters of the
 *  alphabet with [a-z]. This kind of character class is common enough that
 *  there is a shortcut for it, although it includes a few extra characters
 *  as well.
 *  
 *  The closest character class in JavaScript to match the alphabet is \w.
 *  This shortcut is equal to [A-Za-z0-9_]. This character class matches upper
 *  and lowercase letters plus numbers. Note, this character class also includes
 *  the underscore character (_).
 *  These shortcut character classes are also known as shorthand character classes.
 */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

longHand.test(numbers);         // returns true
shortHand.test(numbers);        // returns true
longHand.test(varNames);        // returns true
shortHand.test(varNames);       // returns true


/**
 *  Match everything but letters and numbers:
 *  You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_]
 *  using \w. A natural pattern you might want to search for is the opposite of
 *  alphanumerics.
 *  You can search for the opposite of the \w with \W. Note, the opposite pattern
 *  uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
 */

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";

numbers.match(shortHand);       // returns ["%"]
sentence.match(shortHand);      // returns ["!"]


/**
 *  Match all numbers:
 *  You've learned shortcuts for common string patterns like alphanumerics.
 *  Another common pattern is looking for just digits or numbers.
 *  
 *  The shortcut to look for digit characters is \d, with a lowercase d. This
 *  is equal to the character class [0-9], which looks for a single character
 *  of any number between zero and nine.
 */

// Use the shorthand character class \d to count how many digits are in the string. 

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;      // returns 3


/**
 *  Match all non-numbers:
 *  You can also search for non-digits using a similar shortcut that uses an
 *  uppercase D instead.
 *  The shortcut to look for non-digit characters is \D. This is equal to the
 *  character class [^0-9], which looks for a single character that is not a
 *  number between zero and nine.
 */

// Use the shorthand character class \D to count how many non-digits are in
// the string. 

let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;    // returns 24


/**
 *  Match Whitespace:
 *  You can search for whitespace using \s, which is a lowercase s. This pattern
 *  not only matches whitespace, but also carriage return, tab, form feed, and
 *  new line characters. You can think of it as similar to the character class
 *  [ \r\t\f\n\v].
 */

let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;

whiteSpace.match(spaceRegex);           // returns [" ", " "]


/**
 *  Match non-whitespace characters:
 *  Search for non-whitespace using \S, which is an uppercase s. This pattern
 *  will not match whitespace, carriage return, tab, form feed, and new line
 *  characters. You can think of it being similar to the character class
 *  [^ \r\t\f\n\v].
 */

let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // returns 32


/**
 *  Specify upper and lower number of matches:
 *  Recall that you use the plus sign + to look for one or more characters and
 *  the asterisk * to look for zero or more characters. There are convenient but
 *  sometimes you want to mach a certain range of patterns.
 * 
 *  You can specify the lower and upper number of patterns with quantity specifiers.
 *  Quatity specifiers are used with curly brackets. You put two numbers between
 *  the curly brackets - for the lower and upper number of patterns.
 */

// For example, to match only the letter 'a' appearing between 3 and 5 times in the
// string "ah", your regex would be /a{3,5}h/;

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;

multipleA.test(A4);         // returns true
multipleA.test(A2);         // returns false


/**
 *  Specify only the lower number of matches:
 *  Sometimes you only want to specify the lower number of patterns with no
 *  upper limit.
 *  To only specify the lower number of patterns, keep the first number followed
 *  by a comma.
 */

// For example, to match only the string "hah" with the letter a appearing at
// least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;

multipleA.test(A4);         // returns true
multipleA.test(A2);         // returns false
multipleA.test(A100);       // returns true


/**
 *  Specify exact number of matches:
 *  Sometimes you only want a specific number of matches.To specify a certain
 *  number of patterns, just have that one number between the curly brackets.
 */

// For example, to match only the word "hah" with the letter 'a' 3 times, your
// regex would be /a{3}h/.

let multipleA = /ha{3}h/;

multipleA.test(A4);         // returns false
multipleA.test(A2);         // returns true
multipleA.test(A100);       // returns false


/**
 *  Check for all or none:
 *  You can specify the possible existence of an element with a question mark, ?.
 *  This checks for zero or one of the preceding element. You can think of this
 *  symbol as saying the previous element is optional.
 */

// For example, there are slight differences in American and British English
// and you can use the question mark to march both spellings.

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;

rainbowRegex.test(american);        // returns true
rainbowRegex.test(british);        // returns true


/**
 *  Positive and Negative lookahead:
 *  Lookaheads are patterns that tell JavaScript to look-ahead in your string
 *  to check for patterns further along. This can be useful when you want to
 *  search for multiple patterns over the same string.
 * 
 *  There are two kinds of lookaheads: positive lookahead and negative lookahead.
 *  A positive lookahead will look to make sure the element in the search pattern
 *  is there, but won't actually match it. A positive lookahead is used as (?=...)
 *  where the '...' is the required part that is not matched.
 * 
 *  On the other hand, a negative lookahead will look to make sure the element in
 *  the search pattern is not there. A negative lookahead is used as (?!...) where
 *  the '...' is the pattern that you do not want to be there. The rest of the
 *  pattern is returned if the negative lookahead part is not present.
 */

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;

quit.match(quRegex);        // returns ["q"]
noquit.match(qRegex);       // returns ["q"]

// A more practical use of lookaheads is to check two or more patterns in one
// string. Here is a (naively) simple password chcker that looks for beetween
// 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);   // returns true


/**
 *  Reuse patterns using capture groups:
 *  Some patterns you search for will occur multiple times in a string. It is
 *  wasteful to manually repeat that regex. There is a better way to specify when
 *  you have multiple repeat substrings in your string.
 * 
 *  You can search for repeat substrings using capture groups. Parentheses,
 *  ( and ), are used to find repeat substrings. You put the regex of the pattern
 *  that will repeat in between the parentheses.
 * 
 *  To specify where that repeat string will appear, you use a backslash (\) and
 *  then a number. This number starts at 1 and increases with each additional
 *  capture group you use. An example would be \1 to match the first group.
 */

// The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;

repeatRegex.test(repeatStr);    // returns true
repeatStr.match(repeatRegex);   // returns ["regex regex", "regex"]


/**
 *  User capture groups to search and replace:
 *  Searching is useful. However, you can make searching even more powerful
 *  when it also changes (or replaces) the text you match.
 * 
 *  You can search and replace text in a string using .replace() on a string.
 *  The inputs for .replace() is first the regex pattern you want to search for.
 *  The second parameter is the string to replace the match or a function to do
 *  something.
 */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");     // returns "The sky is blue."

// You can also access capture groups in the replacement string with dollar
// signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');   // returns "Camp Code"