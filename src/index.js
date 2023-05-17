import './style.css';
import viewScoreBoard from './modules/scoreView.js';
import { gameRecords, getScores } from './modules/api.js';

const user = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const submitButton = document.querySelector('.add-score-btn');
const refreshButton = document.querySelector('.score-title-refresh-button');
const scoreContainer = document.querySelector('.player-score-container');
const scoreError = document.getElementById('score-error');

if (JSON.parse(localStorage.getItem('game')) === null || JSON.parse(localStorage.getItem('game')) === undefined) {
  localStorage.setItem('game', JSON.stringify([]));
}

let playerScores = JSON.parse(localStorage.getItem('game'));

// When the collection/array of game is empty
document.addEventListener('DOMContentLoaded', () => {
  const showMessage = (message) => {
    const messageElement = document.createElement('div');
    messageElement.id = 'no-records'; // Set the id property
    messageElement.textContent = message;
    scoreContainer.appendChild(messageElement);
  };

  if (playerScores.length === 0) showMessage('Add name and score to get records');
});

// get data from local storage
const getDataFromLocalStorage = async (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    throw new Error('Error retrieving data:', error);
  }
};

// wait for the data from the local storage:
(async () => {
  try {
    const data = await getDataFromLocalStorage('game');
    playerScores = data;
  } catch (error) {
    throw new Error(error.message);
  }
})();

// dynamically populate player(s) name(s) and score(s)
viewScoreBoard(playerScores);

// game id from the base url after creating a game
const gameId = 'RjzW48SVVXfyYdn4ZcKx';

// add score and player/user
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const score = scoreInput.value;
  const username = user.value;
  const data = {
    user: username,
    score,
  };
  try {
    // validate by name if player exist
    const isExistingPlayer = playerScores.some((player) => player.user === username);
    // validate the form submission
    if (!score || !username || isExistingPlayer) {
      e.preventDefault();
      scoreError.textContent = 'Please fill in the fields or player already exist'; // Display error message
    }
    await gameRecords(data, gameId);
    playerScores.push(data); // Add the new score to the local array
    viewScoreBoard(playerScores);
  } catch (error) {
    throw new Error(error.message);
  }
});

// handle refresh functionality
refreshButton.addEventListener('click', async () => {
  try {
    await getScores(gameId);
    playerScores = JSON.parse(localStorage.getItem('game')); // Update the local array with new data
    viewScoreBoard(playerScores);
  } catch (error) {
    throw new Error(error.message);
  }
});