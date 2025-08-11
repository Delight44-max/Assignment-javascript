const prompt = require('prompt-sync')();
const pin = "1234";
let success = false;

for (let i = 0; i < 3; i++) {
  let entry = prompt("Enter PIN: ");
  if (entry === pin) {
    console.log("Access granted!");
    success = true;
    break;
  } else {
    console.log("Try again!");
  }
}
if (!success) {
  console.log("Locked!");
}