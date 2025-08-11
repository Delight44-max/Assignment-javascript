const prompt = require('prompt-sync')();
let celsius = Number(prompt("Enter Celsius temperature: "));

if (celsius < -273) {
  console.log("Impossible temperature!");
} else {
  for (let i = 0; i < 5; i++) {
    let tempC = celsius + i;
    let tempF = (tempC * 9/5) + 32;
    console.log(`${tempC}°C = ${tempF.toFixed(1)}°F`);
  }
}