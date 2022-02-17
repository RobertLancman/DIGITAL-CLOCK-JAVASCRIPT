let  x, y, z, a, b, c, d, e, f, g, h, i, j, k, l;
export let timeToSign = function (timePart, symbol, digitSide) {

    if(timePart == 1) {
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
    }

    if(timePart == 2) {
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}lb`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
    }

    if(timePart == 3) {
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);

      x.style.opacity = 1;
      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
    }

    if(timePart == 4) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
    }

    if(timePart == 5) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
    }

    if(timePart == 6) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}lb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
    }

    if(timePart == 7) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      a.style.opacity = 1;
    }

    if(timePart == 8) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);
      x = document.querySelector(`.${symbol}${digitSide} .${symbol}lb`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);
      d = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      e = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);

      y.style.opacity = 1;
      x.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
    }

    if(timePart == 9) {
      y = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      z = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);
      a = document.querySelector(`.${symbol}${digitSide} .${symbol}tb`);
      b = document.querySelector(`.${symbol}${digitSide} .${symbol}bt`);
      c = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);
      d = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      e = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);

      y.style.opacity = 1;
      z.style.opacity = 1;
      a.style.opacity = 1;
      b.style.opacity = 1;
      c.style.opacity = 1;
      d.style.opacity = 1;
      e.style.opacity = 1;
    }

    if(timePart == 0) {
      g = document.querySelector(`.${symbol}${digitSide} .${symbol}tt`);
      h = document.querySelector(`.${symbol}${digitSide} .${symbol}bb`);
      i = document.querySelector(`.${symbol}${digitSide} .${symbol}lt`);
      j = document.querySelector(`.${symbol}${digitSide} .${symbol}lb`);
      k = document.querySelector(`.${symbol}${digitSide} .${symbol}rt`);
      l = document.querySelector(`.${symbol}${digitSide} .${symbol}rb`);

      g.style.opacity = 1;
      h.style.opacity = 1;
      i.style.opacity = 1;
      j.style.opacity = 1;
      k.style.opacity = 1;
      l.style.opacity = 1;
    }  
};