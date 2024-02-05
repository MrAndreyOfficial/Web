const scoreText = document.getElementById('score-text');

let score = 0;

export function increaseScore() {
    score++;
    updateText();
}

export function decreaseScore() {
    score--;
    updateText();
}

export function updateText() {
    scoreText.textContent = score;
}
