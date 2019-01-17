/**
 *  Combine an array into a string using the 'join()' method:
 * 
 *  The 'join' method is used to join the elements of an array together to create
 *  a string. It takes an argument for the delimiter that is used to separate the
 *  array elements in the string.
 */

var arr = ["Hello", "World"];
var string = arr.join(" ");    // "Hello World"

function sentensify(str) {
    return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));


/**
 *  Apply functional programming to convert string to URL Slugs:
 * 
 *  Let's combine what we have learned to solve a practical problem. Many content
 *  management sites (CMS) have the titles of a post added to part of the URL for   
 *  simple bookmarking purposes. For example, if you write a Medium poost titled
 *  "Stop using reduce", it's likely the URL would have some form of the title
 *  string in it (".../stop-using-reduce"). Ypu may have already noticed this on
 *  the freeCodeCamp site.
 */

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.split(/\W/).filter((obj) => obj !== '').join("-").toLowerCase();
    // return title.toLowerCase().trim().split(/\s+/).join('-');
}

var winterComing = urlSlug(globalTitle);
console.log(winterComing);