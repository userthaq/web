var arrNumber = [];
var arrOperator = [];
var calcHistory = [];
var enteredNumber = "";
var firstValue = 0;

function numberClicked(num) {
  var display = document.querySelector("#calc_display");
  if (display.innerHTML == "0") {
    enteredNumber = String(num);
    display.innerHTML = num;
  } else {
    enteredNumber += String(num);
    display.innerHTML += num;
  }
}

function clearClicked() {
  var display = document.querySelector("#calc_display");
  display.innerHTML = 0;
  arrOperator = [];
  arrNumber = [];
}

function operatorClicked(char) {
  var display = document.querySelector("#calc_display");
  if (display.innerHTML == "0") {
  } else {
    arrNumber.push(enteredNumber);
    arrOperator.push(char);
    firstValue = Number(enteredNumber);
    enteredNumber = "";
    display.innerHTML += char;
  }
}

function resultClicked() {
  var display = document.querySelector("#calc_display");
  arrNumber.push(enteredNumber);
  var total = arrNumber[0];
  for (let i = 0; i < arrOperator.length; i++) {
    total = operation(total, arrNumber[i + 1], arrOperator[i]);
  }
  display.innerHTML = total;
  calcHistory.push(total);
}

function operation(num1, num2, operator) {
  if (operator == "+") {
    return Number(num1) + Number(num2);
  } else if (operator == "-") {
    return Number(num1) - Number(num2);
  } else if (operator == "x") {
    return Number(num1) * Number(num2);
  } else if (operator == "÷") {
    return Number(num1) / Number(num2);
  }
}

function history() {
  for (let i = 0; i < calcHistory.length; i++) {
    historyDisplay.innerHTML = calcHistory[i];
  }
}
