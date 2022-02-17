let sec, min, hour, x, y, z, a, b, c, d, e, f, g, h, i, j, k, l;

let resetAll = function (symboll) {
  let reset = document.querySelectorAll(
    `.${symboll}1 .reset, .${symboll}2 .reset`
  );
  for (let i = 0; i < reset.length; i++) {
    reset[i].style.opacity = 0.1;
  }
};

let resetDay = function () {
  let daysOfWeek = [".mon", ".tue", ".wed", ".thu", ".fri", ".sat", ".sun"];
  for (let i = 0; i < daysOfWeek.length; i++) {
    let displayToday = document.querySelector(daysOfWeek[i]);
    displayToday.style.color = "rgba(255, 255, 255, .3)";
  }
};

let displayDate = function (date) {
  resetDay();
  let daysOfWeek = [".mon", ".tue", ".wed", ".thu", ".fri", ".sat", ".sun"];
  let today = daysOfWeek[date - 1];

  let displayToday = document.querySelector(today);
  displayToday.style.color = "gold";
};

let timeToSign = function (timePart, symbol, digitSide) {
  console.log(`Elo ${digitSide}`);
  switch (timePart) {
    case 1:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      break;

    case 2:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lb`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 3:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 4:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 5:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      break;

    case 6:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);
      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 7:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;

      break;

    case 8:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);
      x = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lb`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);
      d = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      e = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 9:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);
      a = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      e = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 0:
      g = document.querySelector(`.${symbol}1-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}1-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}1-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}1-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      g = document.querySelector(`.${symbol}2-${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}2-${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}2-${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}2-${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      break;
  }
};

let time = function () {
  setInterval(() => {
    resetAll("s");
    resetAll("m");
    resetAll("h");

    const time = new Date();
    sec = Array.from((time.getSeconds()).toString().padStart(2,'0')).map(Number);
    min = Array.from((time.getMinutes()).toString().padStart(2,'0')).map(Number);
    hour = Array.from((time.getHours()).toString().padStart(2,'0')).map(Number);
    date = time.getDay();


    let secLeftDig = sec[0];
    let secRightDig = sec[1];

    let minLeftDig = min[0];
    let minRightDig = min[1];

    let hourLeftDig = hour[0];
    let hourRightDig = hour[1];


    timeToSign(secRightDig, "s", "right");
    timeToSign(secLeftDig, "s", "left");


    timeToSign(minLeftDig, "m", "left");
    timeToSign(minRightDig, "m", "right");

    timeToSign(hourLeftDig, "h", "left");
    timeToSign(hourRightDig, "h", "right");

    displayDate(date);
  }, 100);
};

time();
