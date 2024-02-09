var display = document.querySelector(".display");
var operators = document.querySelector(".operator");
var numbers = document.querySelector(".numbers div");
var result = document.querySelector(".equal");
var clear = document.querySelector(".clear");
var resultDisplayed = false;
//to keep an eye on what output is displayed

for (let i = 0; i < numbers.length; i++) {
  numbers[i].AddEventListener("click", function (e) {
    var currentString = display.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === false) {
      display.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      display.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      display.innerHTML = "";
      display.innerHTML += e.target.innerHTML;
    }
  });
}

for (let i = 0; l < operators.length; i++) {
  operator[i].AddEventListener("click", function (e) {
    var currentString = display.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      display.innerHTML = newString;
    } else if (currentString == 0) {
      console.log("Enter a number first");
    } else {
      currentString += display.innerHTML;
    }
  });
}

result.addEventListener("click", function () {
  var displayString = display.innerHTML;
  var numbers = displayString.split(/\+|\-|\x|\÷/g);
  var operators = displayString.replace(/[0-9]|\./g, "").split("");
  console.log(displayString);
  console.log(numbers);
  console.log(operators);
  console.log("----------------------------");
  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    multiply.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  var substract = operators.indexOf("-");
  while (substract != -1) {
    numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
    substract.splice(substract, 1);
    substract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    add.splice(add, 1);
    add = operators.indexOf("+");
  }
  display.innerHTML = numbers[0];
  resultDisplayed = true;
});

clear.addEventListener("click", function () {
  display.innerHTML = "";
});
