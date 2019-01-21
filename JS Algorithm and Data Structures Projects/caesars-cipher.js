/**
 *  Caesars Cipher:
 * 
 *  One of simples and most widely known ciphers is a Caesars Cipher, also known as
 *  shift cipher. In a shift cipher the meanings of the letters are shiftted by
 *  some set amount.
 * 
 *  A common modern use is the ROT13 cipher, where the values of the letters are
 *  shifted by 13 places. Thus 'A' <-> 'N', 'B' <-> 'O'.
 * 
 *  Write a function which takes a ROT13 encoded string as input and returns a
 *  decoded string.
 *  All letters will be uppercas. Do not transform anu non-alphanumeric character,
 *  but do passes them on.
 */

/**
 *  Algorithm Explanation:
 *  
 *      ALPHA	KEY	BASE 	 	 	 ROTATED	ROT13
    -------------------------------------------------------------
    [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]
    [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O]
    [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P]
    [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q]
    [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R]
    [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S]
    [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T]
    [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U]
    [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V]
    [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W]
    [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X]
    [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y]
    [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]
    [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]
    [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]
    [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C]
    [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D]
    [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E]
    [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F]
    [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G]
    [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H]
    [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I]
    [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J]
    [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K]
    [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L]
    [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]
 */


/**
 *  Basic code solution:
 */

function rot13(str) {
    // Split str into a character array
    return str.split('')
        // Iterate over each character in the array
        .map.call(str, function(char) {
            // Convert char to a character code
            let x = char.charCodeAt(0);
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
                return String.fromCharCode(x);  // Return un-converted character
            }
            //N = ASCII 78, if the character code is less than 78, shift forward 13 places
            else if (x < 78) {
                return String.fromCharCode(x + 13);
            }
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(x - 13);
        }).join('');  // Rejoin the array into a string
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


/**
 *  Intermediate code solution:  
 */

function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/ ;
    str = str.split("");
    for (var x in str) {
        if (regEx.test(str[x])) {
            // A more general approach
            // possible because of modular arithmetic
            // and cyclic nature of rot13 transform
            rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
            rotCharArray.push(str[x].charCodeAt());
        }
    }

    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}


/**
 *  Advanced code solution:
 */

function rot13(str) {
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}