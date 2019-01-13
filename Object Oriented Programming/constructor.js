/**
 *  Define a constructor function:
 * 
 *  Constructors are functions that create new objects. They define properties and
 *  behaviors that will belong to the new object. Think of them as a blueprint for
 *  the creation of new objects.
 * 
 *  Constructors follow a few conventions:
 *  1) They are defined with a capitalized name to distinguish them from other
 *  functions thar are not constructors.
 *  2) They use the keyword 'this' to set properties of the object they will
 *  create. Inside the constructor, 'this' refer to the new object it will create.
 *  3) They define properties and behaviors instead of returning a value as other
 *  functions might.
 */

// This constructor defines a Bird objects with properties name, color and numLegs
// set to Albert, bue and 2, respectively.

function Bird() {
    this.name = "Albert",
    this.color = "blue",
    this.numLegs = 2
}


/**
 *  Use a constructor to create objects:
 * 
 *  Notice that the 'new' operator is used when calling a constructor. This tells
 *  JavaScript to create a new instance of Bird called blueBird.
 */

let blueBird = new Bird();

console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);

// Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
console.log(blueBird.name);