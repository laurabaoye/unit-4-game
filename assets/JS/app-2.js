const wordBank = ['mcdonalds', 'tacobell', 'ihop', 'chipotle', 'starbucks', 'chillis', 'popeyes', 'quickly', 'happylemon'];
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // select random word from 'wordBank' index
let underscoreBlanks = []; // initial blanks // amount of underscores based on letters
let incorrectLetters = []; // initial incorrect // display incorrect letter
let totalNumCorrect = 0; // initial correct // match number of character with random word
let totalNumGuess = 10; // initial guesses // decrease number if incorrect
let winPoint = 1; // increase point for guessing word correctly
let lossPoint = 1; // increase point for 0 number of guesses
const regex = /^[A-Za-z]+$/; // check letters from A-Z & a-z

const win = document.querySelector('.win');
const loss = document.querySelector('.loss');
const guessRemaining = document.querySelector('.guess-remaining');
const underscoreDOM = document.querySelector('.underscore-DOM');
const incorrectGuess = document.querySelector('.incorrect-guess');



function reset() {
    underscoreBlanks = [];
    incorrectLetters = [];
    totalNumGuess = 10;
    totalNumCorrect = 0;
    underscoreDOM.textContent = randWord.toUpperCase();
    guessRemaining.textContent = 10;
    incorrectGuess.textContent = '_';
}

function scoreBoard() {
    if (totalNumCorrect === randWord.length) {
        win.textContent = winPoint++;
        alert('Win Win Win!!! ' +
            'You are the new franchisee owner of ' +
            `'${randWord.toUpperCase()}'`);
        reset();
        underscoreMaker();
    } else if (totalNumGuess === 0) {
        loss.textContent = lossPoint++;
        alert('LOSER… ' +
            'We have to demolish your franchise property, ' +
            `'${randWord.toUpperCase()}'`);
        reset();
        underscoreMaker();
    }
}

function underscoreMaker() {
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    for (let i = 0; i < randWord.length; i++) {
        underscoreBlanks.push('_');
    }
    return underscoreBlanks;
}
    // console.log(genUnderscore()); /* TEST */

document.addEventListener('keyup', e => { //active user input keyup event
    let userGuess = e.key.toLowerCase(); //get value from keypress; convert to lowercase
        // console.log(userGuess);
    if (userGuess.length === 1 && userGuess.match(regex)) { // check if single letter
        // console.log('is a letter');
        if (randWord.indexOf(userGuess) > -1) { // check if user input contains letter // index truthy/falsy
            // console.log(randWord.indexOf(userGuess));
            for (let i = 0; i < randWord.length; i++) { // iterate through selected random word, get each letter
                const letter = randWord[i]; // name change
                if (letter === userGuess && underscoreBlanks[i] === "_") { // check if letter is used or not
                    underscoreBlanks[i] = userGuess; // apply letters guessed correctly
                        console.log(underscoreBlanks); /* TEST */
                    totalNumCorrect++; // increase number of letters guessed correctly
                    underscoreDOM.textContent = underscoreBlanks.join(' '); // display update in random word array to DOM
                    scoreBoard(); // call to verify
                }
            }
        } else {
            incorrectLetters.push(userGuess); // add to 'incorrectLetters' array
            totalNumGuess--; // decrease 'totalNumGuess' , -1
                // console.log(incorrectLetters, totalNumGuess); /* TEST */
            guessRemaining.textContent = totalNumGuess; // display update of 'totalNumGuess' to DOM
            incorrectGuess.textContent = incorrectLetters.join('-'); // display update in 'incorrectLetters' array to DOM
            scoreBoard(); // call to verify
        }
    } else { // alert if invalid input
        alert('I SAID guess a L-E-T-T-E-R…');
    }
    
});

guessRemaining.textContent = totalNumGuess; // display 'totalNumGuess' to DOM
underscoreDOM.textContent = underscoreMaker().join(' '); // display 'underscoreBlanks' to DOM