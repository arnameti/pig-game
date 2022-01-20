'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;

const switchPlayer = function () {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
} 

btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  diceEl.src = `dice-${dice}.png`;

  currentScore += dice;

  if (dice !== 1) {
    activePlayer === 0
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);

  } else {
    switchPlayer();
    
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
  }

});

btnHold.addEventListener('click', function() {
  if (activePlayer === 0) {
    scores[0] += currentScore;
    score0El.textContent = scores[0];
    currentScore = 0;
    current0El.textContent = currentScore
    switchPlayer();

  } else {
    scores[1] += currentScore;
    score1El.textContent = scores[1];
    currentScore = 0;
    current1El.textContent = currentScore
    switchPlayer();
  }
})

