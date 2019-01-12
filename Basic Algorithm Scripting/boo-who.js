/**
 *  Boo who
 * 
 *  Check if is classified as a boolean primitive. Return true or false.
 */

function booWho(bool) {
    if(bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

booWho(null);

/**
 *  Basic code solution:
 */

function booWho(bool) {
    return typeof bool === 'boolean';
}