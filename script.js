// Start Button on homepage
var startQuiz = document.querySelector('#btnStart');
//Buttons for choices A, B, C, D
var buttonA = document.querySelector('#btnA');
var buttonB = document.querySelector('#btnB');
var buttonC = document.querySelector('#btnC');
var buttonD = document.querySelector('#btnD');
// global var for each 'page', so they can be toggled to hide/show in functions
var homePage = document.querySelector('homepage');
var quizPage = document.querySelector('question1');
var scorePage = document.querySelector('scorepage');
//starting score/timer, may move this into specific function
var scoreCount = 60;

var arrayQuestions = [
  {
    question: 'Commonly used data types DO NOT include:',
    buttonA: 'strings',
    buttonB: 'booleans',
    buttonC: 'alerts',
    buttonD: 'numbers',
    correct: 'C',
  },
  {
    question: 'The condition in an if/else statement is enclosed within _____.',
    buttonA: 'quotes',
    buttonB: 'curly brackets',
    buttonC: 'parentheses',
    buttonD: 'square brackets',
    correct: 'C',
  },
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    buttonA: 'numbers and strings',
    buttonB: 'other arrays',
    buttonC: 'booleans',
    buttonD: 'all of the above',
    correct: 'D',
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    buttonA: 'commas',
    buttonB: 'curly brackets',
    buttonC: 'quotes',
    buttonD: 'parentheses',
    correct: 'C',
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is _____.',
    buttonA: 'JavaScript',
    buttonB: 'terminal/bash',
    buttonC: 'for loops',
    buttonD: 'console.log',
    correct: 'D',
  },
];
// in html id="Question"

// function setQuestion() {
//   document.getElementById('QuestionSet').innerHTML = '';
//   var question = document.createElement('question');
//   question.setAttribute(arrayQuestions[0].question);

//function quizbegin
//if Start Quiz button pressed,
//hide homepage
//advanced to quizPage

//function quiz
//show quizPage
// If incorrect answer buttons ( a || b || c ...) pressed,
//scoreTimer -= 15
//replace question and button text
//advance to question 2
//else if correct answer button pressed
//replace question and button text
//advance to question 2

//function endq
//show scorePage
//...
