const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

function setColor() {
  bgColor.classList.add('online');
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      `'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' +
        new Date().getTime()`
    );
    image.src = './img/online.png';
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (err) {
    console.error(err);
    statusDisplay.textContent = 'OOPS! Your internet connection is down.';
    image.src = './img/offline.png';
    bgColor.classList.remove('online');
  }
}

//Moniter the connection

setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You're online! Connection looks good";
    setColor();
  }
}, 5000);

//Check connection when page loads
window.addEventListener('load', async (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = 'Online';
  } else {
    statusDisplay.textContent = 'Offline';
  }
});