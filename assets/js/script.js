// Start Quiz (on click- go to question screen)
var startButton = document.querySelector(".start-button");
var currentQuestion = 0;
var answerSection = document.querySelector(".answer-section");
var timeLeft = 60;
var timerDiv = document.querySelector("#timer");

//Start timer when question page is loaded

// Feed in questions to placeholder through arrays
    // Questions array:
var quizQuestions = [
    {
      question: 'Commonly used data types DO Not Include:',
      answers: [
        "a: strings",
        "b: booleans",
        "c: alerts",
        "d: numbers",
        ],
      correctAnswer: "3"
    },
    {
      question: 'The condition in an if / else statement is enclosed with _____.',
      answers: [
        "a: quotes",
        "b: curly brackets",
        "c: parenthesis",
        "d: square brackets",
      ],
      correctAnswer: "2"
    },
    {
      question: 'Arrays in JavaScript can be used to store _____.',
      answers: [
        "a: numbers and strings",
        "b: other arrays",
        "c: booleans",
        "d: all of the above",
      ],
      correctAnswer: "3"
    },
    {
      question: 'String values must be enclosed within _____ when being assigned to variables.',
      answers: [
        "a: commas",
        "b: curly brackets",
        "c: quotes",
        "d: parenthesis",
      ],
      correctAnswer: "2"
    },
    {
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      answers: [
        "a: JavaScript",
        "b: terminal/bash",
        "c: for loops",
        "d: console.log",
      ],
      correctAnswer: "3"
    }
];
timerDiv.textContent = 'Time: '+ timeLeft;
var countdown = function() {
  timerDiv.textContent = 'Time: '+ timeLeft;
  timeLeft--
}

var nextQuestion = function() {
  var button1 = document.getElementById("0");
  var button2 = document.getElementById("1");
  var button3 = document.getElementById("2");
  var button4 = document.getElementById("3");
  button1.textContent = quizQuestions[currentQuestion].answers[0];
  button2.textContent = quizQuestions[currentQuestion].answers[1];
  button3.textContent = quizQuestions[currentQuestion].answers[2];
  button4.textContent = quizQuestions[currentQuestion].answers[3];
}

var checkAnswer = function(event) {
  var chosenAnswer = this.getAttribute("id");
  if (chosenAnswer == quizQuestions[currentQuestion].correctAnswer) {
      alert("Correct")
  } else {
    alert("Incorrect");
    timeLeft - 10;
  }
  currentQuestion++
  nextQuestion()
}

var firstQuestion = function() {
    setInterval(countdown,1000);
    var questionText = document.querySelector(".question-text");
    questionText.textContent = quizQuestions[0].question;
    for (let i = 0; i < quizQuestions[0].answers.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[0].answers[i];
        answerButton.setAttribute("id", i);
        answerSection.appendChild(answerButton);
        answerButton.addEventListener("click", checkAnswer);
    }
    startButton.setAttribute("class", "hidden")
}

startButton.addEventListener("click", firstQuestion);

// Display correct/incorrect under question

// Go to next question screen (on answer click)

// Score quiz

// Take off time for incorrect answers

// End game when timer reaches 0

// High Score List (save to local storage, pull from local storage)

// Go back or view high scores on click (is this HTML or JS?)