/**
 *  Use an array to store a collection of data:
 *  The below is an example of the simplest implementation of an array data
 *  structure. This is known as one-dimensional array, meaning it only has one
 *  level, or that it does not have any other arrays nested within it. Notice
 *  it contains booleans, strings, and numbers, among other valid JS data types.
 */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray);       // logs 7

/**
 *  A more complex implementation of an array can be seen below. This is know
 *  as a multi-dimensional array, or an array that contains other arrays. Notice
 *  that this array contains JS Objects, for now, all you need to know is that
 *  arrays are also capable of storing complex objects.
 */

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];


/**
 *  Access an array's contents using bracket notation:
 *  The fundamental feature of any data structure is, of course, the ability to
 *  not only store data, but to be able to retrieve that data on command. So, now
 *  that we've learned how to create an array, let's begin to think about how we
 *  can access that array's information.
 */

let ourArray = ["a", "b", "C" ];

/**
 *  In an array, each array item has an index. However, it is important to note,
 *  that JavaScript arrays are zero-indexed, meaning that the first element of
 *  an array is actually at the zeroth position, not the first.
 * 
 *  In order to retrieve an element from an array we can enclose an index in
 *  brackets and append it to the end of an array, or more commonly, to a
 *  variable which references an array object. This is known as bracket notation.
 */

// For example, if we want to retrieve the "a" from ourArray and assign it to a
// variable, we can do so with the following code:

let ourVariable = ourArray[0];

// In addition to accessing the value associated with an index, you can also set
// an index to a value using the same notation:

ourArray[1] = "not b anymore";
console.log(ourArray);      // ["a", "not b anymore", "c"]


/**
 *  Add items to an array with push() and unshift():
 *  An array's length, like the data types it can contain, is not fixed. Arrays
 *  can be defined with a length of any number of elements, and elements can be
 *  added o removed over time; in other words, arrays are mutable. We will now
 *  look at two methods with which we can programmatically modify an array:
 *  Array.push() and Array.unshift().
 * 
 *  Both methods take one or more elements as parameters and add those elements
 *  to the array method is being called on; the push() method adds elements to
 *  the end of an array, and unshift() adds elements to the beginning.
 */

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals);    // ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
console.log(romanNumerals);    // ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']


/**
 *  Remove items from an array with pop() and shift():
 *  Both push() and unshift() have corresponding methods thar are nearly functional
 *  opposites: pop() and shift(). As you may have guessed by now, instead of
 *  adding, pop() removes an element from the end of an array, while shift()
 *  removes an element from the beginning. The key difference between pop() and
 *  shift() and their cousins, is that neither method takes parameters, and each
 *  only allows an array to be modified by a single element at a time.
 */

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
console.log(greetings);     // ['whats up?', 'hello']

greetings.shift();
console.log(greetings);     // ['hello']

// We can also return the value of the removed element with either method:

let popped = greetings.pop();
console.log(popped);        // 'hello'
console.log(greetings);     // []


/**
 *  Remove Items using splice():
 *  We've learned how to remove elements from the beginning and end of arrays
 *  using shift() and pop(), but what if we want to remove an element from
 *  somewhere in the middle? Or remove more than one element at once? Well,
 *  that's where splice() comes in. splice() allows us to do just that: remove
 *  any number of consecutive elements from anywhere in an array.
 *  
 *  splice() can take up to 3 parameters, but for now, we'll focus on just the
 *  first 2. The first two parameters of splice() are integers which represent
 *  indexes, or positions, of the array that splice() is being called upon.
 *  splice()'s first parameter represents the index on the array from which to
 *  begin removing elements, while the second parameter indicates the number of
 *  elements to delete.
 */

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
console.log(array);     // ['today', 'was', 'great']

// splice() not only modifies the array it's being called on, but it also returns
// a new array containing the value of the removed elements:

let array2 = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array2.splice(3, 2);
console.log(newArray);  // ['really', 'happy']


