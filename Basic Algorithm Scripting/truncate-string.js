/**
 *  Truncate a String
 * 
 *  Trucante a String if it is longert than the given maximum string length.
 *  Return the truncated string with a '...' ending.
 */

function truncateString(str, num) {
    
    if (str.length > num && num > 3) {
        return str.slice(0, (num-3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


/**
 *  Advanced code solution:
 */

function truncateString(str, num) {

    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num-3: num) + '...';
    }
}