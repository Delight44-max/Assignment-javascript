const prompt = require('prompt-sync')();
let name = prompt("What's your name? ");
for (let i = 0; i < 3; i++) {
  console.log(name + "!");
}