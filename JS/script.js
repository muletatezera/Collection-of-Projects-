let count = 0;
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
// console.log(decrease);
// console.log(reset);
// console.log(increase);
decrease.addEventListener("click", function () {
  count--;
  document.getElementById("counter").innerHTML = count;
  console.log(count);
});
reset.addEventListener("click", function () {
  count = 0;
  document.getElementById("counter").innerHTML = count;
  console.log(count);
});

increase.onclick = function () {
  count++;
  document.getElementById("counter").innerHTML = count;
  console.log(count);
};
