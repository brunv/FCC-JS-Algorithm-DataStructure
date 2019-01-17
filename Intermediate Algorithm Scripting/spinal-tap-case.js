/**
 *  Spinal Tap Case:
 * 
 *  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-
 *  dashes.
 */

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).filter(item => item !== '').join("-").toLowerCase();
    // a whitescpae character [\s] is encountered
    // underscore character [_] is encountered
    // or is followed by an uppercase letter [(?=[A-Z])]
}

console.log(spinalCase("This Is Spinal Tap"));

/**
 *  Basic code solution:
 */

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
}