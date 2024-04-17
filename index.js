
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const amPm = document.getElementById('amPm');
    const circle = document.getElementById('circle');
    if (hours <= 12) {
        amPm.innerText = "AM";

    } else {
        amPm.innerText = `PM`;
    }
    document.getElementById('clock').textContent = timeString;

    function shape() {
        const marginLeft = (seconds / 79) * 100 + '%';

        // Apply the calculated margin left to the circle element
        circle.style.marginLeft = marginLeft;
    }

    shape()

}


setInterval(updateClock, 1000);


updateClock();