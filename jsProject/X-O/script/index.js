let player1Name, player2Name, currentPlayer, board, score;

function startGame() {
    player1Name = document.getElementById("player1").value || "Player 1";
    player2Name = document.getElementById("player2").value || "Player 2";

    document.getElementById("start-menu").style.display = "none";
    document.getElementById("game").style.display = "flex";
    score = { [player1Name]: 0, [player2Name]: 0 };
    initializeGame();
    updateScore();
}

function initializeGame() {
    currentPlayer = player1Name;
    board = ['', '', '', '', '', '', '', '', ''];


    document.getElementById("current-player").innerText = `Current Player: ${currentPlayer}`;
    updateScore();

    createBoard();
}

function createBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        cell.addEventListener("click", () => cellClicked(i));
        boardElement.appendChild(cell);
    }
}

function cellClicked(index) {
    if (board[index] === '') {
        board[index] = (currentPlayer === player1Name) ? "X" : "O";
        updateBoard();
        checkWinner();

        currentPlayer = (currentPlayer === player1Name) ? player2Name : player1Name;
        document.getElementById("current-player").innerText = `Current Player: ${currentPlayer}`;
    }
}

function updateBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            score[currentPlayer]++;
            updateScore();
            displayWinnerMessage();
            return;
        }
    }

    if (board.every(cell => cell !== '')) {
        displayWinnerMessage(true); // It's a draw
    }
}

function updateScore() {
    document.getElementById("score").innerText = `${player1Name}: ${score[player1Name]} | ${player2Name}: ${score[player2Name]}`;
}

function displayWinnerMessage(isDraw = false) {
    const winnerMessage = document.getElementById("winner-message");
    if (isDraw) {
        winnerMessage.innerText = "It's a draw!";
    } else {
        winnerMessage.innerText = `${currentPlayer} wins!`;
    }

    document.getElementById("winner-modal").style.display = "flex";
}

function restartGame() {
    document.getElementById("winner-modal").style.display = "none";
    initializeGame();
}

function returnToStartMenu() {
    document.getElementById("winner-modal").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("start-menu").style.display = "flex";
}