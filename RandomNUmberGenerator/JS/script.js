const btn = document.getElementById("generate-btn");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const thirdNumber = document.getElementById("thirdNumber");
btn.onclick = function () {
  firstNumber.innerHTML = Math.floor(Math.random() * 10);
  secondNumber.innerHTML = Math.floor(Math.random() * 20);
  thirdNumber.innerHTML = Math.floor(Math.random() * 30);
  // console.log(firstNumber);
};
