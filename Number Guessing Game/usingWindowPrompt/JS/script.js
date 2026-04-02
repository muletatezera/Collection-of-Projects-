const minNumber = 10;
const maxNumber = 50;
const answer = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber,
);
console.log(answer);
let attempt = 0;
let guess;
let running = true;
while (running) {
  attempt++;
  guess = window.prompt(`inter a number ${minNumber}-${maxNumber}`);
  guess = Number(guess);
  console.log(typeof guess);
  if (isNaN(guess)) {
    window.alert(`please inter the valid number`);
  } else if (guess < minNumber || guess > maxNumber) {
    window.alert(`please inter valid number `);
  } else {
    if (guess < answer) {
      window.alert(`Too low! try again`);
    } else if (guess > answer) {
      window.alert(`Too high! try again`);
    } else {
      window.alert(
        `Correct! the answer was ${answer} it tooks you ${attempt} to get`,
      );
      running = false;
    }
  }
}
