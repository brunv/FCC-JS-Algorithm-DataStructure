/**
 *  Return part of an array using slice() method:
 * 
 *  The 'slice' method return a copy of certain elements of an array. It can take
 *  two arguments, the first gives the index of where to begin the slice, the 
 *  second is the index for where to end the slice (and it's non-inclusive). If the
 *  arguments are not provided, the default is to start at the beginning of the
 *  array through the end, which is an easy way to make a copy of the entire array.
 *  The 'slice' method does not mutate de original array, but returns a new one.
 */

function sliceArray(animal, beginSlice, endSlice) {
    return animal.slice(beginSlice, endSlice);
}

var inputAnim = ["cat", "dog", "tiger", "zebra", "ant"];

console.log(sliceArray(inputAnim, 1, 3));


/**
 *  Remove elements from an array using slice() intead of splice():
 * 
 *  A common pattern while working with array is when you want to remove items
 *  and keep the rest of the array. JavaScript offer the 'splice' method for this,
 *  which takes arguments for the index of where to start removing items, then the
 *  number of items to remove. If the secong argument is not provided, the default
 *  is to remomve items through the end. However, the 'splice' method mutates the
 *  original array it is called on.
 * 
 *  As we saw in the last section, the 'slice' method does not mutate the original
 *  array, but returns a new one which can be saved into a variable. Recall that
 *  the 'slice' method takes two arguments for the the indices to begin and end
 *  the slice (the end in non-inclusive), and returns those items in a new array.
 *  Using the 'slice' method instead of 'splice' helps to avoid any array-mutating
 *  side effects.
 */

function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));


/**
 *  Combine two arrays using the concat method:
 * 
 *  Concatenation means to join items end to end. JavaScript offers the 'concat'
 *  method for both strings and arrays that work in the same way. For arrays, the
 *  method is called on one, then another array is provided as the argument to
 *  'concat', shich is added to the end of the first array. It returns a new array
 *  and does not mutate either of the original arrays.
 */

function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));


/**
 *  Add elements to the end of an array using 'concat' instead of 'push':
 * 
 *  Functional programming is all about creating and using non-mutating functions.
 *  The last chapter introduced 'concat' method as a way to combine arrays into a
 *  new one without mutating the original arrays. Compare 'concat' to the 'push'
 *  method. 'Push' adds an item to the end of the same arrays its called on, which
 *  mutates that array.
 *  Concat offers a way to add new items to the end of an array without any
 *  mutating side effect.
 */

function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5, 6];

console.log(nonMutatingPush(first, second));


/**
 *  Use the reduce() method to analyze data:
 * 
 *  Array.prototype.reduce(), or simply 'reduce()', is the most general of all
 *  array operations in JavaScript. You can solve almost any array processing
 *  problem using the 'reduce' method.
 * 
 *  This is not the case with the 'filter' and 'map' methods since they do not
 *  allow interaction between two different elements of the array. For example, if
 *  you want to compare elements of the array, or add them together, 'filter' and
 *  'map' could not process that.
 * 
 *  The 'reduce' method allow for more general forms of array processing, and it's
 *  possile to show both 'filter' and 'map' can be derived as a special apllication
 *  of 'reduce'.
 */

