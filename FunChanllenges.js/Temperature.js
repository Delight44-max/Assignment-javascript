const prompt = require('prompt-sync')();
let temp = Number(prompt("Enter the temperature: "));
if (temp > 30) {
  console.log("Hot!");
} else if (temp >= 15) {
  console.log("Nice!");
} else {
  console.log("Cold!");
}