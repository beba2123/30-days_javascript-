'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number.!"; //changing the text-content using the dom manupilation.
// //console.log(document.querySelector(".message").textContent); //then print out the changing text

// document.querySelector(".number").textContent = 4;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let GuessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const Eventhandler = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = ' NO Number ... ';
  } else if (guess === GuessNumber) {
    document.querySelector('.message').textContent = 'Correct Number.!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = GuessNumber; 
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > GuessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too  Higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' you lost.. ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < GuessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' you lost.. ';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', Eventhandler);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  GuessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start guessing... ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
