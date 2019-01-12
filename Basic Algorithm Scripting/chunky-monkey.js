/**
 *  Chunky Monkey
 * 
 *  Write a function that splits an array into groups of 'size' and returns
 *  them as a two-dimensional array.
 */


/**
 *  Basic code solution:
 */

function chunkArrayInGroups(arr, size) {

    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
            temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);

    return result;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);


/**
 *  Intermediate code solution:
 */

function chunkArrayInGroups(arr, size) {

    var arr2 = [];

    for (var i = 0; i < arr.length; i+=size) {
        arr2.push(arr.slice(i , i+size));
    }

    return arr2;
}


/**
 *  Advanced code solutions:
 */

function chunkArrayInGroups(arr, size) {
    
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
    }

    return newArr;
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunkArrayInGroups(arr, size) {

    var newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0,size));
    }   

    return newArr;
}

function chunkArrayInGroups(arr, size) {

    if (arr.length <= size) {
        return [arr];
    }
    else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
    }
}