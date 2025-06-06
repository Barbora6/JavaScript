// https://www.youtube.com/watch?v=2ml4x0rO1PQ
// 01:02:34

const btnStart = document.querySelector("#btn1");
const btnStop = document.querySelector("#btn2");
const btnReset = document.querySelector("#btn3");
const time = document.getElementById("time");

let secondsElapsed = 0;
let interval = null;

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}

btnStart.addEventListener("click", startClock);
btnStop.addEventListener("click", stopClock);
btnReset.addEventListener("click", resetClock);
