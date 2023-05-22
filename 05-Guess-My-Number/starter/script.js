"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number.!"; //changing the text-content using the dom manupilation.
// //console.log(document.querySelector(".message").textContent); //then print out the changing text

// document.querySelector(".number").textContent = 4;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
const GuessNumber = Math.trunc(Math.random()*20)+1;
console.log(GuessNumber);


const Eventhandler = function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = " NO Number ... ";
  }
};

document.querySelector(".check").addEventListener("click", Eventhandler);
