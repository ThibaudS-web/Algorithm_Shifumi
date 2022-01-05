const paper = 'Paper'
const rock = 'Rock'
const scissors = 'Scissors'

const IAOne = [paper, rock, scissors]
const IATwo = [paper, rock, scissors]

function randomPick(IAChoices) {
    let i = 0
    let randomInt = Math.random()
    if (randomInt < 0.3) {
        i = 0
    } else if (randomInt >= 0.3 && randomInt <= 0.6) {
        i = 1
    } else {
        i = 2
    }
    return IAChoices[i]
}

let scoreIAOne = 0
let scoreIATwo = 0

function battle(playerOne, playerTwo) {
    let figureA = randomPick(playerOne)
    console.log("IA ONE joue: ", figureA)
    let figureB = randomPick(playerTwo)
    console.log("IA TWO joue: ", figureB)

    if (figureA === 'Paper' && figureB === 'Rock') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)   
    }
    if (figureA === 'Paper' && figureB === 'Scissors') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo) 
    }
    if (figureA === 'Paper' && figureB === 'Paper') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }

    if (figureA === 'Rock' && figureB === 'Scissors') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    if (figureA === 'Rock' && figureB === 'Paper') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
        
    }
    if (figureA === 'Rock' && figureB === 'Rock') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }

    if (figureA === 'Scissors' && figureB === 'Paper') {
        console.log("L'IA ONE Gagne !")
        scoreIAOne++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    if (figureA === 'Scissors' && figureB === 'Rock') {
        console.log("L'IA TWO Gagne !")
        scoreIATwo++
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
    if (figureA === 'Scissors' && figureB === 'Scissors') {
        console.log('Egalité !')
        console.log("Score : IA ONE: ", scoreIAOne, " ET IA TWO: ", scoreIATwo)
    }
}

while(scoreIAOne < 3 || scoreIATwo < 3) {
    battle(IAOne, IATwo)
    if (scoreIAOne === 3) {
        return console.log('GG ! IA ONE GAGNE LE MATCH !')
    }
    if (scoreIATwo === 3) {
        return console.log('GG ! IA Two GAGNE LE MATCH !')
    }
}

