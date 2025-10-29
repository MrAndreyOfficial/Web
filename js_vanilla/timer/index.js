let hours = 0;
let minutes = 0;
let seconds = 0;

let timerId;

const startButtonElement = document.getElementById('start-button');
const resetButtonElement = document.getElementById('reset-button');
const stopButtonElement = document.getElementById('stop-button');

function updateTimer() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('timer-text').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = -1;

    clearInterval(timerId);

    updateTimer();
}

function startTimer() {
    updateTimer();
}

function stopTimer() {
    clearInterval(timerId);
}

startButtonElement.addEventListener('click', e => {
    startButtonElement.disabled = true;
    stopButtonElement.disabled = false;

    timerId = setInterval(startTimer, 1000);
});

resetButtonElement.addEventListener('click', () => {
    startButtonElement.disabled = false;
    stopButtonElement.disabled = false;

    resetTimer();
});

stopButtonElement.addEventListener('click', () => {
    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;

    stopTimer();
});
