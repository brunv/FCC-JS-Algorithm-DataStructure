/**
 *  Use prototype properties to reduce duplicate code:
 * 
 *  Since numLegs will probably have the same values for all instances of Bird, you
 *  essentially have a duplicated numLegs inside each Bird instance.
 *  This may not be an issue when there are only two instances, but imagine if
 *  there are millions of instance. That would be a lot of duplicated variables.
 *  A better way is to use Bird's prototype. The prototype is an object that is
 *  shared among all intances of Bird.
 */

function Bird(name) {
    this.name = name;                   // own property
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

Bird.prototype.numLegs = 3;             // protoype property

console.log(duck.numLegs);
console.log(canary.numLegs);

/**
 *  Now all instances of Bird have the numLegs property. Since all instances
 *  automatically have the properties on the prototype, think of a prototype as
 *  a "recipe" for creating objects.
 */


/**
 *  Iterate over all properties:
 * 
 *  You have now seen two kinds of properties: 'own' properties and 'prototype'
 *  properties. Own properties are defined directly on the object intance itself.
 *  And prototype properties are definedon the prototype.
 *  Here's how you add duck's own properties to the arry ownProps and prototype
 *  properties to the array prototypeProps:
 */

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);


/**
 *  Change the prototype to a new object:
 * 
 *  Up until now you have been adding properties to the prototype individually.
 *  This becomes tedious after more than a few properties. A more efficient way is
 *  to set the prototype to a new object that already contains the properties.
 *  This way, the properties are added all at once.
 */

// Bird.prototype.eat = function() {
//     console.log("nom nom nom");
// }
  
// Bird.prototype.describe = function() {
//     console.log("My name is " + this.name);
// }

Bird.prototype = {
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};


/**
 *  Remember to set the constructor property when changing the prototype:
 * 
 *  There is one crucial side effect of manually setting the prototype to a new
 *  object. It erased the constructor property!!
 *  To fix this, whenever a prototype is manually set to a new object, remeber to
 *  define the constructor property.
 */

Bird.prototype = {
    constructor: Bird,          // define the constructor property
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };


/**
 *  Understand where an object's prototype comes from:
 * 
 *  Just like people inherit genes from their parents, an object inherits its
 *  prototype directly from constructor function that created it. You can show this
 *  relationship with the 'isPrototypeOf' method:
 */

function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));       // true


/**
 *  Understand the protype chain
 * 
 *  All objects in JavaScript (with a few exceptions) have a prototype. Also, an
 *  object's prototype irself is an object.
 *  Because a prototype is an object, a prototype can have its own prototype! In
 *  this case, the prototype of Frog.prototype is Object.prototype.
 */

function Frog(name) {
    this.name = name;
}

console.log(typeof Frog.prototype);         // object

/**
 *  How is this useful? You may recall the 'hasOwnProprety' method. This method is
 *  defined in Object.prototype, which can be accessed by Frog.prototype, which can
 *  be accessed by 'donald'. This is an example of the prototype chain.
 */

let donald = new Frog("Donald");
donald.hasOwnProperty("name");              // true

/**
 *  In this prototype chain, Frog is the 'supertype' for donald, while donald is
 *  the 'subtype'. Objects is a supertype for both Frog and donald.
 *  Object is a supertype for all objects in JavaScript. Therefore, any object can
 *  use the 'hasOwnProperty' method.
 */