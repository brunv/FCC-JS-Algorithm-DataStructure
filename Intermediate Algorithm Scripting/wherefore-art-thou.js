/**
 *  Wherefore art thou:
 * 
 *  Make a function that looks through an array of objects (first argument) and
 *  returns an array of all objects that have matching name and value pairs
 *  (seccond argument). Each name and value pair of the source object has to be
 *  present in the object from the collection if it is to be included in the
 *  returned array.
 */

/**
 *  Basic code solution:
 */

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
    //console.log(srcKeys);   // ["last"]

    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/**
 *  Intermediate code solution:
 */

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj) {
        return srcKeys.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}


/**
 *  Advanced code solution:
 */

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj) {
        return srcKeys.map(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }).reduce(function(a, b) {
            return a && b;
        });
    });
}