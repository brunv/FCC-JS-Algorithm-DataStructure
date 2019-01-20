/**
 *  Steamroller:
 * 
 *  Flatten a nested array. You must account for varying levels of nesting.
 */

/**
 *  Basic code solution:
 */

function steamrollArray(arr) {
    var flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.

    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }

console.log(steamrollerArray([9, [1, 2], [3, [6,7], 4]]));


/**
 *  Intermediate code solution:
 * 
 *  Using spread operator to concatenate each element of 'arr' with an empty array.
 *  Then use 'Array.some()' method to find out if the new array contains an array
 *  still. If it does, use recursion call 'steamrollArray' again, passing in the
 *  new array to repeat the process.
 */

function steamrollerArray(arr) {
    let flat = [].concat(...arr);
    console.log(flat);
    return flat.some(Array.isArray) ? steamrollerArray(flat) : flat;
}


/**
 *  Advanced code solution:
 * 
 *  First we turn the array to a string, which will give us a string of numbers
 *  separated by comma, double comma if there was an empty array and literal object
 *  text if there was an object, which we can fix it later in our if statement.
 *  We replae the double comma with one, then split back into an array.
 *  Map though the array and fix object values and convert string number to regular
 *  numbers.
 */

function steamrollArray(arr) {
    return arr.toString()
      .replace(',,', ',')       // "1,2,,3" => "1,2,3"
      .split(',')               // ['1','2','3']
      .map(function(v) {
        if (v == '[object Object]') { // bring back empty objects
          return {};
        } else if (isNaN(v)) {        // if not a number (string)
          return v;
        } else {
          return parseInt(v);         // if a number in a string, convert it
        }
      });
  }