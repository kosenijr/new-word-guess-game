// console.log('start of code');
// ==========================================
// VARIABLES
// ---------
let key;
let wins = 0;
let losses = 0;
let intro;
let currentWord;
let guessesLeft;
let lettersGuessed;
// ==========================================
// ARRAY
// -----
// create an array of common terms: s
const laComida = [
    'arrepas', 
    'cafe', 
    'empanadas',
    'jugo',
    'lechon',
    'pernil',
    'sofrito',
    'tostones',
];

const cajaDeJuego = [];
// ==========================================
// FUNCTIONS
// ---------
// key press
// ------------------------------------------
//create event key function: s
let iGotTheKeys = (event) => console.log(event.key);
// add event listener: s
document.addEventListener('keypress', iGotTheKeys);
// document.addEventListener('keyup', iGotTheKeys);
// document.addEventListener('keydown', iGotTheKeys);
// ------------------------------------------
// create a random selection function for array elements: s
let randSelect = (value) => Math.floor(Math.random() * value.length);
// ===================================================
// TASKS
// -----
// press any key to get started: s
// ------------------------------------------
intro = 'Press any key to start the game!';

// get element by id

// ------------------------------------------
// ===================================================
// current word: s
// ------------------------------------------
currentWord = laComida[randSelect(laComida)];
console.log(currentWord);
// console.log(currentWord.length);

// hide currentWord
cajaDeJuego.push(currentWord);
console.log(cajaDeJuego[0].length);

// for (let kNum = 0; kNum < )

// # of guesses remaining
// ------------------------------------------
// create descending for loop/conditional statement
guessesLeft = currentWord.length;

// }

// ------------------------------------------

// letters already guessed
// ------------------------------------------

// ------------------------------------------


// wins

// losses























let wordGuessG
ame = {



}

