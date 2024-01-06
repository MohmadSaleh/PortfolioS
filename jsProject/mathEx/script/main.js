let equationType, difficulty, currentEquation, score = 0, playerName, correctAnswer, scores = []
    , rightAnswer = ['Good Job', 'Great Answer', 'Bulls Eye', 'Exellent', 'Einstein?'];



function startGame() {
    playerName = document.getElementById("player-name").value;
    equationType = document.getElementById("equation-type").value;
    difficulty = document.getElementById("difficulty").value;
    score = 0;
    updateScoreBoard();
    generateEquation();
    document.getElementById("start-menu").style.display = "none";
    document.getElementById("math-board").style.display = "block";
}

function generateEquation() {
    let num1 = generateNumber(difficulty);
    let num2 = generateNumber(difficulty);

    switch (equationType) {
        case "addition":
            currentEquation = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case "subtraction":
            currentEquation = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case "multiplication":
            currentEquation = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case "division":
            if (num1 == 0) { num1 = generateNumber(difficulty) }
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            currentEquation = `${num1} / ${num2}`;
            correctAnswer = Math.floor((num1 / num2) * 100);
            correctAnswer = (+correctAnswer / 100);

            break;
        case "random":
            const randomType = Math.floor(Math.random() * 4);
            switch (randomType) {
                case 0:
                    currentEquation = `${num1} + ${num2}`;
                    correctAnswer = num1 + num2;
                    break;
                case 1:
                    currentEquation = `${num1} - ${num2}`;
                    correctAnswer = num1 - num2;
                    break;
                case 2:
                    currentEquation = `${num1} * ${num2}`;
                    correctAnswer = num1 * num2;
                    break;
                case 3:
                    if (num1 == 0) { num1 = generateNumber(difficulty) }
                    num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
                    currentEquation = `${num1} / ${num2}`;
                    correctAnswer = Math.floor((num1 / num2) * 100);
                    correctAnswer = (+correctAnswer / 100);
                    break;
            }
            break;
    }

    document.getElementById("equation").innerText = currentEquation;
}

function generateNumber(difficulty) {
    switch (difficulty) {
        case "easy":
            return (2 * score) + Math.floor(Math.random() * (10 * (score + 1)));
        case "medium":
            return (25 * score) + Math.floor(Math.random() * (50 * (score + 1)));
        case "hard":
            return (50 * score) + Math.floor(Math.random() * (100 * (score + 1)));
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value;
    console.log("**" + userAnswer);

    if (+userAnswer === (correctAnswer)) {
        score = 1 + score * 2;
        document.getElementById('game-popup').innerHTML = `<h2>${rightAnswer[Math.floor(Math.random() * 5)]}</h2>`;
        setTimeout(() => { document.getElementById('game-popup').innerHTML = `` }, 1500);
        generateEquation();
    }
    else if (userAnswer == '') {
        document.getElementById('game-popup').innerHTML = `
        <h2> Please Enter an answer </h2>
        `
        setTimeout(() => { document.getElementById('game-popup').innerHTML = `` }, 3000);
    }
    else {
        updateScoreBoard();
        endGame();
    }

    document.getElementById("answer-input").value = "";
}


function endGame() {

    document.getElementById("math-board").style.display = "none";
    document.getElementById('game-popup').innerHTML = `
            <h2>Game Over!</h2>
            <p>Your final score is ${score}</p>
            <button onclick="showMainMenu()">Return to Main Menu</button>`
    document.getElementById("game-popup").style.display = "block";
}

function showMainMenu() {
    document.getElementById("game-popup").style.display = "none";
    document.getElementById("start-menu").style.display = "block";
}

function updateScoreBoard() {
    const entry = { namee: playerName, type: equationType, scoree: score };
    if (score == 0) { return };
    scores = getHighScores();
    scores.push(entry);

    // Sort scores by highest to lowest
    scores.sort((a, b) => b.scoree - a.scoree);
    if (scores.length == 11) {
        scores.pop();
    }

    // Display the scores
    document.getElementById("high-scores-list").innerHTML = ""; // Clear previous scores
    for (let s of scores) {
        document.getElementById("high-scores-list").innerHTML +=
            `
       <tr>
         <th>${s.namee}</th>
         <th>${s.type}</th>
         <th>${s.scoree}</th>
        </tr>
     `
    };

    saveHighScores(scores);
}

function getHighScores() {
    const storedScores = localStorage.getItem("mathSolverScores");
    return storedScores ? JSON.parse(storedScores) : [];
}

function saveHighScores(scores) {
    localStorage.setItem("mathSolverScores", JSON.stringify(scores));
}

function clearScoreBoard() {
    localStorage.removeItem('mathSolverScores');
}