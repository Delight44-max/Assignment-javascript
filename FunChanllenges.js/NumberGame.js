const prompt = require('prompt-sync')();
const secret = 8;
let guess;
do {
  guess = Number(prompt("Guess the number: "));
  if (guess !== secret) {
    console.log("Try again!");
  }
} while (guess !== secret);
console.log("Correct!");