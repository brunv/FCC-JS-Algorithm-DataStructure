/**
 *  Where do I belong
 * 
 *  Return the lowest index at which a value should be inserted into an array once
 *  it has been sorted. The returned value should be a number.
 */


/**
 *  Basic code solutions:
 */

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
  
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }
  
    return arr.length;
}


function getIndexToIns(arr, num) {
    var count = 0; 

    for (var i=0;i<arr.length;i++) {
        if (num>arr[i]) {
            count++;
        }
    } // counts how many array numbers are smaller than num
      return count; // the above equals num's position in a sorted array
  }


function getIndexToIns(arr, num) {

    arr.sort(function(a, b) {
        return a - b;
    });
  
    var i = 0;
    while (num > arr[i]) {
        i++;
    }
  
    return i;
}


/**
 *  Intermediate code solution:
 */

function getIndexToIns(arr, num) {
    // sort and find right index
    var index = arr.sort((curr, next) => curr > next)
      .findIndex((currNum) => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
}


/**
 *  Advanced code solution:
 */

function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([40, 60], 50);