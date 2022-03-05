const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

const speechBtnDiv = document.querySelector('#speech-btn');
const micBtn = document.querySelector('.btn .fas');
const instruction = document.querySelector('.instruction');

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
  const recognition = new speechRecognition();

  micBtn.addEventListener('click', micBtnClicked);
  function micBtnClicked(e) {
    e.preventDefault();
    if (micBtn.classList.contains('fa-microphone')) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  recognition.addEventListener('start', () => {
    micBtn.classList.remove('fa-microphone');
    micBtn.classList.add('fa-microphone-slash');
    instruction.textContent = 'Recording...';
    searchInput.focus();
  });

  recognition.addEventListener('end', () => {
    micBtn.classList.remove('fa-microphone-slash');
    micBtn.classList.add('fa-microphone');
    instruction.textContent = 'Click the Mic icon to start';
    searchInput.focus();
  });

  recognition.continuous = true;
  let content = '';
  recognition.addEventListener('result', (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content += transcript;
    searchInput.value = content;
    searchInput.focus();
  });
} else {
  speechBtnDiv.style.visibility = 'hidden';
}
