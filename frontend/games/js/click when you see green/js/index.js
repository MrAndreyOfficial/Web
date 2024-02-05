import generateRandomColor from './color.js';
import { activateGameOver, isGameOver } from './gameover.js';

import { decreaseScore, increaseScore } from './score.js';

const clickButton = document.getElementById('click-btn');
const resetButton = document.getElementById('reset-btn');
const tip = document.getElementById('tip');

const gamePanel = document.getElementById('game-panel');
const gameOverPanel = document.getElementById('gameover-panel');

let attempts = 5;

setInterval(() => {
    if (isGameOver) {
        return;
    }

    const color = generateRandomColor();

    clickButton.style.backgroundColor = color;
}, parseInt(Math.random() * 1000));

clickButton.addEventListener('click', () => {
    tip.style.display = 'none';

    if (attempts <= 0) {
        activateGameOver();

        gamePanel.style.display = 'none';
        gameOverPanel.style.display = 'flex';
        return;
    }

    if (clickButton.style.backgroundColor !== 'green') {
        decreaseScore();

        attempts--;
        return;
    }

    increaseScore();
});

resetButton.addEventListener('click', () => location.reload());
