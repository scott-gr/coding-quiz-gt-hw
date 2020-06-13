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
var buttonName;
//button to play again
var buttonReplay;
// global var for each 'page', so they can be toggled to hide/show in functions
var homePage = document.querySelector('#homepage');
var quizPage = document.querySelector('#questions');
// var overPage = document.querySelector('')
var scorePage = document.querySelector('#scoreBoard');
//starting score/timer, may move this into specific function
var scoreCount = 60;
var timer = document.querySelector('#scoreDisplay');
var yourScore = document.querySelector('#gameOverScore');
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
// function to run timer
function scoreTimer(){
  var scoreInterval = setInterval(function () {
    //subtracts 1 second
    scoreCount--;
    timer.textContent = scoreCount + ' seconds remain  ';
    //when timer hits zero, end the game
    if (scoreCount <= 0) {
      clearInterval(scoreInterval);
      endGame();
    }
  }, 1000);
}

function askQuestions(){
  homePage.classList.add('hide');
  quizPage.classList.remove('hide');
}
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

// When the game is over, by completing questions or running out of time, this function ends the game and reports the final score
  function endGame(){
    yourScore = 'Final Score:' + scoreCount;
    quizPage.classList.add('hide');
    timer.classList.add('hide');
    overPage.classList.remove('hide');
  }

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
  scoreTimer();
  askQuestions();
});
// //Button A click event listener
// buttonA.addEventListener('click', function () {
//   //checkanswer function for current question, choose answer A
// });
// //Button B click event listener
// buttonB.addEventListener('click', function () {
//   //checkanswer function for current question, choose answer B
// });
// //Button C click event listener
// buttonC.addEventListener('click', function () {
//   //checkanswer function for current question, choose answer C
// });
// //Button D click event listener
// buttonD.addEventListener('click', function () {
//   //checkanswer function for current question, choose answer D
// });

// // buttonEnd.addEventListener('click', function(){
// // // advances from gameover page to scoreboard
// // });

// buttonReplay.addEventListener('click', function(){

// });

//event listener for adding name to scoreboard
