/**
 *  Make a Person:
 * 
 *  Fill in the object constructor with the following methods below:
 * 
 *  getFirstName() getLastName() getFullName() setFirstName() setLastName()
 *  setFullName()
 * 
 *  Run the tests to see the expected output for each method. The methods that take
 *  an argument must accept onyl one argument and is has to be a string.
 *  These methods must be the only available means of interacting with the object.
 */

var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName("John");
bob.setLastName("Wick");
console.log(bob.getFullName());