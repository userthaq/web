var firstValue = 0;
var enteredNumber = "";

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
}

function operatorClicked(char) {
  var display = document.querySelector("#calc_display");
  if (display.innerHTML == "0") {
  } else {
    firstValue = Number(enteredNumber);
    enteredNumber = "";
    display.innerHTML += char;
  }
}

function resultClicked() {
  var display = document.querySelector("#calc_display");
  if (display.innerHTML.includes("+")) {
    display.innerHTML = Number(firstValue) + Number(enteredNumber);
  } else if (display.innerHTML.includes("-")) {
    display.innerHTML = Number(firstValue) - Number(enteredNumber);
  } else if (display.innerHTML.includes("x")) {
    display.innerHTML = Number(firstValue) * Number(enteredNumber);
  } else if (display.innerHTML.includes("÷")) {
    display.innerHTML = Number(firstValue) / Number(enteredNumber);
  }
}
