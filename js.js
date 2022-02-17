import {timeToSign} from "./changeHour.js"

let daysOfWeek = [".mon", ".tue", ".wed", ".thu", ".fri", ".sat", ".sun"];

let resetAll = function (symbol) {
  let reset = document.querySelectorAll(`.${symbol}1 .reset, .${symbol}2 .reset`);

  for(let el of reset) {
    el.style.opacity = 0.1;
  }
};

let resetDay = function () {
  for(let el of daysOfWeek) {
    let displayToday = document.querySelector(el);
    displayToday.style.color = "rgba(255, 255, 255, .3)";
  }
};

let displayDate = function (date) {
  resetDay();
  let today = daysOfWeek[date - 1];

  let displayToday = document.querySelector(today);
  displayToday.style.color = "gold";
};



let time = function () {
  setInterval(() => {
    resetAll("s");
    resetAll("m");
    resetAll("h");

    const time = new Date();
    let sec = Array.from((time.getSeconds()).toString().padStart(2,'0')).map(Number);
    let min = Array.from((time.getMinutes()).toString().padStart(2,'0')).map(Number);
    let hour = Array.from((time.getHours()).toString().padStart(2,'0')).map(Number);
    let date = time.getDay();


    let secLeftDig = sec[0];
    let secRightDig = sec[1];

    let minLeftDig = min[0];
    let minRightDig = min[1];

    let hourLeftDig = hour[0];
    let hourRightDig = hour[1];

    timeToSign(secLeftDig, "s", "1");
    timeToSign(secRightDig, "s", "2");


    timeToSign(minLeftDig, "m", "1");
    timeToSign(minRightDig, "m", "2");

    timeToSign(hourLeftDig, "h", "1");
    timeToSign(hourRightDig, "h", "2");

    displayDate(date);
  }, 100);
};

time();
// document.addEventListener("DOMContentLoaded", new WeatherApp());
