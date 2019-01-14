/**
 *  Use a Mixin to add common behavior between unrelated objects:
 * 
 *  As you have seen, behavior is shared thorugh inheritance. However, there are
 *  cases when inheritance is no the best solution. Inheritance does not work well
 *  for unrelated objects like Bird and Airplane. They can both fly, but a Bird is
 *  not a type of Airplane and vice versa.
 * 
 *  For unrelated objetcs, it's better to use mixins. A mixin allows other objects
 *  to use a collection of funcions.
 */

let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, woooosh!");
    }
};

// The flyMixin takes any object and gives it the fly method.

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPasengrs: 524
};

flyMixin(bird);
flyMixin(plane);

/**
 *  Here bird and plane are passed into flyMixin, which then assigns the fly
 *  function to each object. Now bird and plane can both fly.
 *  Note how the mixin allows for the same fly method to be reused by unrelated
 *  objects bird and plane.
 */

bird.fly();
plane.fly();