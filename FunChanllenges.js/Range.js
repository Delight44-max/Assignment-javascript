const prompt = require('prompt-sync')();
let start = Number(prompt("Enter start number: "));
let end = Number(prompt("Enter end number: "));

for (let i = start; i <= end; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}