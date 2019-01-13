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
    this.name = name;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

Bird.prototype.numLegs = 3;

console.log(duck.numLegs);
console.log(canary.numLegs);

/**
 *  Now all instances of Bird have the numLegs property. Since all instances
 *  automatically have the properties on the prototype, think of a prototype as
 *  a "recipe" for creating objects.
 */