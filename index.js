let grid = document.getElementById("grid");
let startButton = document.querySelector("#start");
let resetButton = document.querySelector("#reset");
let resultElement = document.querySelector("#result");
let counter = 0;
let turnedCards = [];
let score = 0

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

function startGame() {
    resultElement.innerText = score;
    startButton.disabled = true;
    cardArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.src = "./images/blank.png";
        card.id = i.toString();
        card.addEventListener("click", turnCard)
        grid.appendChild(card);
    }
}

function resetGame() {
    grid.textContent = "";
    startButton.disabled = false;
    score = 0;
    resultElement.innerText = score;
}

function turnCard() {
    counter++;
    this.src = cardArray[this.id].img;
    turnedCards.push(this.id);
    if (counter === 2) {
        setTimeout(() => {
            let positionOne = turnedCards[0];
            let positionTwo = turnedCards[1];
            let firstElement = cardArray[positionOne];
            let secondElement = cardArray[positionTwo];
            if (firstElement.name === secondElement.name) {
                score++;
                resultElement.innerText = score;
                for (let i = 0; i < turnedCards.length; i++) {
                    let card = document.getElementById(turnedCards[i]);
                    card.removeEventListener("click", turnCard);
                }
            } else {
                for (let i = 0; i < turnedCards.length; i++) {
                    let card = document.getElementById(turnedCards[i]);
                    card.src = "./images/blank.png";
                }
            }
            turnedCards = [];
            counter = 0;
        }, 500);
    }
}


