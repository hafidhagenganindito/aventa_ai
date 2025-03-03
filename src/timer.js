export function startCountdown() {
  let time = { hours: 1, minutes: 30, seconds: 45 };

  function updateTimer() {
    document.getElementById("hourText").textContent = String(
      time.hours
    ).padStart(2, "0");
    document.getElementById("minuteText").textContent = String(
      time.minutes
    ).padStart(2, "0");
    document.getElementById("secondText").textContent = String(
      time.seconds
    ).padStart(2, "0");

    document.getElementById("hourCircle").style.strokeDashoffset =
      getDashOffset(time.hours * 3600 + time.minutes * 60 + time.seconds, 3600);
    document.getElementById("minuteCircle").style.strokeDashoffset =
      getDashOffset(time.minutes * 60 + time.seconds, 3600);
    document.getElementById("secondCircle").style.strokeDashoffset =
      getDashOffset(time.seconds, 60);
  }

  function getDashOffset(timeLeft, totalTime) {
    return 251 - (251 * timeLeft) / totalTime;
  }

  function startTimer() {
    setInterval(() => {
      if (time.seconds > 0) {
        time.seconds -= 1;
      } else {
        if (time.minutes > 0) {
          time.minutes -= 1;
          time.seconds = 59;
        } else if (time.hours > 0) {
          time.hours -= 1;
          time.minutes = 59;
          time.seconds = 59;
        }
      }
      updateTimer();
    }, 1000);
  }

  updateTimer();
  startTimer();
}
