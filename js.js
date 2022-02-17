import {timeToSign} from "./changeHour.js"

class DigitalClock {
  daysOfWeek = [".mon", ".tue", ".wed", ".thu", ".fri", ".sat", ".sun"];

  constructor() {
    this.time()
  }

  resetAllNumb(symbol) {
    let reset = document.querySelectorAll(`.${symbol}1 .reset, .${symbol}2 .reset`);
  
    for(let el of reset) {
      el.style.opacity = 0.1;
    }
  };

  resetDay() {
    for(let el of this.daysOfWeek) {
      let displayToday = document.querySelector(el);
      displayToday.style.color = "rgba(255, 255, 255, .3)";
    }
  };

  displayDate(date) {
    this.resetDay();
    let today = this.daysOfWeek[date - 1];
  
    let displayToday = document.querySelector(today);
    displayToday.style.color = "gold";
  };

  time() {
    setInterval(() => {
      this.resetAllNumb("s");
      this.resetAllNumb("m");
      this.resetAllNumb("h");
  
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
  
      this.displayDate(date);
    }, 50);
  };

}
 document.addEventListener("DOMContentLoaded", new DigitalClock());
