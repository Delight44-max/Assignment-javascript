const prompt = require('prompt-sync')();
const answer = 25;
let guess;

do {
  guess = Number(prompt("Guess the number: "));
  if (guess > answer) {
    console.log("Too high!");
  } else if (guess < answer) {
    console.log("Too low!");
  }
} while (guess !== answer);

console.log("Correct!");