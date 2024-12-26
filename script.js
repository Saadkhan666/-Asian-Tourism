
let teamA = { score: 0, wickets: 0, balls: 0 };
let teamB = { score: 0, wickets: 0, balls: 0 };
let currentTeam = teamA;

function updateScoreboard() {
    document.getElementById('teamA-score').textContent = teamA.score;
    document.getElementById('teamA-wickets').textContent = teamA.wickets;
    document.getElementById('teamA-overs').textContent = (teamA.balls / 6).toFixed(1);

    document.getElementById('teamB-score').textContent = teamB.score;
    document.getElementById('teamB-wickets').textContent = teamB.wickets;
    document.getElementById('teamB-overs').textContent = (teamB.balls / 6).toFixed(1);
}

function addRun(runs) {
    currentTeam.score += runs;
    nextBall();
}

function addWicket() {
    if (currentTeam.wickets < 10) {
        currentTeam.wickets += 1;
        nextBall();
    } else {
        alert('All out!');
    }
}

function addExtra(extraType) {
    currentTeam.score += 1;
    alert(extraType + ' added!');
}

function nextBall() {
    currentTeam.balls += 1;
    updateScoreboard();
}

updateScoreboard();
