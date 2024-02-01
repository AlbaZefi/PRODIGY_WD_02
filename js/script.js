// Variables to store the stopwatch state
let startTime;
let elapsedTime = 0;
let timerInterval;

// Function to start the stopwatch
function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateStopwatch, 10);
}

// Function to update the stopwatch display
function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('stopwatch-display').textContent = formattedTime;
}

// Function to format the elapsed time as HH:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
}

// Function to add leading zero to single-digit numbers
function padZero(number) {
  return number.toString().padStart(2, '0');
}

// Function to pause the stopwatch
function pauseStopwatch() {
  clearInterval(timerInterval);
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById('stopwatch-display').textContent = '00:00:00';
}

// Event listeners for the buttons
document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('pause-button').addEventListener('click', pauseStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);


// Function to record lap time
function recordLapTime() {
    const lapTime = formatTime(elapsedTime);
    const lapTimeElement = document.createElement('div');
    lapTimeElement.textContent = lapTime;
    document.getElementById('lap-times-container').appendChild(lapTimeElement);
  }
  
  // Event listener for the lap button
  document.getElementById('lap-button').addEventListener('click', recordLapTime);
  