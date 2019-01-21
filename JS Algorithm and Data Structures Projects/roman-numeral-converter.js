/**
 *  Roman Numeral converter:
 * 
 *  Convert given number into a roman numeral.
 *  All roman numeral answers shoud be provided in upper-case.
 */

/**
 *  Basic code solution:
 */

var convertToRoman = function(num) {

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanized = '';
  
    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
  
    return romanized;
}

console.log(convertToRoman(36));        // XXXVI
console.log(convertToRoman(3));         // III
console.log(convertToRoman(44));        // XLIV
console.log(convertToRoman(83));        // LXXXIII
console.log(convertToRoman(97));        // XCVII
console.log(convertToRoman(400));       // CD
console.log(convertToRoman(798));       // DCCXCVIII
console.log(convertToRoman(891));       // DCCCXCI
console.log(convertToRoman(2019));      // MMXIX
console.log(convertToRoman(3999));      // MMMCMXCIX