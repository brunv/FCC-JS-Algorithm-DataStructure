/**
 *  Use gatters and setters to control acess to an object:
 *  You can obtain values from an object, and set a value of a property within
 *  an object.
 *  These are classically called getters and setters.
 *  Getter functions are meant to simply return (get) the value of an object's
 *  private variable to the user without the user directly accessing the private
 *  variable.
 *  Setter functions are meant to modify (set) the value of an object's private
 *  variable based on the value passed into setter function. This change could
 *  involve calculations, or even overwriting the previous value completely.
 */

class Book {
    constructor(author) {
        this._author = author;
    }

    //getter
    get writer() {
        return this._author;
    }

    //setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

const lol = new Book('anonymous');
console.log(lol.writer);        // anonymous

lol.writer = 'wut';
console.log(lol.writer);        // wut

/**
 *  Notice that syntax we are using to invoke the getter and setter - as if they
 *  are not even functions;
 *  Getters and setters are important, because they hide internal implementation
 *  details.
 */