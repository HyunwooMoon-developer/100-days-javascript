const typedWord = document.querySelector('.typed-word');
const cursor = document.querySelector('.cursor');
const wordArray = [
  'Web Developer',
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Web Developer',
];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains('typing')) {
      cursor.classList.add('typing');
    }

    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove('typing');
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (letterIndex > 0) {
    if (!cursor.classList.contains('typing')) {
      cursor.classList.add('typing');
    }
    typedWord.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove('typing');
    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, newWordDelay);
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.style.display = 'none';
});
