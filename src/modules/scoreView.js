const scoreContainer = document.querySelector('.player-score-container');

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

export default viewScoreBoard;