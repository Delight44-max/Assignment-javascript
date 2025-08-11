let total = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}
console.log("Sum of multiples: " + total);