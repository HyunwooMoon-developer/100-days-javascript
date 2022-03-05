const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const speechBtnDiv = document.querySelector('#speech-btn');
const micBtn = document.querySelector('.btn .fas');
const instruction = document.querySelector('.instruction');

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//Check for browser support

if (speechRecognition) {
  const recognition = new speechRecognition();

  micBtn.addEventListener('click', micBtnClick);
  function micBtnClick(e) {
    e.preventDefault();
    if (micBtn.classList.contains('fa-microphone')) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  //Start Speech Recognition
  recognition.addEventListener('start', () => {
    micBtn.classList.remove('fa-microphone');
    micBtn.classList.add('fa-microphone-slash');
    instruction.textContent = 'Recording : Press Ctrl + m to Stop';
    searchInput.focus();
  });

  //Stop Speech Recognition
  recognition.addEventListener('end', () => {
    micBtn.classList.remove('fa-microphone-slash');
    micBtn.classList.add('fa-microphone');
    instruction.textContent = 'Press Ctrl + x or Click the Mic icon to start';
    searchInput.focus();
  });

  //Get Result of Speech Recognition
  recognition.continuous = true;
  recognition.addEventListener('result', (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === 'Stop Recording') {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === 'Search') {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === 'Reset Form') {
        searchInput.value = '';
      } else {
        searchInput.value = transcript;
      }
    }
  });

  //Add Keyboard Event Listner
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'x') {
      recognition.start();
    }
    if (e.ctrlKey && e.key === 'm') {
      recognition.stop();
    }
  });
} else {
  speechBtnDiv.style.visibility = 'hidden';
}
