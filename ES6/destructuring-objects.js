/**
 *  Use Destructuring Assignment to assign variables from objects:
 *  We saw earlier how spread operator can effectively spread the contents of
 *  the array. We can do something similar with objects as well. Destructuring 
 *  assignment is special syntax for neatly assigning values taken directly
 *  from an object to variables.
 */


// Consider this following ES5 code:

var voxel = {x: 3.6, y: 7.4, z: 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// Here's the same assignment statement with ES6 desctructuring syntax:

const { x, y, z } = voxel;

// If instead you want to store the values of voxel.x into a, voxel.y into b,
// and voxel.z into c, you have that freedom as well:

const { x:a, y:b, z:c } = voxel;

// You may read it as "get the field x and copy the valur into a", and so on.


/**
 *  User Destructuring Assignment to assign variables from nested objects:
 *  We can similarly desctructure nested objects into variables.
 */

// In the exemple below, the variable start is assigned the value of a.start,
// which is also an object.

const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9}
};

const { start: { x: startX, y: startY }} = a;
console.log(startX, startY);       // 5, 6


/**
 *  Use ES6 desctructuring Assignment to assign variables from arrays:
 *  ES6 makes destructuring arrays as easy as destructuring objects.
 *  One key difference between the spread operator and array desctructuring is
 *  that the spread operator unpacks all contents of an array into a 
 *  comma-separated list. Consequently, you cannot pick or choose which elements
 *  you want to assign to variables.
 */

// Destructuring an array lets us do exactly that:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);          // 1, 2

// We can also access the value at any index in an array with destructuring by
// using commas to reach the desired index:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);       // 1, 2, 5


/**
 *  Use Destructuring Assignment with the Rest Operator to reassign array 
 *  elements:
 *  In some situations involving array destructuring, we might want to collect
 *  the rest of the elements into a separate array.
 */

// The result is similar to Array.prototype.slice(), as shown below:
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);      // 1, 2
console.log(arr);       // [3, 4, 5, 6, 7]

// The rest element only work correctly as the last vaiable in the list.
// As in, you cannot use the rest operator to catch a subarray that leaves out
// last element of the original array.


/**
 *  Use Destructuring Assignment to pass an object as a function's parameters:
 *  In some cases, you can destructure the object in a function argument itself.
 */

// Consider the code below:
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables...
}

// This effectively destructures the object into the function. This can also be
// done inplace:
const profileUpdate = ({ name, age, nationality, location }) => {
    // do something with these variables...
}

// This has the added benefit of not having to manipulate an entire object in a
// function; only the fields that are needed are copied inside the function.