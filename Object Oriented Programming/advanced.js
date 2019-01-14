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


/**
 *  Use Closure to protect properties within an object from being modified
 *  externally:
 * 
 *  In the previous sections, bird had a public property 'name'. It is considered
 *  public because it can be accessed and changed outside of bird's definition.
 *  Therefore, any part of your code can easily change the name of bird to any
 *  value. Think about thing like passwrds and back accounts being easily
 *  changeable by any part of yout codecabe. That could cause a lot of issues.
 * 
 *  The simplest way to make properties private is by creating a variable within
 *  the constructor function. This changs the scope of that variable to be within
 *  the constructor function versus available globally. This way, the property can
 *  only be accessed and changed by methods also within the constructor function.
 */

function Bird() {
    let hatchedEgg = 10;        // private property

    this.getHatchedEggCount = function() {
        // publicly available (getter)
        return hatchedEgg;
    };
}

let ducky = new Bird();
console.log(ducky.getHatchedEggCount());     // 10

/**
 *  Here getHatchedEggCount is a privileged method, because it has access to the
 *  private variabe hatchedEgg. This is possible because hatchedEgg is declared in
 *  the same context as getHatchedEggCount. In JavaScript, a function always has
 *  access to the context in which it was created. This is called 'closure'.
 */


/**
 *  Understand the Immediately Invoked Function Expression (IIFE):
 * 
 *  A common pattern in JavaScript is to execute a function as soon as it is
 *  declared.
 *  Note that the function has no name and is not stored in a variable. The two
 *  parentheses () at the end of the function expression cause it to be immediately
 *  executed or invoked. This patterns is known as 'immediately invoked function
 *  expression' or IIFE.
 */

(function () {
    console.log("Chirp, chirp!");
})();   //this is an anonymous function


/**
 *  Use an IIFE to create a Module:
 * 
 *  An immediately invoked function expression is often used to group related
 *  functionality into a single object or module.
 * 
 *  Note that you have an IIFE that return an object 'motionModule'. This returned
 *  object contains all of the mixin behavior as properties of the object.
 * 
 *  The advantage of the module pattern is that all the motion behaviors can be
 *  packaged into a single object that can then be used by other parts of your
 *  code.
 */

// For example, we previously defined two mixins:

function glideMixin(obj) {
    obj.glide = function() {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
}

// We can group this mixins into a module as follows:

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function() {
                console.log("Gliding on the water!");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function() {
                console.log("I believe I can fly!");
            };
        }
    }
}) ();      // these two parentheses cause the function to be immediately invoked!

motionModule.glideMixin(duck);
duck.glide();