/**
 *  Create a Basic Object:
 * 
 *  Think about things people see everyday, like cars, shops, and birds. These are
 *  all objects: tangible things people can observe and interact with.
 *  The qualities, or properties, define what makes up an object. Note that similar
 *  objects share the same properties, but many have different values for those
 *  properties.
 *  Objects in JavaScript are used to model real-world objects, giving them
 *  properties and behavior just like their real-world counterparts.
 */

// Here's an example using these concepts to create a duck object:

let duck = {
    name: "Aflac",
    numLegs: 2
};


/**
 *  Use Dot Notation to access the properties of an object:
 * 
 *  Dot notation is used on the object name, followed by the name of the property.
 */

console.log(duck.name);
console.log(duck.numLegs);


/**
 *  Create a Method on an object:
 * 
 *  Objects can have a special type of property, called a method.
 *  Methods are properties thar are functions. This adds different behavior to an
 *  object.
 */

let dog = {
    name: "Captain",
    numLegs: 4,
    sayName: function () {
        return "The name of this dog is " + dog.name + ".";
    }
};

console.log(dog.sayName());


/**
 *  Make code more reusable with the 'this' keyword:
 * 
 *  While the above method is a valid way to access the object's  property, there
 *  is a pitfall here. If the variable name changes, any code referencing the
 *  original name would need to be updated as well. A way to avoid there issues is
 *  with the 'this' keyword.
 */

 let cat = {
     name: "Anthony",
     numLegs: 4,
     sayName: function() {
         return "The name of this cat is " + this.name + ".";
     }
 };

 console.log(cat.sayName());