'use strict';

   //for select the element and store them in a variable...
 const current_Score = document.querySelector('.current-score');
 const score1 = document.querySelector('#score--0');
 const score2 = document.getElementById('score--1');
 const dicepic = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');
 //for automatically convert the element to 0...
score1.textContent = 0;
score2.textContent = 0;
dicepic.classList.add('hidden');
let currentScore = 0;
//rolling dice function..

btnRoll.addEventListener('click', function(){
    //first generate a random no btn 1 to 6..
    const diceNo = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNo)
    //then display the generated random number in the form of dice..
    dicepic.classList.remove('hidden');
    dicepic.src =  `dice-${diceNo}.png`;

    //store the generated random number..
    if(diceNo !== 1){ //then we are going to or stored the number..
        currentScore += diceNo;
        current_Score.textContent = currentScore;
    }
    else{  // switch the player if it is one.. 
  
    }
})