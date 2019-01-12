/**
 *  Slice and Splice
 * 
 *  You're given two arrys and an index. Use the array methods 'slice' and 'splice'
 *  to copy each element of the first array into the second array, in order.
 *  Begin inserting elements at index n of the second array. Return the result
 *  array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
    let mixedArray = arr2.slice();
    console.log(mixedArray);

    for (let i=0; i<arr1.length; i++) {
        mixedArray.splice(n, 0, arr1[i]);
        // n is the index to insert
        // 0 is the number of elements to delete
        // arr1[i] is the element to insert
        n++;
    }

    return mixedArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);