// const x = process.argv.slice(2).join(" ");
// console.log("v1: ");
// console.log(x);

function reverse(str) {
  let returnStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    returnStr += str[i];
  }
  return returnStr;
}
// console.log(reverse(x))
// return reverse(x);

/* -------------------- */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Type input: ', input => {
    console.log(reverse(input))
})
