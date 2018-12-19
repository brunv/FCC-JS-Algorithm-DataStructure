# FCC JavaScript Algorithms and Data Structures
Study repository for JavaScript Algorithms and Data Structures Certification by freeCodeCamp.

## ES6 (ES2015)
ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.

# Differences Between the var and let
One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.

A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. So unlike var, when using let, a variable with the same name can only be declared once. Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions.

# Scopes of the var and let
When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function. The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.