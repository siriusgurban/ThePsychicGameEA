const letterId = document.querySelector("#letter")
const winId = document.querySelector("#win")
const loseId = document.querySelector("#lose")
const guessId = document.querySelector("#guess")
const letterIsId = document.querySelector("#letterIs")

let geusss = 9;
let wins = 0;
let loses = 0;
let arrLetters = [];
let randomLetter = "s";


function randomLetterFunc() {
    let random = Math.floor(Math.random() * 26);
    let arrAlphabet = "abcdefghijklmnopqrstuvwxy".split("");
    return arrAlphabet[random];
}

function restartGame() {
    geusss = 9;
    guess.innerHTML = 9;
    arrLetters = [];
    randomLetter = randomLetterFunc();
}


function startGame() {

    addEventListener("keypress", e => {
        if (e.key.match(/[a-z]/i)) {
            if (geusss !== 0) {
                if (e.key !== randomLetter) {
                    arrLetters.push(e.key)
                    geusss--;
                    guess.innerHTML = geusss;
                    letter.innerHTML = arrLetters.map((el) => {
                        return el;
                    }).join(", ");
                } else {
                    wins++;
                    win.innerHTML = wins;
                    letterIs.innerHTML = randomLetter;
                    guess.innerHTML = 9;
                    restartGame();
                }
                console.log(randomLetter);
            } else {
                loses++;
                lose.innerHTML = loses;
                restartGame();
            }

        }
    })

};

startGame();



//------------------------------------------

// class myClass {
//     constructor() {
//         this.arrLetters = []
//     }

//     startGame() {
//         console.log(this.arrLetters, "myObj");
//         return addEventListener("keypress", this.startstart)
//     }

//     startstart(e) {
//         this.arrLetters.push(e.key)
//     }
// }

// const myObj = new myClass()

// myObj.startGame()

//------------------------------------------



// class ThePsychicGame {
//     // win = 0;
//     // lose = 0;
//     // guess = 9;
//     // letter = 0;
//     // randomLetter = "s";
//     // arr = [];


//     constructor() { //win, lose, guess, letter, arrLetters, randomLetter
//         this.win = win;
//         this.lose = lose;
//         this.guess = guess;
//         this.letter = letter;
//         this.arrLetters = [];
//         this.randomLetter = "randomLetter";
//     }

//     randomLetterFunc() {
//         let random = Math.floor(Math.random() * 26);
//         let arrAlphabet = "abcdefghijklmnopqrstuvwxy".split("");
//         return arrAlphabet[random];
//     };

//     restartGame() {
//         this.guess = 9;
//         guessId.innerHTML = 9;
//         this.arrLetters = [];
//         this.randomLetter = this.randomLetterFunc();
//     };


//     startGame() {
        
//         console.log(this.arrLetters, "arr");
//         addEventListener("keypress", function (e) {
//             if (e.key.match(/[a-z]/i)) {
//                 if (this.guess !== 0) {
//                     if (e.key !== this.randomLetter) {
//                         this.arrLetters.push(e.key);
//                         this.guess--;
//                         guessId.innerHTML = this.guess;
//                         letterId.innerHTML = this.arrLetters.map((el) => {
//                             return el;
//                         }).join(", ");
//                     } else {
//                         this.win++;
//                         winId.innerHTML = this.win;
//                         letterIsId.innerHTML = this.randomLetter;
//                         guessId.innerHTML = 9;
//                         this.restartGame();
//                     }
//                     console.log(this.randomLetter);
//                 } else {
//                     this.lose++;
//                     loseId.innerHTML = this.lose;
//                     this.restartGame();
//                 }

//             }
//         })

//     };

// }

// // const ThePsychicGameObj = new ThePsychicGame();
// const ThePsychicGameObj = new ThePsychicGame(); //0, 0, 9, 0, [], "s"
// ThePsychicGameObj.startGame()

// ThePsychicGame.startGame();




