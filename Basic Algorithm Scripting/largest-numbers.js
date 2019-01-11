/**
 *  Return largest numbers in arrays:
 *  Return an array consisting of the largest number from each provided sub-array.
 *  For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

/**
 *  Basic code solution (procedural approach):
 */

function largestOfFour(arr) {
    let largestNumbers = [];

    for (let i=0; i<arr.length; i++) {
        let largest = -10000;

        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }

        largestNumbers.push(largest);
    }
    return largestNumbers;
}
  
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));


/**
 *  Intermediate code solution (declarative approach):
 * 
 *  1) We map al items within the main array to a new array using map() and return
 *  this array as the final result.
 *  2) Within each inner array, we reduce its contents down to a single value using
 *  reduce().
 *  3) The callback function passed to the reduce method takes the previous value
 *  and compares the two values.
 *  4) If the current value is higher than the previous value we set it as the new
 *  previous value for comparison with the next item whitin the array or returns
 *  the map method callback if it's the last item.
 */

function largestOfFour(arr) {
    return arr.map(function(group){
      return group.reduce(function(prev, current) {
        return (current > prev) ? current : prev;
      });
    });
}


/**
 *  Advanced code solution (declarative approach):
 */

function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}