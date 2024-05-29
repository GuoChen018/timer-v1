// Initialize the minute and seconds to store them

let timerMinute = document.getElementById('timer-minute');
let iMinute = timerMinute.innerHTML; 

let timerSecond = document.getElementById('timer-second');
let iSecond = timerSecond.innerHTML;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const stopButton = document.getElementById('stop');


let totalTime = parseInt(timerMinute.textContent) * 60 + parseInt(timerSecond.textContent); 

isPaused = false; 

console.log (totalTime);   

pauseButton.style.display = 'none';
resumeButton.style.display = 'none';
stopButton.style.display = 'none';

// Timer count down 
function startTimer() {

    totalTime--;
    let minutes = Math.floor(totalTime / 60); 
    let seconds = totalTime % 60; 

    if (seconds < 10) {
        seconds = '0' + seconds; 
    } 
    else {
        seconds = seconds; 
    }

    if (totalTime > 0) {
        timerMinute.innerText = minutes; 
        timerSecond.innerText = seconds; 
    }

    else {
        timerMinute.innerText = iMinute;
        timerSecond.innerText = iSecond;

        totalTime = parseInt(timerMinute.textContent) * 60 + parseInt(timerSecond.textContent); 

        clearInterval(intervalID);

        startButton.style.display = 'block';
        pauseButton.style.display = 'none';
        resumeButton.style.display = 'none';
        stopButton.style.display = 'none';
    }
}


startButton.addEventListener('click', () => {

    isPaused = false; 

    if (!isPaused) {
        intervalID = setInterval(startTimer, 1000); 
    }

    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
    stopButton.style.display = 'block';

}); 

pauseButton.addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(intervalID);
        isPaused = true; 
        pauseButton.style.display = 'none';
        resumeButton.style.display = 'block';
        stopButton.style.display = 'block';
    }
}) 

resumeButton.addEventListener('click', () => {
    isPaused = false; 

    if (!isPaused) {
        intervalID = setInterval(startTimer, 1000); 
        resumeButton.style.display = 'none';
        pauseButton.style.display = 'block';

    }
})

stopButton.addEventListener('click', () => {

    isPaused = false;

    if (!isPaused) {
        clearInterval(intervalID);
        timerMinute.innerText = iMinute;
        timerSecond.innerText = iSecond;

        totalTime = parseInt(timerMinute.textContent) * 60 + parseInt(timerSecond.textContent); 

        startButton.style.display = 'block';
        pauseButton.style.display = 'none';
        resumeButton.style.display = 'none';
        stopButton.style.display = 'none';
    }
})
