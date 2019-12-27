const reverse = (str) =>
  str
    .split('')
    .reverse()
    .join('');

function askQuestion() {
  process.stdout.write('\nType a phrase to be reversed: ');
}

askQuestion();

process.stdin.on('data', (data) => {
  console.log(reverse(data.toString()));
  askQuestion();
});
