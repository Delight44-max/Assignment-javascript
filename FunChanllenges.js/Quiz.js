const prompt = require('prompt-sync')();
const answer = "paris";
let correct = false;

for (let i = 0; i < 3; i++) {
  let response = prompt("What's the capital of France? ").toLowerCase();
  if (response === answer) {
    console.log("Correct!");
    correct = true;
    break;
  } else {
    console.log("Try again!");
  }
}
if (!correct) {
  console.log("Out of tries!");
}