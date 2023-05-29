const bill = document.querySelector(".bill-input");
const button = document.querySelectorAll(".procent");
const costomPer = document.querySelector(".costom");
const tipDisplay = document.getElementById("tipAmount");
const people = document.querySelector(".people-input");
const billDisplay = document.getElementById("totalAmount");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");

let percent = 0;
let billAmount = 0;
let peopleAmount = 0;

reset.addEventListener("click", function () {
  location.reload();
  calculate();
});

bill.addEventListener("input", function (e) {
  billAmount = Number(e.target.value);
  calculate();
});

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    percent = Number(button[i].textContent.slice(0, -1));
    calculate();
  });
}
costomPer.addEventListener("input", function (e) {
  percent = Number(e.target.value);
  calculate();
});

people.addEventListener("input", function (e) {
  peopleAmount = Number(e.target.value);
  calculate();
});

function calculate() {
  if (billAmount !== 0 && peopleAmount !== 0 && percent !== 0) {
    tipAmount = (billAmount * (percent / 100)) / peopleAmount;
    tipDisplay.innerHTML = "$" + tipAmount.toFixed(2);
    billPerson = billAmount / peopleAmount + tipAmount;
    billDisplay.innerHTML = "$" + billPerson.toFixed(2);
  }
  if (peopleAmount <= 0) {
    error.style.display = "inline";
    people.style.outlineColor = "#E17052";
    people.style.border = "#E17052";
  } else {
    error.style.display = "none";
    people.style.outlineColor = "#26C2AE";
  }
}
calculate();
