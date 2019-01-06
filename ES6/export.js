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