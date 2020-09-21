let sec , min, hour,x, y, z, a, b, c, d, e, f ;

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



