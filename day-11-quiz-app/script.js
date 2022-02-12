//Create a Quiz Class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCoorectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

//Create a Question class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCoorectAnswer(choices) {
    return this.answer === choices;
  }
}

//Display the Questions

function displayQuestion() {
  if (quiz.isEnded()) {
    showScore();
  } else {
    //show question
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    //show option
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById('choice' + i);
      choiceElement.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }
    showProgress();
  }
}

//Guess Answer

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

//Show Quiz progress
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById('progress');
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//Show Scores
function showScore() {
  let quizEndHTML = `<h1>Quiz is End</h1>
  <h2 id="score">You got ${quiz.score} of ${quiz.questions.length}</h2>
  <div class="quiz-repeat">
    <a href="index.html">Restart</a>
  </div>
  `;
  let quizElement = document.getElementById('quiz');
  quizElement.innerHTML = quizEndHTML;
}

//Create Question
let questions = [
  new Question(
    'Hyper Text Markup Language Stands For?',
    ['jQuery', 'Angular', 'HTML', 'CSS'],
    'HTML'
  ),
  new Question(
    'Cascading Style Sheet Stand For?',
    ['CSS', 'JavaScript', 'XML', 'HTTPS'],
    'CSS'
  ),
  new Question(
    'Which is JavaScript Framework?',
    ['React', 'Sass', 'Laravel', 'Django'],
    'React'
  ),
  new Question(
    'Which is a backend language?',
    ['PHP', 'HTML', 'React', 'All'],
    'PHP'
  ),
  new Question(
    'Which is best for Artificial intelligence?',
    ['Python', 'Sass', 'React', 'Django'],
    'Python'
  ),
];

let quiz = new Quiz(questions);

displayQuestion();

let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById('count-down');

function startCountdown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScore();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `Time: ${min} : ${sec}`;
    }
  }, 1000);
}

startCountdown();
