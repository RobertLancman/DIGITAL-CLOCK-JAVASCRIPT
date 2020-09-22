let sec , min, hour,x, y, z, a, b, c, d, e, f , g, h, i, j, k,l;


let resetAll = function(symboll) {
    let reset = document.querySelectorAll(`.${symboll}1 .reset, .${symboll}2 .reset`);
    for (let i=0; i < reset.length; i++) {
        reset[i].style.opacity = 0.1;
    }
   }

let timeToSign = function(timePart, symbol) {


    switch (timePart) {
        case 1:
                   

            x = document.querySelector(`.${symbol}2 .${symbol}rt`);
            y = document.querySelector(`.${symbol}2 .${symbol}rb`);

            x.style.opacity = 1;
            y.style.opacity = 1;

        break;


        case 2:
           

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


    }
}


let time = function() {
    setInterval(() => {
    resetAll('s')
    const time = new Date();
     sec = time.getSeconds();
     min = time.getMinutes();
     hour = time.getHours();  
     console.log(sec);

     timeToSign(sec,'s');
     timeToSign(min,'m');

}, 1000);
}

time()


resetAll('s')
/*

    let sym1 = document.querySelector(`.${symbol}1 .digital__bar`);
    let sym2 = document.querySelector(`.${symbol}2 .digital__bar`);
    sym1.style.opacity = 0.1;
    sym2.style.opacity = 0.1;
    */
   

 
