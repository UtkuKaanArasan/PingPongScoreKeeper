const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const p1Display = document.querySelector("#p1display")
const p2Display = document.querySelector("#p2display")
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#rounds");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function resetScore() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    isGameOver = false;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}

p1Button.addEventListener("click", function (e) {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        
        p1Display.textContent = p1Score
    }
})

p2Button.addEventListener("click", function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score
    }
})


reset.addEventListener("click", resetScore)

winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(winningScoreSelect.value);
    resetScore()
})
