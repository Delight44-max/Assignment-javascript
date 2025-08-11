const prompt = require('prompt-sync')();
const magicNumber = 42;
let guess = Number(prompt("Guess the magic number: "));
if (guess === magicNumber) {
  console.log("You found the magic number!");
} else {
  console.log("Keep looking!");
}