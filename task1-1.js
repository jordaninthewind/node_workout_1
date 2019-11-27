process.argv.shift();
process.argv.shift();
const x = process.argv.join(" ");
console.log(x   )
let y = '';

for (let i = x.length - 1; i >= 0; i--) {
    y += x[i]
}

console.log(y)