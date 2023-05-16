import './style.css';
// import viewScoreBoard from './modules/scoreView.js';

const scoreContainer = document.querySelector('.player-score-container');
const playerScores = [
  { name: 'name', score: 100 },
  { name: 'name', score: 20 },
  { name: 'name', score: 50 },
  { name: 'name', score: 78 },
  { name: 'name', score: 125 },
  { name: 'name', score: 77 },
  { name: 'name', score: 42 },
];

// dynamically populate todo player name and score
const viewScoreBoard = (playerScores) => {
  let score = '';
  playerScores.forEach((player) => {
    score += `
      <li class="each-player">
        ${player.name}: ${player.score}
      </li>
    `;
  });
  scoreContainer.innerHTML = score;
};

viewScoreBoard();