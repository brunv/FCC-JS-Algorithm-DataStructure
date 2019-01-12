/**
 *  Return true if the string in the first element of the array contains all of
 *  the letters of the string in the second element of the array.
 */

function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split('');
    let arr2 = arr[1].toLowerCase().split('');
    let count = 0;

    for (let i=0; i<arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) != -1) {
            count++;
        }
    }

    if (count == arr2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(mutation(["Alien", "line"]));
console.log(mutation(["hello", "Hello"]));


/**
 *  Basic code solution (procedural approach):
 */

function mutation(arr) {

    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();

    for (var i=0; i<test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }

    return true;
}


/**
 *  Intermediate code solution (declarative approach):
 *  Grab the second string, lowercase and turn it into an array; then make sure
 *  every one of its letters is a part of the lowercased first string.
 *  'every' will basically give you letter by letter to compare, which we do by
 *  using 'indexOf()' on the first string. 'indexOf' will give you -1 if the
 *  current letter is missing. We check that no to be the case, for if this
 *  happens even once 'every' will be false.
 */

function mutation(arr) {
    return arr[1].toLowerCase()
      .split('')
      .every(function(letter) {
        return arr[0].toLowerCase()
          .indexOf(letter) != -1;
      });
}