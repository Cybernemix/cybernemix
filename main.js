const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Set the target date with Los Angeles time zone
const targetDate = new Date("February 9, 2024 00:00:00");
targetDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});

// Update countdown time
function updateCountdown() {
    // Get the current time with Los Angeles time zone
    const currentTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    const diff = targetDate - new Date(currentTime);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
