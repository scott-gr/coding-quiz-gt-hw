// Start Button on homepage
var buttonStart = document.querySelector('#btnStart');
// fills in question text
var question = document.querySelector('questionText');
//Buttons for choices A, B, C, D
var buttonA = document.querySelector('#btnA');
var buttonB = document.querySelector('#btnB');
var buttonC = document.querySelector('#btnC');
var buttonD = document.querySelector('#btnD');
// button to continue to scoreboard
var buttonEnd;
//button to add name to scoreboard
var buttonName,
// global var for each 'page', so they can be toggled to hide/show in functions
var homePage = document.querySelector('homepage');
var quizPage = document.querySelector('question1');
var scorePage = document.querySelector('scorepage');
//starting score/timer, may move this into specific function
var scoreCount = 60;
var finalScore ;
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

//function scoreTimer
// if scoreCount = 0, end the quiz (gameOver function)
//show timer element when quiz starts
//hide timer element qhen quiz ends
//scoreCount = finalScore at end of quiz

//function askQuestion
//finalscore = finalscore + scoreCount 
//if currentQuestion < 5, continue
///set question and answer text values to current question
///call checkanswer function
///else gameOver

//checkanswer function
//if chosen answer = question
///display Correct
///else 
///display wrong
/// scorecount -=15
//currentQuestion ++ 

//gameOver function
//hide quizpage div
//show endpage
//display final score
//display text Quiz Complete, your score is
// display submit score button
//display play again button?

//scoreBoard function
//hide endpage
//show scorepage
// parse local storage and add to scoreboard html
// prompt enter name
//click button to add name
//adds name and score to scoreboard
//saves to localstorage
//display play again button
// 

//Event listeners
buttonStart.addEventListener('click', function () {
  //start timer
  // hide homepage div
  //show quizpage div
  //set currentquestion to 1
});
//Button A click event listener
buttonA.addEventListener('click', function () {
  //checkanswer function for current question, choose answer A
});
//Button B click event listener
buttonB.addEventListener('click', function () {
  //checkanswer function for current question, choose answer B
});
//Button C click event listener
buttonC.addEventListener('click', function () {
  //checkanswer function for current question, choose answer C
});
//Button D click event listener
buttonD.addEventListener('click', function () {
  //checkanswer function for current question, choose answer D
});

//event listener for adding name to scoreboard
