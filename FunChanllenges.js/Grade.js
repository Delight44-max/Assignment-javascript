const prompt = require('prompt-sync')();
let score = Number(prompt("Enter your test score (0–100): "));
if (score >= 90) {
  console.log("A!");
} else if (score >= 80) {
  console.log("B!");
} else if (score >= 70) {
  console.log("C!");
} else {
  console.log("F!");
}