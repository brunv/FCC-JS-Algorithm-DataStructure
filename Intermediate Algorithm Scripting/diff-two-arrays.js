/**
 *  Diff two arrays:
 * 
 *  Compare two arrays and return the new array with any items only found in one of
 *  the two given arrays, but no both. In other words, return the symmetric
 *  difference of the two arrays.
 */

/**
 *  Basic code solution (imperative):
 */

function diffArray(arr1, arr2) {
    var newArray = [];

    function onlyInFirst(first, second) {
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArray.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArray;
}

console.log(diffArray([1,2,3,5], [1,2,3,4,5]));


/**
 *  Intermediate code solution (declarative):
 */

function diffArray(arr1, arr2) {
    // creates new concatenated array and then filter
    return arr1
        .concat(arr2)
        .filter( item => !arr1.includes(item) || !arr2.includes(item));
}


/**
 *  Advanced code solution (declarative):
 */

function diffArray(arr1, arr2) {
    return arr1
        .filter( item => !arr2.includes(item))
        .concat( arr2.filter( item => !arr1.includes(item)));
}

function diffArray(arr1, arr2) {
    // concatenates the intire copy of the two new arrys returned from diff()
    return [
        ...diff(arr1, arr2),
        ...diff(arr2, arr1)
    ];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}