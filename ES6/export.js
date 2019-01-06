/**
 *  In the previous challenge, we learned about import and how it can be
 *  leveraged to import small amounts of code from large files. In order for
 *  this to work, though, we must utiliza one of the statements that goes with
 *  import, known as export. When we want some code to be usable in another
 *  file, we must export it in order to import it into another file. Like
 *  import, export is a non-browser feature.
 */

//  The following is what we refer to as a named export. With this, we can
//  import any code we export into another file with the import syntax.
//  Here's an example:

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };    // How to export functions
export const foo = "bar";       // How to export variables


//  Alternatively, if you wourld like to compact all your export statements into
//  one line, you can take this approach:

const foo = "bar";
export { capitalizeString, foo };


/**
 *  There is another export syntax you need to know, known as export default.
 *  Usually you will use this syntax if only one value is beign exported from a
 *  file. It is also used to create a fallback value for a file or module.
 *  Since export default is used to declare a fallback value for a module or a
 *  file, you can only have one value be a default export in each module or
 *  file. Additionally, you cannot use export default with var, let or const.
 */

// Here is a quick example of export default:

export default function add(x, y) {
    return x + y;
}