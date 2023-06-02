'use strict';

   //for select the element and store them in a variable...
 const player0  = document.querySelector('.player--0');
 const player1  = document.querySelector('.player--1');
 const current0 = document.getElementById('current--0');
 const current1 = document.getElementById('current--1');
 const score1 = document.getElementById('score--0');
 const score2 = document.getElementById('score--1');
 const dicepic = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');
 //for automatically convert the element to 0...

let scores;
let currentScore ;
let activePlayer;
let playing ;
const initializeFunction = function() {
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;
     
     score1.textContent = 0;
     score2.textContent = 0;
     current0.textContent = 0;
     current1.textContent = 0;
     dicepic.classList.add('hidden');


    
     
     document.querySelector('.player--1').classList.remove('player--winner');
     document.querySelector('.player--1').classList.add('player--active');
     document.querySelector('.player--0').classList.remove('player--active');
     document.querySelector('.player--0').classList.remove('player--winner');
     
}
initializeFunction()

//switching function..
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent  = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;  //switching the players
    currentScore =0;
    player0.classList.toggle('player--active'); //which is for changing the ui btn the player 1 and player 0.
    player1.classList.toggle('player--active');
}
//rolling dice function..
btnRoll.addEventListener('click', function(){
    if(playing){
    //first generate a random no btn 1 to 6..
    const diceNo = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNo)
    //then display the generated random number in the form of dice..
    dicepic.classList.remove('hidden');
    dicepic.src =  `dice-${diceNo}.png`;

    //store the generated random number..
    if(diceNo !== 1){ //then we are going to or stored the number..
        currentScore += diceNo;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; //this one is for making it more  dynamic..
        // current_Score.textContent = currentScore;
    }
    else if(diceNo === 1){  // switch the player if it is one.. 
      switchPlayer();
    }
    }
})
btnHold.addEventListener('click', function(){
    if(playing){
    //store a current score at player-1...
     scores[activePlayer] += currentScore;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //then check it if it is greater than 100;
    if(scores[activePlayer] >= 10){
        playing = false;
        dicepic.classList.remove('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{

    //switch the player...
    switchPlayer();
    }

   }
})
btnNew.addEventListener('click', initializeFunction)