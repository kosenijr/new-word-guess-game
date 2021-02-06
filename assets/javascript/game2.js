// console.log('start of code');
// ==========================================
// ARRAYs
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
// VARIABLES
// ---------
// use 'let', not 'const'
let key;
let wins = 0;
let losses = 0;
let intro;
let currentWord;

let guessesLeft = 5;
// get element by id
let guessesLeftElement = document.getElementById("guesses-left");
guessesLeftElement.innerText = guessesLeft;

let lettersGuessed = [];
// set and get element
let lettersGuessedElement = document.getElementById("letters-guessed");
// ==========================================
// FUNCTIONS
// ---------
// key press
// ------------------------------------------
// create a random selection function for array elements: s
let randSelect = (value) => Math.floor(Math.random() * value.length);
// ===================================================
// TASKS
// -----
// press any key to get started: s
// ------------------------------------------
intro = 'Press any key to start the game!';
// ===================================================
// current word: s
// ------------------------------------------
currentWord = laComida[randSelect(laComida)];

// create a function that separates a word into its letter components
// split the current word and store in variable: s
const splitWord = currentWord.split("");

for (let k = 0; k < splitWord.length; k++) {
    cajaDeJuego.push("_");
}

// remove splitWord's array nature and make to a string
console.log('splitWord: ' + splitWord);

// check out current word in HTML
let currentWordElement = document.getElementById('current-word');
currentWordElement.innerText = cajaDeJuego.join(" ");
// ------------------------------------------

//create event key function: s
let iGotTheKeys = (event) => {
    let key = () => event.key;
    // store index number in stringIndex variable
    // function revealLetters() {
    for (let p = 0; p < cajaDeJuego.length; p++) {
        // general
        if (key() === splitWord[p]) {
            // if every index equals the key then reveal the indices
            let replaceChar = () => cajaDeJuego.splice(p, 1, splitWord[p]);
            // execute function
            replaceChar();
        }
    }

    isNotEqualToKey = arrayElement => key() !== arrayElement;
    // log key to console
    console.log(key());

    let wrongLetters = splitWord.every(isNotEqualToKey);
    // console.log(wrongLetters);

    // function: push incorrect letters to lettersGuessed array
    let incorrects = () => lettersGuessed.push(key());


    // function: for-loop checks key against the entire lettersGuessed array
    for (let b = 0; b < lettersGuessed.length; b++) {
        if (key !== lettersGuessed[b]) {
            console.log('Not here')
        } else {console.log('Here')}
        
    }




    if (wrongLetters) {
        guessesLeft--;


        // }
    }

    // send wrong letters to lettersGuessed array

    // comparison between array elements
    // lettersGuessed.forEach()




    // get element by id
    currentWordElement.innerText = cajaDeJuego.join(" ");
    guessesLeftElement.innerText = guessesLeft;

    // get element by id: letterGuessed
    lettersGuessedElement.innerText = lettersGuessed.join(" ");

    // wins
    // losses

    // once guessesLeft equals zero: (1) credit losses, (2) post new blanks (arrow function), and clear lettersGuessed (lettersGuessed equals " " or .empty())

}
// add event listener: s
document.addEventListener('keypress', iGotTheKeys);