// Create dog object
var myDog = {
    name: "Bravo",
    age: 7,
    pedigree: false,
    race: "Bulldog"
}

dogsName = myDog.name;
console.log(dogsName);                      // Bravo
search = "age";
console.log(myDog.search);                  // Doesn't work ('undentified')
console.log(myDog[search]);                 // 7

myDog.pedigree = true;                      // Change value of 'pedigree' property to true

myDog.friends = ["Charlie", "Foxtrot"];     // Add 'frieds' property

console.log(myDog);

delete myDog.friends;                       // Delete 'friends' property

console.log(myDog);