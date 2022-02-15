const countTo = '1 Jan 2023';

const count = setInterval(() => {
    const endDate = new Date(countTo);
    const currDate = new Date();
    const totalSeconds = (endDate - currDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countdown = document.getElementById('countdown');

    countdown.textContent = `${days}Days ${format(hours)}Hrs : ${format(
    minutes
  )}Min : ${format(seconds)}s`;

    if (totalSeconds < 0) {
        clearInterval(count);
        countdown.textContent = `Happy New Year`;
    }
}, 1000);

function format(time) {
    return time < 10 ? `0${time}` : time;
}