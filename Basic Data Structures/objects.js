/**
 *  Add key-value pairs to JavaScript Objects:
 *  At their most basic, objects are just collections of key-value pairs, or in
 *  other words, pieces of data mapped to unique identifiers that we call
 *  properties or keys. 
 */

// Let's take a look at a very simple example:

let FCC_User = {
    username: 'awesome_coder',
    followers: 456,
    points: 6532,
    completedProjects: 15
};

/**
 *  The above code defines an object called FCC_User that has four properties,
 *  each of which map to specific value. If we wanted to know the number of
 *  followers FCC_User has, we can access thath propery by writing:
 */

let userData = FCC_User.followers;
console.log(userData);      // 456

// This is called dot notation. Aternatively, we can also access the property
// witch brackets, like so:

userData = FCC_User['followers'];
console.log(userData);      // 456

// Notice that with bracket notation, we enclosed followers in quotes. This is
// because the brackets actually allow us to pass a variable in to be evaluated
// as a property name 


/**
 *  Modify an Object nested within an object:
 *  Now let's take a look at a slightly more complex object. Object properties
 *  can be nested to an arbitrary depth, and their values can be any type of data
 *  supported by JavaScript, including arrays and even other objects.
 */

let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13
      }
    }
  };

let loggedUsers = nestedObject.data.online;
console.log(loggedUsers);   // 80


/**
 *  Access property names with bracket notation:
 *  In the first object challenge we mentioned the use of bracket notation as a
 *  way to access property values using the evaluation of a variable. For instance,
 *  imagine that our foods object is being used in a program for a supermarket cash
 *  register. We have some function that sets the selectedFood and we want to check
 *  our foods object for the presence of that food. 
 */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

/**
 * This code will evaluate the value stored in the selectedFood variable and return
 *  the value of that key in the foods object, or undefined if it is not present.
 *  Bracket notation is very useful because sometimes object properties are not
 *  known before runtime or we need to access them in a more dynamic way.
 */


/**
 *  Use the delete keyword to remove object properties:
 *  In earlier challenges, we have both added to and modified an object's key-value
 *  pairs. Here we will see how we can remove a key-value pair from an object.
 */

delete foods.apples;
console.log(foods);


/**
 *  Check if an object has a property:
 *  Now we can add, modify, and remove keys from objects. But what if we just
 *  wanted to know if an object has a specific property? JavaScript provides us
 *  with two different ways to do this. One uses the hasOwnProperty() method and
 *  the other uses the in keyword. 
 */

foods.hasOwnProperty('oranges');     // true
'oranges' in foods;                 // true


/**
 *  Iterate through the keys of an object with for...in statement:
 *  Sometimes you may need to iterate through all the keys within an object.
 *  This requires a specific syntax in JavaScript called a for...in statement.
 */

// For our Users object, this could look like:

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};

for (let user in users) {
    console.log(user);  // Alan, Jeff, Sarah, Ryan
};

for (let user in users) {
    if (users[user].online === true) {
      console.log(user + " is online.");
    }
}

// Objects do not maintain an ordering to stored keys like arrays do; thus a
// key position on an object, or the relative order in which it appears, ir
// irrelevnt when referencing or accessing that key.


/**
 *  Generate an array of all object keys with Object.keys():
 *  We can also generate an array which contains all the keys stored in an object
 *  using the Object.keys() method and passing in an object as the argument. This
 *  will return an array with strings representing each property in the object.
 *  Again, there will be no specific order to the entries in the array.
 */

let arrayOfUsers = Object.keys(users);
console.log(arrayOfUsers);      // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]