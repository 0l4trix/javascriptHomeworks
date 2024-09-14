let statistics = document.querySelector("#statistics");
let sendGuess = document.querySelector("#sendGuess");
let guessResult = document.querySelector("#guessResult");
let playAgain = document.querySelector("#playAgain");

let maxNum = 100; //add +1 to desired highest number
let randomNum = Math.floor(Math.random() * maxNum);
document.querySelector("label").innerHTML = `<b>Guess the number (0-${maxNum-1})</b><br>`;
console.log(randomNum);

let guessNumber = 0;
let allGuesses = [];

statistics.innerHTML = `Average tries: none <br> Best run: none`;

//Guessing Start
sendGuess.onclick = function () {
    let guess = parseInt(document.querySelector("#guess").value);

    if (guess === randomNum) {
        guessNumber += 1;
        guessResult.innerHTML = `Congratulations, you guessed the number correctly in ${guessNumber} tries!`;
        playAgain.classList.remove("hidden");
    } else if (guess < randomNum) {
        guessNumber += 1;
        guessResult.innerHTML = `The searched number is bigger than ${guess}`;
    } else if (guess > randomNum) {
        guessNumber += 1;
        guessResult.innerHTML = `The searched number is smaller than ${guess}`;
    } else {
        guessNumber += 1;
        guessResult.innerHTML = `Please input a proper number`;
    }
}
//Guessing End

//New Game Start
playAgain.onclick = function () {
    allGuesses.push(guessNumber);
    guessNumber = 0;
    randomNum = Math.floor(Math.random() * maxNum);
    console.log(randomNum);

    guessResult.innerHTML = ``;
    playAgain.classList.add("hidden");

    function avgCount() {
        let sum = 0;
        for (let i = 0; i < allGuesses.length; i++) {
            sum += allGuesses[i];
        }
        guessAvg = sum / allGuesses.length;
        return guessAvg;
    }
    function bestCount() {
        let num = 1000;
        for (let i = 0; i < allGuesses.length; i++) {
            allGuesses[i] < num ? num = allGuesses[i] : null;
        }
        return num;
    }
    statistics.innerHTML = `Average tries: ${avgCount()} <br> Best run: ${bestCount()}`;
}