const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

document.getElementById('startingMenu').innerHTML += `<div> High Score: ${highScore}</div>`;

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    if (gameOver == true) {

        document.getElementById('gameoverWrapper').style.display = 'flex'
        document.getElementById('gameover').style.display = 'flex'
    }
    else {
        document.getElementById('gameoverWrapper').style.display = 'flex'
        document.getElementById('gameover').style.display = 'flex'
    }
}

const changeDirection = (e) => {
    // Changing diriction value based on key press
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if (gameOver) return handleGameOver();
    let food = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        food += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = food;
}

function startGame(difficalty) {
    if (difficalty == NaN || difficalty == undefined) {
        difficalty = 100;

    }
    document.getElementById('wrapperId').style.display = 'flex'
    document.getElementById('startingMenu').style.display = 'none'
    document.getElementById('gameoverWrapper').style.display = 'none'
    document.getElementById('gameover').style.display = 'none'
    gameOver = false;
    foodX;
    foodY;
    snakeX = 5, snakeY = 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    snakeBody[0] = [snakeX, snakeY]
    clearInterval(setIntervalId);
    updateFoodPosition();
    setIntervalId = setInterval(initGame, difficalty);
    document.addEventListener("keyup", changeDirection);
}
function startingMenu() {
    gameOver = false;
    foodX;
    foodY;
    snakeX = 5, snakeY = 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    snakeBody[0] = [snakeX, snakeY]
    document.getElementById('wrapperId').style.display = 'none'
    document.getElementById('gameoverWrapper').style.display = 'none'
    document.getElementById('gameover').style.display = 'none'
    document.getElementById('startingMenu').style.display = 'flex'


}
