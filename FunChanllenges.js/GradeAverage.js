const prompt = require('prompt-sync')();
let total = 0;
let count = 0;

while (count < 5) {
  let score = Number(prompt(`Enter score ${count + 1}: `));
  if (score >= 0 && score <= 100) {
    total += score;
    count++;
  } else {
    console.log("Invalid score. Try again.");
  }
}
console.log("Average: " + (total / 5));