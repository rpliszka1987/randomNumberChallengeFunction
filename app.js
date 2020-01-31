function randomNumber(bottom, top) {
    return Math.floor(Math.random() * (top - bottom + 1) + bottom);

}

var userLowNumber = prompt('What is the begining of the random number range?');
var lowNumber = parseInt(userLowNumber);
var userHighNumber = prompt('What is the top number of the range for random number?');
var topNumber = parseInt(userHighNumber);

console.log(randomNumber(lowNumber, topNumber));