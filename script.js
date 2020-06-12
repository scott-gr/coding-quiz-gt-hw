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
var currentQuestion;

//Array of all questions and answers
var arrayQuestions = [
  //question 1
  {
    question: 'Commonly used data types DO NOT include:',
    buttonA: 'strings',
    buttonB: 'booleans',
    buttonC: 'alerts',
    buttonD: 'numbers',
    correct: 'alerts',
  },
  //question 2
  {
    question: 'The condition in an if/else statement is enclosed within _____.',
    buttonA: 'quotes',
    buttonB: 'curly brackets',
    buttonC: 'parentheses',
    buttonD: 'square brackets',
    correct: 'parentheses',
  },
  //question 3
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    buttonA: 'numbers and strings',
    buttonB: 'other arrays',
    buttonC: 'booleans',
    buttonD: 'all of the above',
    correct: 'all of the above',
  },
  //question 4
  {
    question:
      'String values must be enclosed within _____ when being assigned to variables.',
    buttonA: 'commas',
    buttonB: 'curly brackets',
    buttonC: 'quotes',
    buttonD: 'parentheses',
    correct: 'quotes',
  },
  //question 5
  {
    question:
      'A very useful tool used during development and debugging for printing content to the debugger is _____.',
    buttonA: 'JavaScript',
    buttonB: 'terminal/bash',
    buttonC: 'for loops',
    buttonD: 'console.log',
    correct: 'console.log',
  },
];

//function checkAnswer
//if clicked button === correct, text "You are correct!", advance to next question (var # of questions = index in array?)
  //else text "Sorry, that's incorrect", score -= 15, advance to next question

//function quizbegin
//if Start Quiz button pressed,
//hide homepage div
//advanced to quizPage div



//function endq
//show scorePage
//...
