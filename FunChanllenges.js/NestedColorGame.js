const prompt = require('prompt-sync')();
const favoriteColor = "blue";
let guessed = false;

for (let i = 0; i < 3; i++) {
  let guess = prompt("Guess the color: ").toLowerCase();
  if (guess === favoriteColor) {
    console.log("Correct!");
    guessed = true;
    break;
  } else if (guess === "green") {
    console.log("Close!");
  } else {
    console.log("Wrong!");
  }
}
if (!guessed) {
  console.log("Out of guesses!");
}