/**
 *  Understand own properties:
 * 
 *  In the following example, the Bird constructor defines two properties: 'name'
 *  and 'numLegs'. Both are called own properties, because they are defined
 *  directly on the instance object. That means that each instance has its own
 *  separate copy of these properties.
 */

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);      // ["name", "numLegs"]