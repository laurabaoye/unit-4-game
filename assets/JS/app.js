// check if type of letter ✓
// already guessed letter ✓
// apply point if win/loss ✓
// BUG LIST
// alert after solving word
// reset underscore placeholder DOM after alert

const wordBank = ['mcdonalds', 'tacobell', 'ihop', 'chipotle', 'starbucks', 'chillis', 'popeyes', 'quickly', 'happylemon'];
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let underscoreBlanks = [];
let incorrectLetters = [];
let totalNumCorrect = 0;
let totalNumGuess = 10;
let winPoint = 1;
let lossPoint = 1;
const regex = /^[A-Za-z]+$/;

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
        genUnderscore();
    } else if (totalNumGuess === 0) {
        loss.textContent = lossPoint++;
        alert('LOSER… ' +
            'We have to demolish your franchise property, ' +
            `'${randWord.toUpperCase()}'`);
        reset();
        genUnderscore();
    }
}

function genUnderscore() {
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    for (let i = 0; i < randWord.length; i++) {
        underscoreBlanks.push('_');
    }
    return underscoreBlanks;
}
    // console.log(genUnderscore()); /* TEST */

document.addEventListener('keyup', e => {
    let userGuess = e.key.toLowerCase();
        // console.log(userGuess);
    if (userGuess.length === 1 && userGuess.match(regex)) {
        // console.log(userGuess + ' is a letter');
        if (randWord.indexOf(userGuess) > -1) {
            // console.log(randWord.indexOf(userGuess));
            for (let i = 0; i < randWord.length; i++) {
                const letter = randWord[i];
                if (letter === userGuess && underscoreBlanks[i] === "_") {
                    underscoreBlanks[i] = userGuess;
                        console.log(underscoreBlanks); /* TEST */
                    totalNumCorrect++;
                    underscoreDOM.textContent = underscoreBlanks.join(' ');
                    scoreBoard();
                }
            }
        } else {
            incorrectLetters.push(userGuess);
            totalNumGuess--;
                // console.log(incorrectLetters, totalNumGuess); /* TEST */
            guessRemaining.textContent = totalNumGuess;
            incorrectGuess.textContent = incorrectLetters.join('-');
            scoreBoard();
        }
    } else {
        alert('I SAID guess a L-E-T-T-E-R…');
    }
    
});

guessRemaining.textContent = totalNumGuess;
underscoreDOM.textContent = genUnderscore().join(' ');