/**
 *  Add items using splice():
 *  We can go one step further with splice() - in addition to removing elements,
 *  we can use that third parameter, which represents one or more elements, to
 *  add them as well. This can be incredibly useful for quicly switching out an
 *  element, or a set of elements, for another.
 */

// For instance, let's say you're storing a color scheme for a set of DOM elements
// in a an array, and want to dynamically change a color based on some action:

function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332337');
console.log(colorScheme);   // ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']


/**
 *  Copy and array items using slice():
 *  The next method is slice(), which rather than modifying an array, copies,
 *  or extracts, a given number of elements to a new array, leaving the array
 *  it is called upon untouched. slice() takes only 2 parameters - the first is
 *  the index at which to begin extraction, and the second is the index at which
 *  to stop extraction. The extraction will occur up to, but not including the
 *  element at this index.
 */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1,3);
console.log(todaysWeather);     // ['snow', 'sleet']
console.log(weatherConditions); // ['rain', 'snow', 'sleet', 'hail', 'clear']

// We can copy the whole array by passing no arguments to slice()


/**
 *  Copy and array with the Spread Operator:
 *  While slice() allows us to be selective about what elements of an array to
 *  copy, among several other useful tasks, ES6's new Spread Operator allows us
 *  to easily copy all of an array's elements, in order, with a simple and highly
 *  readable syntax. The Spread syntax simply looks like this: ...
 */

// For example, we can use the spread operator to copy and array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);                 // [true, true, undefined, false, null]


/**
 *  Combine arrays with the Spread Operator:
 *  Another huge advantage of the Spread Operator, is the ability to combine
 *  arrays, or to insert all the elements of one array into another, at any index.
 *  With more traditional syntaxes, we can concatenate arrays, but this only
 *  allows us to combine arrays at the end of one, and at the start of another.
 */

// Spread syntax makes the following operation extremely simple:

let thisArray2 = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray2 = ['basil', 'cilantro', ...thisArray2, 'coriander'];
console.log(thatArray2);
// ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


/**
 *  Check for the presence of an element with indexOf():
 *  Since arrays can be changed, or mutated, at any time, there's no guarantee
 *  about where a particular piece of data will be on a given array, or if that
 *  element even still exists. Luckily, JavaScript provides us with another
 *  built-in method, indexOf(), that allows us to quickly and easily check for
 *  the presence of an element on an array. indexOf() takes an element as a
 *  parameter, and when called, it returns the position, or index, of that
 *  element, or -1 if the element does not exist on the array.
 */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');        // returns -1
fruits.indexOf('oranges');      // returns 2
fruits.indexOf('pears');        // returns 1, the first index at which the elements exists


/**
 *  Iterate through all an array's items using for loops:
 *  Sometimes when working with arrays, it is very handy to be able to iterate
 *  through each item to find one or more elements that we might need, or to
 *  manipulate an array based on which data items meet a certain set of criteria.
 *  JavaScript offers several built in methods that each iterate over arrays in
 *  slightly different ways to achieve different results (such as every(),
 *  forEach(), map(), etc.), however the technique which is most flexible and
 *  offers us the greatest amount of control is a simple for loop.
 */

function greaterThanTen(arr) {
    let newArr = [];

    for  (let i=0; i<arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);   // [12, 14, 80]


/**
 *  Create complex multi-dimensional arrays:
 *  One of the most powerful features when thinking of arrays as data structures,
 *  is that arrays can contain, or even be completely made up of other arrays.
 *  We have seen arrays that contain arrays in previous challenges, but fairly 
 *  simple ones. However, arrays can contain an infinite depth of arrays that can
 *  contain other arrays, each with their own arbitrary levels of depth, and so
 *  on. In this way, an array can very quickly become very complex data structure,
 *  known as a multi-dimensional, or nested array. 
 */

let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
      [
        ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
      ],
      [
        [
          ['deepest-est?'] // an array nested 5 levels deep
        ]
      ]
    ]
];

// While this example may seem convoluted, this level of complexity is not unheard
// of, or even unusual, when dealing with large amounts of data.

console.log(nestedArray[2][1][0][0][0]);    // deepest-est?