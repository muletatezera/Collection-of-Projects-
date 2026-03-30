const inputNumber = document.getElementById("interedNumber").value;
const myfahrenite = document.getElementById("myFahrenite");
const mycelciues = document.getElementById("myCelciues");
const submitButton = document.getElementById("submit-btn");
const result = document.getElementById("result");
// console.log(result);
let calculate;

submitButton.onclick = function () {
  if (myfahrenite.checked) {
    calculate = Math.floor((9 / 5) * inputNumber + 32) + "℉";
    result.innerHTML = calculate;
    // console.log("fahrenite unit is choosed");
  } else if (mycelciues.checked) {
    calculate = Math.floor((5 / 9) * inputNumber - 32) + "℃";
    result.innerHTML = calculate;
    // console.log("celciues uni is choosen");
  }
};
