/**
 *  Concise Object Literal declarations using simple fields:
 *  ES6 adds some nice support for easily defining object literals.
 */

// Consider te following code:

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// getMousePosition is a simple function that returns an object containing
// two fields.

/**
 *  ES6 provides the syntatic sugar to eliminate the redundancy of having to
 *  write x: x. You can simply write x once, and it will be converted to x: x
 *  (or something equivalent) under the hood.
 */

 // Here is the same function from above rewritten to use this new syntax:

 const getMousePosition = (x, y) => ({ x, y });