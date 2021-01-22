// console.log('start of code');
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

// create a function that separates a word into its letter components
// split the current word and store in variable: s
const splitWord = currentWord.split("");
// check splitWord
// console.log(splitWord);
// console.log(`splitWord is an ${typeof(splitWord)}.`);
// for-loop for letter replacement with dashes
for (let k = 0; k < splitWord.length; k++) {
    cajaDeJuego.push("_");
}
// console.log("cajaDeJuego " + cajaDeJuego);
// remove splitWord's array nature and make to a string
console.log('splitWord: ' + splitWord);
// const splitString = splitWord.join(" ");
// console.log('splitString: ' + splitString);
// console.log(`splitString is a ${typeof(splitString)}.`);
// console.log(`cajaDeJuego: ${cajaDeJuego}`);
// console.log('justBlanks: ' + justBlanks);
// console.log(`justBlanks is a ${typeof(justBlanks)}.`);

// check out current word in HTML
let currentWordElement = document.getElementById('current-word');
// console.log(docElement);

currentWordElement.innerText = cajaDeJuego.join(" ");
// ------------------------------------------

//create event key function: s
let iGotTheKeys = (event) => {
    let key = event.key;
    // check key: s
    // console.log(key);

    // reveal letters that are being guessed: s
    // lettersGuessed.push(key);


    // store index number in stringIndex variable
    // function revealLetters() {
    for (let p = 0; p < cajaDeJuego.length; p++) {

        // general
        // console.log(key);
        // console.log(key === splitWord[p]);
        // console.log((key === splitWord[p]) === false);
        // console.log(key === laComida[p][p])
        // console.log(key);
        // console.log(splitWord[p]);

        if (key === splitWord[p]) {
            // check conditional statement: s
            // console.log('its a match!');


            // check cajaDeJuego array against splitWord array
            // console.log(`cajaDeJuego: ${cajaDeJuego}`);

            // replace blanks with letters

            // if every index equals the key then reveal the indices
            let replaceChar = () => cajaDeJuego.splice(p, 1, splitWord[p]);
            // console.log(replaceChar());
            // execute function
            replaceChar();

            // console.log(`cajaDeJuego: ${cajaDeJuego}`)
        }
        // **************************************************************
        // create function to compare letters *************************
        // check wrongLetters
        // console.log(wrongLetters);
        // --------------------------------------------------------------
        // create function to ensure that lettersGuessed receives all wrongLetter entries
        // let wrongLettersSent = () => {
        //     if (wrongLetters) {
        //         // lettersGuessed.push(key)
        //         return key
        //     }
        // }
        // console.log(lettersGuessed);
        // --------------------------------------------------------------

        // resolve multiple letters within lettersGuessed

        // **************************************************************

        // // run splitWord array through isNotEqualToKey function
        // console.log(splitWord.every(isNotEqualToKey));
    }

    isNotEqualToKey = arrayElement => key !== arrayElement;
    // log key to console
    console.log(key);
    // use every() method to compare all values of the array, store in wrongLetters array
    // let wrongLetters = splitWord.every(isNotEqualToKey);


    let wrongLetters = splitWord.every(isNotEqualToKey);
    console.log(wrongLetters);

    // conditional statement: if wrongLetter is truthy, push to lettersGuessed
    if (wrongLetters) {
        guessesLeft--;
        lettersGuessed.push(key)
    }


    // get element by id

    currentWordElement.innerText = cajaDeJuego.join(" ");

    guessesLeftElement.innerText = guessesLeft;

    // check lettersGuessed
    // console.log(lettersGuessed);

    // get element by id: letterGuessed
    lettersGuessedElement.innerText = lettersGuessed.join(" ");


    // wins

    // losses

}
// add event listener: s
document.addEventListener('keypress', iGotTheKeys);
// document.addEventListener('keyup', iGotTheKeys);
// document.addEventListener('keydown', iGotTheKeys);




