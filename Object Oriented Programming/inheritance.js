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