/**
 *  Repeat a String
 * 
 *  Repeat a given string str for num times. Return an emprty string if num
 *  is not a positive number.
 */

/**
 *  Basic code solution:
 */

function repeatStringNumTimes(str, num) {

    let fullStr = '';

    while (num > 0) {
        fullStr += str;
        num--;
    }

    return fullStr;
}
  
console.log(repeatStringNumTimes("abc", 3));


/**
 *  Intermediate code solution:
 */

function repeatStringNumTimes(str, num) {
    
    if (num < 0)
        return "";
    if (num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}


/**
 *  Advanced code solution:
 */

function repeatStringNumTimes(str, num) {

    return num > 0 ? str.repeat(num) : '';
}