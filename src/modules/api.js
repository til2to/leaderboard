const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// send your name and score to create game records
const gameRecords = async (data, gameId) => {
  try {
    const response = await fetch(`${baseUrl}/${gameId}/scores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Request failed');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// get all your game rocords
const getScores = async (gameId) => {
  try {
    const response = await fetch(`${baseUrl}/${gameId}/scores`);
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    const responseData = await response.json();
    localStorage.setItem('game', JSON.stringify(responseData.result));
  } catch (error) {
    throw new Error(error.message);
  }
};

export { gameRecords, getScores };
