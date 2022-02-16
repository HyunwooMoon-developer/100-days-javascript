let time = 1;
let promoTime = time * 60;

let countdown = document.getElementById('countdown');

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      countdown.innerHTML = 'Promo has ended';
    } else {
      promoTime--;
      let day = Math.floor(promoTime / 3600 / 24);
      let hour = Math.floor(promoTime / 3600) % 24;
      let minute = Math.floor(promoTime / 60) % 60;
      let second = Math.floor(promoTime % 60);

      countdown.innerHTML = `Time: ${format(hour)}hr : ${format(
        minute
      )}min : ${format(second)}`;
    }
  }, 1000);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}
startCountdown();
