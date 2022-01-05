const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const paper = 'Paper'
const rock = 'Rock'
const scissors = 'Scissors'
const figureChoices = [paper, rock, scissors]

function randomPick() {
    let randomInt = Math.floor(Math.random() * figureChoices.length)
    return figureChoices[randomInt]
}

let scoreIAOne = 0
let scoreIATwo = 0

function readInput(playerName) {
    return new Promise(function (resolve, reject) {
        rl.question(`Tu joues quoi ${playerName} ?` , (userInput) => {
            resolve(userInput)
        })
    })
}

async function battle(playerOneIA, playerTwoIA) {
    let figureA
    let figureB

    if(playerOneIA) {
        figureA = randomPick()
    } else {
        figureA = await readInput('Billy')
    }

    if(playerTwoIA) {
        figureB = randomPick()
    } else {
        figureB = await readInput('Didier')
    }

    if (figureA !== 'Rock' && figureA !== 'Paper' && figureA !== 'Scissors') {
        console.log('Choisissez entre les figures suivantes: Rock, Paper, Scissors')
        return
    }
    if (figureB !== 'Rock' && figureB !== 'Paper' && figureB !== 'Scissors') {
        console.log('Choisissez entre les figures suivantes: Rock, Paper, Scissors')
        return
    }

    console.log("IA ONE joue: ", figureA)
    console.log("IA TWO joue: ", figureB)

    if (figureA === 'Paper' && figureB === 'Rock') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    else if (figureA === 'Paper' && figureB === 'Scissors') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    else if (figureA === 'Paper' && figureB === 'Paper') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }

    else if (figureA === 'Rock' && figureB === 'Scissors') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    else if (figureA === 'Rock' && figureB === 'Paper') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)

    }
    else if (figureA === 'Rock' && figureB === 'Rock') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }

    else if (figureA === 'Scissors' && figureB === 'Paper') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    else if (figureA === 'Scissors' && figureB === 'Rock') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    else if (figureA === 'Scissors' && figureB === 'Scissors') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
}

async function play() {
    while (scoreIAOne < 3 || scoreIATwo < 3) {
        await battle(false, false)
        if (scoreIAOne === 3) {
            return console.log('GG ! IA ONE GAGNE LE MATCH !')
        }
        if (scoreIATwo === 3) {
            return console.log('GG ! IA Two GAGNE LE MATCH !')
        }
    }
}
play()