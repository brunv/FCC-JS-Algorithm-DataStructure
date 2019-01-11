/**
 *  Confirm the ending
 * 
 *  Check if a string ends with the given target string.
 */

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
  
console.log(confirmEnding("Bastian", "n"));