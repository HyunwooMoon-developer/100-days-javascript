let input = document.querySelector('.input');
let character = document.querySelector('.character');
let word = document.querySelector('.word');
let readingTime = document.querySelector('.reading-time');
let wordLimit = document.querySelector('.word-limit');
let word_limit = 10;

input.addEventListener('keyup', characterCount);
input.addEventListener('keyup', wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    word.innerHTML = words.length;
    wordLimit.innerHTML = word_limit - words.length;
  } else {
    word.innerHTML = 0;
  }

  input.addEventListener('keydown', function (e) {
    words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      if (words.length > word_limit - 1 && e.code !== 'Backspace') {
        e.preventDefault();
        console.log('Word limit reached');
      }
    }
  });
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + 'm' + seconds + 's';
    } else {
      readingTime.innerHTML = seconds + 's';
    }
  } else {
    readingTime.innerHTML = '0s';
  }
}
