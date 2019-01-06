/**
 *  Extraxt Matches:
 *  So far, you have only been checking if a patterns exists or not within a
 *  string. You can also extract the actual matches you found with the
 *  .match() method.
 *  To use the .match() method, apply the method on a string and pass in the
 *  regex inside the parentheses. Here's an example:
 */

"Hello, World!".match(/Hello/);     // returns ["Hello"]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);             // returns ["expressions"]


/**
 *  Find more than the first match:
 *  So far, we have only been able to extract or search a pattern once.
 *  To search or extract a pattern more than once, you can use the g flag.
 */

let testStr = "Repeat, Repeat again, Repeat again and again.";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);         // returns ["Repeat", "Repeat", "Repeat"]
