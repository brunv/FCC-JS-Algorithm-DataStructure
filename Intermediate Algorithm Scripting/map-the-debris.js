/**
 *  Map the Debris:
 * 
 *  Return a new array that transforms the element's average altitude into their
 *  orbital periods (in seconds).
 *  The array will contain objects in the format '{name: 'name', avgAlt: avgAlt}'.
 * 
 *  You can read about orbital periods on Wikipedia.
 * 
 *  The values should be rounded to the nearest whole number. The body being
 *  orbited is Earth. The radius of the Earth is 6367.4447 kilometers, and the GM
 *  value of Earth is 398600.4418 km³s-².
 */

/**
 *  Basic code solution:
 */

function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    };
  
    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


/**
 *  Intermediate code solution:
 */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    //Looping through each key in arr object
    for(var prop in arr) {
        //Rounding off the orbital period value
        var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
        //deleting the avgAlt property
        delete arr[prop].avgAlt;
        //adding orbitalPeriod property
        arr[prop].orbitalPeriod = orbitalPer;
    }
  
    return arr;
}


/**
 *  Advanced code solution:
 */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    // Loop through each item in the array arr
    arr.forEach(function(item) {
        // Calculate the Orbital period value
        var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        //Delete the avgAlt property
        delete item.avgAlt;
        //Add orbitalPeriod property
        item.orbitalPeriod = tmp;
    });
    
    return arr;
}