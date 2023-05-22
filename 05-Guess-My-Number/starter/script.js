"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number.!"; //changing the text-content using the dom manupilation.
// //console.log(document.querySelector(".message").textContent); //then print out the changing text

// document.querySelector(".number").textContent = 4;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
const GuessNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = GuessNumber;
let score = 20;

const Eventhandler = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = " NO Number ... ";
  } else if (guess === GuessNumber) {
    document.querySelector(".message").textContent = "Correct Number.!";
  } else if (guess > GuessNumber) {
    if (score < 1) {
      document.querySelector(".message").textContent = " Too  Higher";
    score--;
    document.querySelector(".score").textContent = score;
    }else {
        document.querySelector(".message").textContent = " you lost.. ";
        document.querySelector(".score").textContent = 0;
    }
  } else if (guess < GuessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " Too LOW";
    score--;
    document.querySelector(".score").textContent = score;
    }else{
        document.querySelector(".message").textContent = " you lost.. ";
        document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check").addEventListener("click", Eventhandler);
