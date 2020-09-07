const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const SecondsTot = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(SecondsTot / 3600 / 24);
    const hours = Math.floor(SecondsTot / 3600) % 24;
    const mins = Math.floor(SecondsTot / 60) % 60;
    const seconds = Math.floor(SecondsTot) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);