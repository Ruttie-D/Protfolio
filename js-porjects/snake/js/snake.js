const wrapper = document.querySelector('.wrapper');
const playBoard = document.querySelector('.play-board');
const scoreElement = document.querySelector('.score');
const highestScoreElement = document.querySelector('.highest-score');
const controls = document.querySelectorAll('.controls i');
const gameOverContainer = document.querySelector('.game-over');
const okBtn = document.querySelector('.game-over button');

let foodX, foodY,
    snakeX = 5, snakeY = 10,
    velocityX = 0, velocityY = 0,
    snakeBody = [],
    gameOver = false,
    setIntervalId,
    score = 0,
    highestScore = localStorage.getItem('highest-score') || 0;

const foodGenerator = () => {
    foodX = Math.floor(Math.random() * 35) + 1;
    foodY = Math.floor(Math.random() * 35) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    wrapper.classList.add('hidden');
    gameOverContainer.classList.remove('hidden');
    document.addEventListener('keydown', replay);
}

const changeDirection = (e) => {
    switch (e.key) {
        case 'ArrowUp':
            velocityX = -1;
            velocityY = 0;
            break;
        case 'ArrowDown':
            velocityX = 1;
            velocityY = 0;
            break;
        case 'ArrowLeft':
            velocityX = 0;
            velocityY = -1;
            break;
        case 'ArrowRight':
            velocityX = 0;
            velocityY = 1;
            break;
    }
    initGame();
}

const initGame = () => {
    if (gameOver) {
        return handleGameOver();
    }
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY}"></div>`;
    highestScoreElement.innerHTML = `HIGHEST SCORE: ${highestScore}`;

    if (snakeX === foodX && snakeY === foodY) {
        foodGenerator();
        snakeBody.push([foodX, foodY]);
        score++;
        highestScore = highestScore >= score ? highestScore : score;
        localStorage.setItem('highest-score', highestScore);

        scoreElement.innerHTML = `SCORE: ${score}`;
        highestScoreElement.innerHTML = `HIGHEST SCORE: ${highestScore}`;
    }

    for (let i = snakeBody.length - 1; i >= 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

    if (snakeX <= 0 || snakeX > 35 || snakeY <= 0 || snakeY > 35) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}"></div>`;
        if (i !== 0 && snakeBody[0][0] === snakeBody[i][0] && snakeBody[0][1] === snakeBody[i][1]) {
            gameOver = true;
        }
    }

    playBoard.innerHTML = htmlMarkup;
}

const replay = (e) => {
    if (e.key === 'Enter') {
        location.reload();
    }
}

controls.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.className.includes('up')) {
            velocityX = -1;
            velocityY = 0;
        } else if (key.className.includes('down')) {
            velocityX = 1;
            velocityY = 0;
        } else if (key.className.includes('left')) {
            velocityX = 0;
            velocityY = -1;
        } else if (key.className.includes('right')) {
            velocityX = 0;
            velocityY = 1;
        }
    });
});

foodGenerator();
setIntervalId = setInterval(initGame, 100);

document.addEventListener('keydown', changeDirection);
okBtn.addEventListener('click', () => {
    location.reload();
});