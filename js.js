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

let timeToSign = function (timePart, symbol) {
  switch (timePart) {
    case 1:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      break;

    case 2:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 3:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 4:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 5:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      break;

    case 6:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 7:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;

      break;

    case 8:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

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
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}rt`);
      e = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 10:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 11:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      break;

    case 12:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 13:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 14:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 15:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 16:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 17:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;
      break;

    case 18:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 19:
      x = document.querySelector(`.${symbol}1 .${symbol}rt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}rt`);
      e = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 20:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      g = document.querySelector(`.${symbol}2 .${symbol}tt`);
      h = document.querySelector(`.${symbol}2 .${symbol}bb`);
      i = document.querySelector(`.${symbol}2 .${symbol}lt`);
      j = document.querySelector(`.${symbol}2 .${symbol}lb`);
      k = document.querySelector(`.${symbol}2 .${symbol}rt`);
      l = document.querySelector(`.${symbol}2 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      break;

    case 21:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      break;

    case 22:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 23:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 24:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 25:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 26:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 27:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;
      break;

    case 28:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 29:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}lb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}rt`);
      e = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 30:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      g = document.querySelector(`.${symbol}2 .${symbol}tt`);
      h = document.querySelector(`.${symbol}2 .${symbol}bb`);
      i = document.querySelector(`.${symbol}2 .${symbol}lt`);
      j = document.querySelector(`.${symbol}2 .${symbol}lb`);
      k = document.querySelector(`.${symbol}2 .${symbol}rt`);
      l = document.querySelector(`.${symbol}2 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      break;

    case 31:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      break;

    case 32:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 33:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      break;

    case 34:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 35:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 36:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 37:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;
      break;

    case 38:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 39:
      x = document.querySelector(`.${symbol}1 .${symbol}tt`);
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}rt`);
      e = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 40:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      g = document.querySelector(`.${symbol}2 .${symbol}tt`);
      h = document.querySelector(`.${symbol}2 .${symbol}bb`);
      i = document.querySelector(`.${symbol}2 .${symbol}lt`);
      j = document.querySelector(`.${symbol}2 .${symbol}lb`);
      k = document.querySelector(`.${symbol}2 .${symbol}rt`);
      l = document.querySelector(`.${symbol}2 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      break;

    case 41:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;

      break;

    case 42:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 43:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 44:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 45:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 46:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 47:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;
      break;

    case 48:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 49:
      y = document.querySelector(`.${symbol}1 .${symbol}rt`);
      z = document.querySelector(`.${symbol}1 .${symbol}tb`);
      a = document.querySelector(`.${symbol}1 .${symbol}bt`);
      b = document.querySelector(`.${symbol}1 .${symbol}rb`);
      c = document.querySelector(`.${symbol}1 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;

      d = document.querySelector(`.${symbol}2 .${symbol}tt`);
      e = document.querySelector(`.${symbol}2 .${symbol}lt`);
      f = document.querySelector(`.${symbol}2 .${symbol}tb`);
      g = document.querySelector(`.${symbol}2 .${symbol}bt`);
      h = document.querySelector(`.${symbol}2 .${symbol}rb`);
      i = document.querySelector(`.${symbol}2 .${symbol}rt`);
      j = document.querySelector(`.${symbol}2 .${symbol}bb`);

      d.style.opacity = 1;
      e.style.opacity = 1;
      f.style.opacity = 1;
      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      break;

    case 50:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      g = document.querySelector(`.${symbol}2 .${symbol}tt`);
      h = document.querySelector(`.${symbol}2 .${symbol}bb`);
      i = document.querySelector(`.${symbol}2 .${symbol}lt`);
      j = document.querySelector(`.${symbol}2 .${symbol}lb`);
      k = document.querySelector(`.${symbol}2 .${symbol}rt`);
      l = document.querySelector(`.${symbol}2 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
      break;

    case 51:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}rt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      break;

    case 52:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}lb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 53:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      x = document.querySelector(`.${symbol}2 .${symbol}tt`);
      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 54:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}rt`);
      z = document.querySelector(`.${symbol}2 .${symbol}tb`);
      a = document.querySelector(`.${symbol}2 .${symbol}bt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      break;

    case 55:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      break;

    case 56:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      break;

    case 57:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      x = document.querySelector(`.${symbol}2 .${symbol}rb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;

      break;

    case 58:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      x = document.querySelector(`.${symbol}2 .${symbol}lb`);
      a = document.querySelector(`.${symbol}2 .${symbol}rt`);
      b = document.querySelector(`.${symbol}2 .${symbol}rb`);
      c = document.querySelector(`.${symbol}2 .${symbol}bb`);
      d = document.querySelector(`.${symbol}2 .${symbol}tb`);
      e = document.querySelector(`.${symbol}2 .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;

      break;

    case 59:
      y = document.querySelector(`.${symbol}1 .${symbol}tt`);
      z = document.querySelector(`.${symbol}1 .${symbol}lt`);
      a = document.querySelector(`.${symbol}1 .${symbol}tb`);
      b = document.querySelector(`.${symbol}1 .${symbol}bt`);
      c = document.querySelector(`.${symbol}1 .${symbol}rb`);
      d = document.querySelector(`.${symbol}1 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;

      y = document.querySelector(`.${symbol}2 .${symbol}tt`);
      z = document.querySelector(`.${symbol}2 .${symbol}lt`);
      a = document.querySelector(`.${symbol}2 .${symbol}tb`);
      b = document.querySelector(`.${symbol}2 .${symbol}bt`);
      c = document.querySelector(`.${symbol}2 .${symbol}rb`);
      d = document.querySelector(`.${symbol}2 .${symbol}rt`);
      e = document.querySelector(`.${symbol}2 .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
      break;

    case 0:
      g = document.querySelector(`.${symbol}1 .${symbol}tt`);
      h = document.querySelector(`.${symbol}1 .${symbol}bb`);
      i = document.querySelector(`.${symbol}1 .${symbol}lt`);
      j = document.querySelector(`.${symbol}1 .${symbol}lb`);
      k = document.querySelector(`.${symbol}1 .${symbol}rt`);
      l = document.querySelector(`.${symbol}1 .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;

      g = document.querySelector(`.${symbol}2 .${symbol}tt`);
      h = document.querySelector(`.${symbol}2 .${symbol}bb`);
      i = document.querySelector(`.${symbol}2 .${symbol}lt`);
      j = document.querySelector(`.${symbol}2 .${symbol}lb`);
      k = document.querySelector(`.${symbol}2 .${symbol}rt`);
      l = document.querySelector(`.${symbol}2 .${symbol}rb`);

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
    sec = time.getSeconds();
    min = time.getMinutes();
    hour = time.getHours();
    date = time.getDay();

    let secLeftDig = Array.from(sec.toString().padStart(2,'0')).map(Number)[0]
    let secRightDig = Array.from(sec.toString().padStart(2,'0')).map(Number)[1]

    let minLeftDig = Array.from(min.toString().padStart(2,'0')).map(Number)[0]
    let minRightDig = Array.from(min.toString().padStart(2,'0')).map(Number)[1]

    let hourLeftDig = Array.from(hour.toString().padStart(2,'0')).map(Number)[0]
    let hourRightDig = Array.from(hour.toString().padStart(2,'0')).map(Number)[1]

    timeToSign(sec, "s");
    timeToSign(min, "m");
    timeToSign(hour, "h");
    displayDate(date);
  }, 100);
};

time();
