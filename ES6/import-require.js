/**
 *  Differences between import and require:
 *  In the past, the function require() would be used to import the functions
 *  and code in external files and modules. While handy,this presents a problem:
 *  some files and modules are rather large, and you may only need certain code
 *  from those external resources.
 *  ES6 gives us a very handy tool known as import. With it, we can choose which
 *  parts of a module or file to load into a given file, sabing time and memory.
 * 
 *  Consider the following example. Imagine that math_array_functions has about
 *  20 functions, but I only need one, countItems, in my current file. The old
 *  require() approach would force me to bring in all 20 functions. With this
 *  new import syntax, I can bring in just the desired function, like so:
 */

import { countItems } from "math_array_functions"

// We can also import variables the same way!

// There are a few ways to write an import statement, but this is a very
// common use-case:
// import { function } from "file_path_goes_here"

/**
 *  NOTES:
 *  The whitespace surrounding the functions inside the curly braces is a best
 *  practice - it makes it easier to read the import statement.
 *  In most cases, the file path requires a './' before it; otherwise, node will
 *  look in node_modules directory first trying to load it as a dependency.
 */


/**
 *  Use * to import everything from a file:
 *  Suppose you have a file that you wish to import all of its contents into the
 *  current file. This can be done with the import * syntax.
 *  You may use any name following the 'import * as' portion of the statement.
 *  In order to utilize this method, it requires an object that receives the
 *  imported balues. From here you will use dot notation to call imported values.
 */

// Here's an example where the contents of a file name "math_functions" are
// imported into a file in the same directory:

import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);

// And breaking down the code:
// import * as obj_with_name_of_your_choice from "file_path_goes_here";
// obj_with_name_of_your_choice.imported_function;

