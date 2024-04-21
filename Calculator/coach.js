var arrNumber = [];
var arrOperator = [];
var calcHistory = "";
var enteredNumber = "";
var firstValue = 0;
var isEqualClicked = false;
var isOperatorClicked = true;

function numberClicked(num) {
  var display = document.querySelector("#calc_display");
  isOperatorClicked = false;
  if (isEqualClicked) {
    clearClicked();
    isEqualClicked = false;
  }
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
  var latestEqual = display.innerHTML;
  if (isEqualClicked) {
    arrNumber = [];
    arrOperator = [];
    enteredNumber = latestEqual;
    isEqualClicked = false;
  }
  if (display.innerHTML == "0") {
  } else {
    if (!isOperatorClicked) {
      arrNumber.push(enteredNumber);
      arrOperator.push(char);
      firstValue = Number(enteredNumber);
      enteredNumber = "";
      display.innerHTML += char;
      isOperatorClicked = true;
    } else {
      arrOperator.pop();
      arrOperator.push(char);
      firstValue = Number(enteredNumber);
      enteredNumber = "";
      display.innerHTML =
        display.innerHTML.slice(0, display.innerHTML.length - 1) + char;
    }
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
  //calcHistory.push(total);
  calcHistory = total;
  isEqualClicked = true;
  history(total);
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

function history(total) {
  var display = document.querySelector("#historyDisplay");
  var html = "<p>" + total + "</p>";
  display.innerHTML = html + display.innerHTML;
}

/*
function history() {
  for (let i = 0; i < calcHistory.length; i++) {
//    historyDisplay.innerHTML = calcHistory[i];    

display.innerHTML += " " + "+" + calcHistory;


  }
}
*/
