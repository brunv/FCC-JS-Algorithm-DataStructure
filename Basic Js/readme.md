# FCC JavaScript Algorithms and Data Structures
Study repository for JavaScript Algorithms and Data Structures Certification by freeCodeCamp.

## Basic of JavaScript

### Variables
JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

In JavaScript all variables and function names are case sensitive. This means that capitalization matters. Best Practice: Write variable names in JavaScript in camelCase.

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

### Strings
In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\\) in front of the quote.

Unlike some other programming languages, single and double quotes work the same in JavaScript. The reason why you might want to use one type of quote over the other is if you want to use both in a string. 

In JavaScript, String values are immutable, which means that they cannot be altered once created.

### Data Types
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

### Operators
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion. If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

### Statements
If you have many options to choose from, use a switch statement. case values are tested with strict equality (===). In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found.

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.

### Object Oriented Programming
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array. Dot notation is what you use when you know the name of the property you're trying to access ahead of time. If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.