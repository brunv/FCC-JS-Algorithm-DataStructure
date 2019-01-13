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


/**
 *  Extend constructors to receibe arguments:
 * 
 *  Notice thar all Birds that are created with Bird constructor are automatically
 *  named Albert, are blue in color, and have two legs. It's possible to change the
 *  properties of each bird manually but that would be a lot of work.
 *  To more easily create different objects, you can design your constructor to
 *  accept parameters.
 */

function Dog(name, race) {
    this.name = name;
    this.race = race;
    this.numLegs = 4
}

let myDog = new Dog("Bruce", "Bulldog");

console.log(myDog.name);
console.log(myDog.race);


/**
 *  Verify an object's constructor with instanceof:
 * 
 *  Anytime a constructor function creates a new object, thar objects is said to be
 *  an instace of its constructor. JavaScript gives a convenient way to verify this
 *  with the 'instaceof' operator. This allows you to compare an objects to a
 *  constructor, returning true of false based on whether or not that object was
 *  created with the constructor.
 */

console.log(myDog instanceof Dog);              // true
console.log(blueBird instanceof Dog);           // false


/**
 *  Understand the constructor property:
 * 
 *  There is a special constructor property located on the objects intances that
 *  were created previously. Note that the constructor property is a reference to
 *  the constructor function that created the instance.
 *  The advantage of the constructor property is that it's possible to check for
 *  this property to find what kind of object is is.
 */

console.log(myDog.constructor === Dog);         // true
console.log(blueBird.constructor === Bird);     // true

/**
 *  Since the constructor property can be overwritten (which we'll see later) it's
 *  generally better to use the 'instanceof' method to check the type of an object.
 */