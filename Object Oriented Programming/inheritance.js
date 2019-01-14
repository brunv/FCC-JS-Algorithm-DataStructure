/**
 *  Use inheritance so you don't repeat yourself:
 * 
 *  There's a principle in programming called Don't Repeat Yourself (DRY). The
 *  reason repeated code is a problem is because any change requires fixing code
 *  in multiple places. This means more work for programmers and more room for
 *  errors.
 */

// Notice in the example below that the 'describe' method is shared by Bird and Dog

Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// The describe method is repeated in two places. The code can be edited to follow
// the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// Since Animal includes the describe method, you cam remove it frm Bird and Dog:

Bird.prototype = {
    constructor: Bird
};
  
Dog.prototype = {
    constructor: Dog
};


/**
 *  Inherit beavior from a Supertype:
 * 
 *  In the previous section, we created a supertype called Animal that defined
 *  behavior shared by all animals:
 */

function Animal() { }
Animal.prototype.eat = function() {
console.log("nom nom nom");
};

/**
 *  This and the next section will cover how to reuse Animal's methods inside Bird
 *  and Dog without defining them again. It uses a technique called inheritance.
 *  This section covers the first step: make an instance of the supretype (or
 *  parent). You already know on way to create as instance of Animal using the
 *  new operator:
 */

let animal = new Animal();

/**
 *  There are some disadvantages when using this syntax for inheritance, which are
 *  too complex for the scope of this section. Instead, here's an alternative
 *  approach without those disadvantages:
 */

let animal = Object.create(Animal.prototype);

/**
 *  Object.create(obj) creates a new object, and sets obj as the new object's
 *  prototype. Recall that the prottype is like the "recipe" for creating an
 *  object. By setting the prototype of animal to be Animal's prototype, you are
 *  effectively giving the animal instance the same "recipe" as any other instance
 *  of Animal.
 */

animal.eat();               // "nom nom nom"
animal instanceof Animal;   // true


/**
 *  Set the child's prototype to an instance of the parent:
 * 
 *  In the previous challenge you saw the first step for inheriting behavior from
 *  the supertype (or parent) Animal: making a new instace of Animal.
 *  This section covers the next step: set the prototype of the subtype (or child)
 *  - in this case, Bird - to be an instance of Animal.
 *  Remember that the prototype is like the "recipe" for creating an object. In a
 *  way, the recipe for Bird now includes all the key "ingretiens" of Animal.
 */

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");
duck.eat();             // "nom nom nom"


/**
 *  Reset an inherited constructor property:
 * 
 *  When an object inherits its prototype from another object, it also inherits
 *  the supertype's constructor property.
 */

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor;           // function Animal() {...}

/**
 *  But duck and all instances of Bird should show that they were constructed by
 *  Bird and not Animal. To do so, you can manually set Bird's constructor property
 *  to the Bird object.
 */

Bird.prototype.constructor = Bird;
duck.constructor;           // function Bird() {...}


/**
 *  Add methods after inheritance:
 * 
 *  A constructor function that inherits its prototype object from a supertype
 *  constructor function can still have its own methods in addition to inherited
 *  methods.
 */

// For example, Bird is a contructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

/**
 *  In addition to what is inherited from Animal, you want to add behavior that is
 *  unique to Bird objects. Here, Bird will get a fly() function. Functions are
 *  added to Bird's prototype the same way as any constructor function.
 */

Bird.prototype.fly = function() {
    console.log("I'm flying!");
};

// Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat();
duck.fly();