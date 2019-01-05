/**
 *  Create strings using Template Literals:
 *  A new feature of ES6 is the Template Literal. This is a special type of
 *  string that makes creating complex strings easier.
 *  Template Literals allows you to create multi-line strings and to use
 *  string interpolation features to create strings.
 */

// Consider the code below:

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation:

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

/**
 *  Firstly, the example uses backticks (`), not quotes, to wrap the string.
 *  Secondly, notice that the string is multi-line, both in the code and the
 *  output. This saves inserting \n within strings.
 */

/**
 *  The ${variable_name} syntax used above is a placeholder. Basically, you
 *  wont have to use concatenation with the + operator anymore. Similarly,
 *  you can include other expressions in your string literal, for example
 *  ${a + b}.
 */