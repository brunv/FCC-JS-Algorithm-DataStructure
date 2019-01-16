/**
 *  Use the 'map()' method to extract data from an array:
 * 
 *  So far we have learned to use pure functions to avoid side effects in a
 *  program. Also, we have seen the value in having a function only depend on its
 *  input arguments. This is only the beginning. As its name suggests, functional
 *  programming is centered around a theory of functions.
 * 
 *  It would make sense to be able to pass them as arguments to other functions,
 *  and return a function from another funcion. Function are considered 'first
 *  class objects' in JavaScript, which means they can be used like any other
 *  object. They can be saved in variables, stored in objects, or passed as
 *  function arguments.
 * 
 *  Let's start with some simples array functions, which are methods on the array
 *  object prototype. In this section we are looking at Array.prototype.map(), or
 *  more simply 'map'.
 * 
 *  Remember that the 'map' method is a way to iterate over each item in an array.
 *  It creates a new array (without changing the original one) after applying a
 *  callback function to every element.
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

var rating = [];

rating = watchList.map( (item) => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));

console.log(rating); 


/**
 *  Implement 'map()' on a Protoype:
 * 
 *  As you have seen from applying Array.prototype.map(), or simply 'map()' ealier,
 *  the 'map' method returns an array of the same length as the one it was called
 *  on. It also doesn't alter the original array, as long as its callback function
 *  doesn't.
 * 
 *  In other words, 'map' is a pure function, and its output depends solely on its
 *  inputs. Plus, it takes another function as its argument.
 * 
 *  It would teach us a lot about 'map' to try to implement a version of it that
 *  behaves exactly like the Array,prototype.map() with a 'for loop' or
 *  Array.prototype.forEach().
 * 
 *  Note: A pure function is allowed to alter local variables defined within scope,
 *  although, it's preferable to avoid that as well.
 */

var s = [23, 65, 98, 4];        // global array

Array.prototype.myMap = function(callback) {
    var newArray = [];

    this.forEach(a => newArray.push(callback(a)));
    // same as:
    // this.forEach(function(item) {
    //     newArray.push(callback(item));
    // });

    return newArray;
};

var new_s = s.myMap(function(item) {
    return item * 2;
});
console.log(new_s);


/**
 *  Use the 'filter()' method to extract data from an array:
 * 
 *  Another useful array function is Array.prorotype.filter(), or simply 'filter'.
 *  The filter() method returns a new array which is at most as long as the
 *  original array, but usually has fewer items.
 * 
 *  Filter doesn't alter the original array, just like 'map'. It takes a callback
 *  function that applies the logic inside the callback on each element of the
 *  array. If an element return 'true' based on the creteria in the callback
 *  function, then it is included in the new array.
*/

// With the previous 'watchList' array, use a combination of 'filter' and 'map'
// to returna new array of object with only Title and Rating keys, but where
// 'imdbRating' is greater than or equal to 8.0:

var filteredList = watchList.map( function(e) {
    return {
        title: e["Title"],
        rating: e["imdbRating"]
    }
}).filter((e) => e.rating >= 8);

console.log(filteredList);