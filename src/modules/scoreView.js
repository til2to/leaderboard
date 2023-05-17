// render the table content
const viewScoreBoard = (playerScores) => {
  const scoreContainer = document.querySelector('.player-score-container');
  let score = '';
  playerScores.forEach((player) => {
    score += `
      <li class="each-player">
        ${player.user}: ${player.score}
      </li>
    `;
  });
  scoreContainer.innerHTML = score;
};

export default viewScoreBoard;