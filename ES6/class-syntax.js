/**
 *  Use Class Syntax to define a Constructor Function:
 *  ES6 provides a new syntax to help create objects, using the keyword class.
 *  This is to be noted, that the class syntax is just a syntax, and not a
 *  full-fledged class based implementation of object oriented paradigm.
 */

// In ES5, we usually define a constructor function, and use the new keyword
// to instantiate an object:
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle('Jupiter');

// The class syntax simply replaces the constructor function creation:
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

// Notice that class keyword declares a nwe function, and a constructor was
// added, which would be invoked when new is called - to create a new object.