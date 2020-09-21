let clockS = document.querySelector('.clock__hands--secondHand');
let clockM = document.querySelector('.clock__hands--minuteHand');
let clockH = document.querySelector('.clock__hands--hourHand');

//Download time from new Date and put into css
setInterval(() => {
    const time = new Date();
    let secondNum = time.getSeconds() * 6;
    let minuteNum = time.getMinutes() * 6;
    let hourNum = time.getHours() * 12;
    clockS.style.transform = "rotate("+ secondNum +"deg)";
    clockM.style.transform = "rotate("+ minuteNum +"deg)";
    clockH.style.transform = "rotate("+ hourNum+"deg)";
cl}, 1000);

