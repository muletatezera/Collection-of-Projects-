const btn = document.getElementById("generate-btn");
const firstNumber = document.getElementById("firstNumber");
btn.onclick = function () {
  firstNumber.innerHTML = Math.floor(Math.random() * 10) + 5;
  console.log(firstNumber);
};
