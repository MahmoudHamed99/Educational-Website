// Start CountDownTimer
let deadline = new Date("31 Dec, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime(),
        dateDiff = deadline - dateNow;

        days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
        hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector(".count .box .days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".count .box .hrs").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".count .box .mins").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".count .box .secs").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

        if (dateDiff < 0) {
            clearInterval(counter);
        }
}, 1000)
// End CountDownTimer