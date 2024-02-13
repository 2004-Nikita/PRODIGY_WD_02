let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    laps = [];
    updateDisplay();
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("lapList").innerHTML = "";
}

function recordLap() {
    laps.push(seconds);
    const lapTime = formatTime(seconds);
    const lapList = document.getElementById("lapList");
    const listItem = document.createElement("li");
    listItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapList.appendChild(listItem);
}

function updateDisplay() {
    seconds++;
    document.getElementById("display").innerText = formatTime(seconds);
}

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return (
        padNumber(hours) + ":" +
        padNumber(minutes) + ":" +
        padNumber(seconds)
    );
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}
