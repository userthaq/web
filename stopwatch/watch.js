let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

function startWatch() {
  if (startBtn == true) {
    stopWatch();
  }
}
