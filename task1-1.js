const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

askQuestion();

function reverse(str) {
  let returnStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    returnStr += str[i];
  }
  return returnStr;
}

function askQuestion() {
  rl.question("Type input: \n", input => {
    console.log(reverse(input));
    askQuestion();
  });
}
