import './style.css';
import viewScoreBoard from './modules/scoreView.js';

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
viewScoreBoard(playerScores);