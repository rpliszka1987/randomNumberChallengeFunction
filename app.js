// Random number function
function randomNumber(bottom, top) {
    if (isNaN(bottom) === false || isNaN(top) === false) {
        // throw new Error('Please enter a number.');
        alert('Please enter a number.');
    }
    return Math.floor(Math.random() * (top - bottom + 1) + bottom);
}

// User random number inputs.

var userLowNumber = prompt('What is the begining of the random number range?');
var lowNumber = parseInt(userLowNumber);
var userHighNumber = prompt('What is the top number of the range for random number?');
var topNumber = parseInt(userHighNumber);

console.log(randomNumber(lowNumber, topNumber));