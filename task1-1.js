const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

askQuestion();

function reverse(str) {
  return str.split("").reverse().join("")
}

function askQuestion() {
  rl.question("Type input: \n", input => {
    console.log(reverse(input));
    askQuestion();
  });
}
