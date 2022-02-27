const thumbnail = document.getElementsByClassName('thumbnail');
const slider = document.getElementById('slider');
const nextButton = document.getElementById('slide-right');
const prevtButton = document.getElementById('slide-left');

nextButton.addEventListener('click', () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

prevtButton.addEventListener('click', () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

function autoPlay() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener('mouseover', () => {
    clearInterval(play);
  });
  thumbnail[i].addEventListener('mouseout', () => {
    return (play = setInterval(autoPlay, 10));
  });
}
