/**
 *  DNA Paring:
 *  
 *  The DNA strand is missing the pairing element. Take each character, get its
 *  pair, and return the results as a second array.
 *  Base pairs are a pair of AT and CG. Match the missing element to provided
 *  character.
 *  Return the provided character as the first element in each array.
 * 
 *  For example, for the input GCG, return [["G","C"], ["C","G"],["G","C"]]
 *  
 *  The character and its pair are paired up in an array, and all the arrays are
 *  grouped into one encapsulatiog array.
 */

function pairElement(str) {
    let arr = str.split("");
    let dna = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "A") {
            let temp = [arr[i], "T"];
            dna.push(temp);
        }
        if (arr[i] == "T") {
            let temp = [arr[i], "A"];
            dna.push(temp);
        }
        if (arr[i] == "C") {
            let temp = [arr[i], "G"];
            dna.push(temp);
        }
        if (arr[i] == "G") {
            let temp = [arr[i], "C"];
            dna.push(temp);
        }
    }
    return dna;
}

console.log(pairElement("GCG"));


/**
 *  Basic code solution:
 */

function pairElement(str) {
    var paired = [];

    var search = function(char) {
      switch (char) {
        case 'A':
          paired.push(['A', 'T']);
          break;
        case 'T':
          paired.push(['T', 'A']);
          break;
        case 'C':
          paired.push(['C', 'G']);
          break;
        case 'G':
          paired.push(['G', 'C']);
          break;
      }
    };

    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }

    return paired;
}


/**
 *  Intermediate code solution:
 */

function pairElement(str) {

    var pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    var arr = str.split("");

    // use the map function to map each character in the array to an array with
    // the character and it's matching pair, creating a 2D array.
    return arr.map(x => [x.pairs[x]]);
}