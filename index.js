let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let showTimer = document.querySelector(".timer");
let int = null;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

start.addEventListener('click', () => {
    if (int) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

pause.addEventListener('click', () => {
    clearInterval(int);
});

reset.addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    showTimer.innerHTML = "00 : 00 : 00 : 000";
})

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds;

    showTimer.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

