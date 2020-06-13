// Start Button on homepage
var buttonStart = document.querySelector('#btnStart');
// fills in question text
var question = document.querySelector('#questionText');
//Buttons for choices A, B, C, D
var buttonA = document.querySelector('#btnA');
var buttonB = document.querySelector('#btnB');
var buttonC = document.querySelector('#btnC');
var buttonD = document.querySelector('#btnD');
//inform user if they are correct or incorrect
var grade = document.querySelector('#confirm');
// button to continue to scoreboard
var buttonEnd;
//button to add name to scoreboard
var buttonName;
//button to play again
var buttonReplay;
// global var for each 'page', so they can be toggled to hide/show in functions
var homePage = document.querySelector('#homepage');
var quizPage = document.querySelector('#questions');
var overPage = document.querySelector('#gameOver');
var scorePage = document.querySelector('#scoreBoard');
//starting score/timer, may move this into specific function
var scoreCount = 60;
var timer = document.querySelector('#scoreDisplay');
var yourScore = document.querySelector('#gameOverScore');
var currentQuestion = 0;

//Array of all questions and answers
var arrayQuestions = [
  //question 1
  {
    qQ: 'Commonly used data types DO NOT include:',
    aA: 'strings',
    aB: 'booleans',
    aC: 'alerts',
    aD: 'numbers',
    correct: 'alerts',
  },
  //question 2
  {
    qQ: 'The condition in an if/else statement is enclosed within _____.',
    aA: 'quotes',
    aB: 'curly brackets',
    aC: 'parentheses',
    aD: 'square brackets',
    correct: 'parentheses',
  },
  //question 3
  {
    qQ: 'Arrays in JavaScript can be used to store _____.',
    aA: 'numbers and strings',
    aB: 'other arrays',
    aC: 'booleans',
    aD: 'all of the above',
    correct: 'all of the above',
  },
  //question 4
  {
    qQ:
      'String values must be enclosed within _____ when being assigned to variables.',
    aA: 'commas',
    aB: 'curly brackets',
    aC: 'quotes',
    aD: 'parentheses',
    correct: 'quotes',
  },
  //question 5
  {
    qQ:
      'A very useful tool used during development and debugging for printing content to the debugger is _____.',
    aA: 'JavaScript',
    aB: 'terminal/bash',
    aC: 'for loops',
    aD: 'console.log',
    correct: 'console.log',
  },
];
// function to run timer
function scoreTimer() {
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
//function to display questions and answers on each page
function askQuestions() {
  homePage.classList.add('hide');
  quizPage.classList.remove('hide');
  if (currentQuestion < 5) {
    question.textContent = arrayQuestions[currentQuestion].qQ;
    buttonA.textContent = arrayQuestions[currentQuestion].aA;
    buttonB.textContent = arrayQuestions[currentQuestion].aB;
    buttonC.textContent = arrayQuestions[currentQuestion].aC;
    buttonD.textContent = arrayQuestions[currentQuestion].aD;
  } else {
    endGame();
  }
};

function checkAnswer(answer) {
  if (answer === arrayQuestions[currentQuestion].correct) {
    grade.textContent = 'You got it!';
    grade.style.color = '#80bf22';
  } else {
    grade.textContent = 'Sorry, incorrect.';
    grade.style.color = '#ae1c09';
    scoreCount -= 15;
  }
  currentQuestion++;
  askQuestions();
}
//if chosen answer = question
///display Correct
///else
///display wrong
/// scorecount -=15
//currentQuestion ++

// When the game is over, by completing questions or running out of time, this function ends the game and reports the final score
function endGame() {
  yourScore.textContent = 'Final Score: ' + scoreCount;
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
//Button A click event listener
buttonA.addEventListener('click', function () {
  checkAnswer(arrayQuestions[currentQuestion].aA);
});
//Button B click event listener
buttonB.addEventListener('click', function () {
  checkAnswer(arrayQuestions[currentQuestion].aB);
});
//Button C click event listener
buttonC.addEventListener('click', function () {
  checkAnswer(arrayQuestions[currentQuestion].aC);
});
//Button D click event listener
buttonD.addEventListener('click', function () {
  checkAnswer(arrayQuestions[currentQuestion].aD);
});

// buttonEnd.addEventListener('click', function(){
// // advances from gameover page to scoreboard
// });

// buttonReplay.addEventListener('click', function(){

// });

//event listener for adding name to scoreboard
