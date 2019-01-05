/**
 *      The map() method creates a new array with the results of calling a provided
 *      function on every element in the calling array.
 *      Examples:
 */


//  Mapping an array of number to an array of square roots:

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

// Using map to reformat objects in an array:

var kvArray = [
    {key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}
];

var reformattedArray = kvArray.map(obj => { 
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]


/**
 *      The filter() method creates a new array with all elements that pass the test
 *      implemented by the provided function.
 *      Examples:
 */


 // Using filter to get long words:

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//  Using filter to search in array:

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// Array filters items based on search criteria (query)
const filterItems = (query) => {
  return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};
console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']


/**
 *      The reduce() method executes a reducer function (that you provide) on each
 *      member of the array resulting in a single output value.
 *      Examples:
 */


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15