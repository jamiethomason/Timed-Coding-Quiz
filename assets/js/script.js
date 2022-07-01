// Start Quiz (on click- go to question screen)
var startButton = document.getElementsByClassName("start-button");
startButton.addEventListener("click",firstQuestion());

//Start timer when question page is loaded

var startTimer = document.getElementById("timer");
startButton.addEventListener("click","timer");

// Feed in questions to placeholder through arrays
    // Questions array:
var quizQuestions = [
    {
      question: 'Commonly used data types DO Not Include:',
      answers: {
        a: "1. strings",
        b: "2. booleans",
        c: "3. alerts",
        d: "4. numbers",
      },
      correctAnswer: "d"
    },
    {
      question: 'The condition in an if / else statement is enclosed with _____.',
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
      },
      correctAnswer: "c"
    },
    {
      question: 'Arrays in JavaScript can be used to store _____.',
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
      },
      correctAnswer: "d"
    },
    {
      question: 'String values must be enclosed within _____ when being assigned to variables.',
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
      },
      correctAnswer: "c"
    },
    {
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      answers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
      },
      correctAnswer: "d"
    }
];

function firstQuestion() {
    var questionText=getElementsByClassName("question-text");
    questionText.textContent=quizQuestions[0].question;
}

// Display correct/incorrect under question

// Go to next question screen (on answer click)

// Score quiz

// Take off time for incorrect answers

// End game when timer reaches 0

// High Score List (save to local storage, pull from local storage)

// Go back or view high scores on click (is this HTML or JS?)