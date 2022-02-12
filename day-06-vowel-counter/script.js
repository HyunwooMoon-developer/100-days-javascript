const btn = document.querySelector('.btn'),
  word = document.querySelector('.input-text'),
  result = document.querySelector('.result');

btn.addEventListener('click', countVowel);

function countVowel() {
  let count = 0;
  let wordVal = word.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      count++;
    }
  }
  result.innerHTML = `${wordVal.toUpperCase()} has ${count} vowels!`;
}
