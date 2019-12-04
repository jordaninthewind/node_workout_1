const x = process.argv.filter((arg, idx) => idx > 1).join(" ")
let y = ''

console.log(x)
for (let i = x.length - 1; i >= 0; i--) {
    y += x[i]
}

console.log(y)
return y