const minNumber = 10;
const maxNumber = 50;
const answer = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber,
);
// console.log(answer);
let attempt = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`inter a number ${minNumber}-${maxNumber}`);
  guess = Number(guess);
  console.log(typeof guess);
  if (isNaN(guess)) {
    window.prompt(`please inter the valid number`);
  }
  running = false;
}
