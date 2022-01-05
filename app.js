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
        rl.question(`Tu joues quoi ${playerName} ?\n`, (userInput) => {
            resolve(userInput)
        })
    })
}

async function battle(playerOneIA, playerOneName, playerTwoIA, playerTwoName) {
    let figureA
    let figureB

    if (playerOneIA) {
        figureA = randomPick()
    } else {
        figureA = await readInput(playerOneName)
    }

    if (playerTwoIA) {
        figureB = randomPick()
    } else {
        figureB = await readInput(playerTwoName)
    }

    if (figureA !== 'Rock' && figureA !== 'Paper' && figureA !== 'Scissors') {
        console.log('Choisissez entre les figures suivantes: Rock, Paper, Scissors')
        return
    }
    if (figureB !== 'Rock' && figureB !== 'Paper' && figureB !== 'Scissors') {
        console.log('Choisissez entre les figures suivantes: Rock, Paper, Scissors')
        return
    }

    console.log(`${playerOneName} joue: `, figureA)
    console.log(`${playerTwoName} joue: `, figureB)

    if (figureA === 'Paper' && figureB === 'Rock') {
        console.log(`${playerOneName} gagne !`)
        scoreIAOne++
    }
    else if (figureA === 'Paper' && figureB === 'Scissors') {
        console.log(`${playerTwoName} gagne !`)
        scoreIATwo++
    }
    else if (figureA === 'Paper' && figureB === 'Paper') {
        console.log('Egalité !')
    }

    else if (figureA === 'Rock' && figureB === 'Scissors') {
        console.log(`${playerOneName} gagne !`)
        scoreIAOne++
    }
    else if (figureA === 'Rock' && figureB === 'Paper') {
        console.log(`${playerTwoName} gagne !`)
        scoreIATwo++
    }
    else if (figureA === 'Rock' && figureB === 'Rock') {
        console.log('Egalité !')
    }

    else if (figureA === 'Scissors' && figureB === 'Paper') {
        console.log(`${playerOneName} gagne !`)
        scoreIAOne++
    }
    else if (figureA === 'Scissors' && figureB === 'Rock') {
        console.log(`${playerTwoName} gagne !`)
        scoreIATwo++
    }
    else if (figureA === 'Scissors' && figureB === 'Scissors') {
        console.log('Egalité !')
    }
    console.log(`${playerOneName} a ${scoreIAOne} points et ${playerTwoName} a ${scoreIATwo} points`)
}

async function play(playerOneName, playerOneIsIA, playerTwoName, playerTwoIsIA) {
    while (scoreIAOne < 3 || scoreIATwo < 3) {
        await battle(playerOneIsIA, playerOneName, playerTwoIsIA, playerTwoName)
        if (scoreIAOne === 3) {
            return console.log(`GG ! ${playerOneName} GAGNE LE MATCH !`)
        }
        if (scoreIATwo === 3) {
            return console.log(`GG ! ${playerTwoName} GAGNE LE MATCH !`)
        }
    }
}

let playerOneName = 'PlayerOne'
let playerTwoName = 'PlayerTwo'
let playerOneIsIA = true
let playerTwoIsIA = true

if(process.argv[2] === '-p') {
    playerOneIsIA = false
} 
if(process.argv[4] === '-p') {
    playerTwoIsIA = false
}

if(process.argv[3] != undefined) {
    playerOneName = process.argv[3]
} 
if (process.argv[5] != undefined) {
    playerTwoName = process.argv[5]
}

play(playerOneName, playerOneIsIA, playerTwoName, playerTwoIsIA)
