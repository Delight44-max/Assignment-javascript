let stars = [1, 3, 5, 3, 1];
for (let i = 0; i < stars.length; i++) {
  let line = "";
  for (let j = 0; j < stars[i]; j++) {
    line += "*";
  }
  console.log(line);
}