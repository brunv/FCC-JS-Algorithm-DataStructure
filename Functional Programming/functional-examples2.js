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
 *  possible to show both 'filter' and 'map' can be derived as a special
 *  apllication of 'reduce'.
 */

// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
   },
   {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
   }
];

// Use 'reduce' to find the average IMDB rating of the movies directed by Nolan.
var averageRating = watchList
    .filter(x => x.Director === "Christopher Nolan")
    .map(x => Number(x.imdbRating))
    .reduce((x1, x2) => x1 + x2) / watchList.filter( x => x.Director === "Christopher Nolan").length;

console.log(averageRating); 