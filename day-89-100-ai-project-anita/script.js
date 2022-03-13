const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const speechBtnDiv = document.querySelector('#speech-btn');
const micBtn = document.querySelector('.btn .fas');
const instruction = document.querySelector('.instruction');

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const speechSynthesis = window.speechSynthesis;
const recognition = new speechRecognition();

if (speechRecognition && speechSynthesis) {
  micBtn.addEventListener('click', micBtnClicked);
  function micBtnClicked(e) {
    e.preventDefault();
    if (micBtn.classList.contains('fa-microphone')) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  //Start Speech Recognition
  recognition.addEventListener('start', () => {
    micBtn.classList.replace('fa-microphone', 'fa-microphone-slash');
    instruction.textContent = 'Recording... Press Ctrl + M to stop.';
    searchInput.focus();
  });

  //Stop Speech Recognition
  recognition.addEventListener('end', () => {
    micBtn.classList.replace('fa-microphone-slash', 'fa-microphone');
    instruction.textContent = 'Press Ctrl + X or Click the Mic icon to start';
    searchInput.focus();
  });

  recognition.continuous = true;

  speechRecognitionKeys();
  loadTranscript();
} else {
  speechBtnDiv.style.visibility = 'hidden';
}

//Speech Recognition Shortcuts function
function speechRecognitionKeys() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'x') {
      recognition.start();
    }
    if (e.ctrlKey && e.key === 'm') {
      recognition.stop();
    }
  });
}

//Load Transcript
function loadTranscript() {
  recognition.addEventListener('result', (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    showTranscript(transcript);

    for (let i = 0; i < lists.length; i++) {
      console.log(lists);
      let askedQuestion = transcript.toLowerCase().trim();
      if (lists[i].question.includes(askedQuestion)) {
        console.log(lists[i].question);
        respond(lists[i].answer);
        break;
      }
      if (askedQuestion !== lists[i].question && (i = 1)) {
        let errorMsg =
          'Apologies, I do not have enough data to answer this question at this time';
        respond(errorMsg);
        break;
      }
    }
  });
}

//Handle Response
function respond(res) {
  let voices = window.speechSynthesis.getVoices();

  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-US';
  speech.text = res;
  speech.volume = '2';
  speech.rate = '0.9';
  speech.pitch = '1';

  if (voices) {
    speech.voice = voices[2];
  } else {
    speech.voice = voices[1];
  }
  window.speechSynthesis.speak(speech);
}

//Show Transcript
function showTranscript(transcript) {
  if (transcript.toLowerCase().trim() === 'Stop Recording') {
    recognition.stop();
  } else if (!searchInput.value) {
    searchInput.value = transcript;
  } else {
    if (transcript.toLowerCase().trim() === 'search') {
      searchForm.submit();
    } else if (transcript.toLowerCase().trim() === 'reset form') {
      searchInput.value = '';
    } else {
      searchInput.value = transcript;
    }
  }
}
