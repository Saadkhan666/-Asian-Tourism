
let score = 0;
let wickets = 0;
let balls = 0;

function updateScore(runs) {
    score += runs;
    balls++;
    updateDisplay();
}

function wicket() {
    wickets++;
    balls++;
    updateDisplay();
}

function resetMatch() {
    score = 0;
    wickets = 0;
    balls = 0;
    updateDisplay();
}

function updateDisplay() {
    const overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("score").textContent = `${score}/${wickets}`;
    document.getElementById("overs").textContent = overs;
}
    