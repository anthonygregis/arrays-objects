var name = 'Anthony';
console.log(name);

var myLocation = 'Cullman';
console.log(myLocation);

var favoriteNumber = '3';
console.log(favoriteNumber);

let teams = ['Rockets', 'Lakers', 'Warriors', 'Celtics', 'Blazzers', 'clippers', 'Nets'];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;

while (otherNumber < number) {
    console.log(otherNumber)
    otherNumber++;
}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber);
    myOtherNumber++;
}


var crazyNumber = 10;
var myNumber = 3;

while (crazyNumber > myNumber) {
    console.log(crazyNumber);
    crazyNumber -= 1;
}

var romeFavorite = 5;
var myFavorite = 3;

while (myFavorite <= romeFavorite) {
    console.log(myFavorite)
    myFavorite++
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < teams.length; i++) {
    var eachTeam = teams[i];
    console.log(eachTeam);
}

//Make an array
//Use a foor loop to iterate through your array
//print each element in your array

var codingLanguages = ["Javascript", "Java", "Python", "CSS", "HTML"];

for (let i = 0; i < codingLanguages.length; i++) {
    eachLanguage = codingLanguages[i];
    console.log(eachLanguage);
}