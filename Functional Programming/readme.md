# FCC JavaScript Algorithms and Data Structures
Study repository for JavaScript Algorithms and Data Structures Certification by freeCodeCamp.

## Functional Programming
Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic funfctions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

* Functions are independent from the state of the program or global variables. They only depend on the
arguments passed into them to make a calculation.

* Functions try to limit any changes to the state of the program and avoid changes to the global objects
holding data.

* Functions have minimal side effects in the program

The functional programming software development approach braks a program into small, testable parts.

## Learning about Functional Programming
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

INPUT -> PROCESS -> OUTPUT

Functional Programming is about:

* Isolated Functions: there is no dependence on the state of the program, which includes global variables that are subject to change;

* Pure Functions: the same input always gives the same output;

* Functions with limited side effects: any changes, or mutations, to the state of the program outside the function are carefully controlled.

## Uderstand Functional Programming terminology
Callbacks are the functions that are slipped or passed into another function to decide invocation of that function. You may have seen them passed to other methods, for example in 'filter', the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called 'first class functions'. In JavaScript all functions are first class functions.

The function that take a function as an argument, or return a function as a return value are called 'high order functions'.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or return can be called a 'lambda'.

## Undestand the hazards of using Imperative Code:
Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a 'for loop' that gives exact directions to iterate over the indices of an array.

In constrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using 'for loop' mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic error, 'off by one error' that were convered in the Debugging section.