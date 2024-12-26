
let score = 0;
let wickets = 0;
let overs = 0;
let balls = 0;

function updateScore(runs) {
    score += runs;
    balls++;
    if (balls === 6) {
        nextOver();
    } else {
        displayScore();
    }
}

function wicket() {
    wickets++;
    balls++;
    if (balls === 6) {
        nextOver();
    } else {
        displayScore();
    }
}

function nextOver() {
    overs++;
    balls = 0;
    displayScore();
}

function displayScore() {
    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.textContent = `Team A: ${score}/${wickets} (${overs}.${balls} overs)`;
}

displayScore();
