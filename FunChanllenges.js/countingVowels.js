const prompt = require('prompt-sync')();
let word = prompt("Enter a word: ").toLowerCase();
let vowels = "aeiou";
let count = 0;

for (let char of word) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log("Vowels: " + count);