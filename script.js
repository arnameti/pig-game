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
playing = true;


const showCurrentScore = currentScore => document.getElementById(`current--${activePlayer}`).textContent = currentScore;
const showAndSetCurrentScoreTo0 = currentScore => document.getElementById(`current--${activePlayer}`).textContent = currentScore;
const showScore = score => document.getElementById(`score--${activePlayer}`).textContent =
score;

const switchPlayer = function () {
  currentScore = 0;
  showAndSetCurrentScoreTo0(currentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  
};

diceEl.classList.add('hidden');



btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
   
    if (dice !== 1) {
      currentScore += dice;
      showCurrentScore(currentScore)
      
    } else {
      switchPlayer();
    }
  }
});


btnHold.addEventListener('click', function() {
  if (playing) {
    scores[activePlayer] += currentScore;
    showScore(scores[activePlayer]);

    if(scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    } else {
      switchPlayer();
    }

  }
})


