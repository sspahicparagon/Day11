var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

    myNewPets.push("Bird", "Fish");
    console.log(myNewPets);
    var firstPet = myNewPets.shift();
    console.log(myNewPets);
    var lastPet = myNewPets.pop();
    console.log(myNewPets);
    myNewPets.unshift("Lion");
    console.log(myNewPets);

    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;