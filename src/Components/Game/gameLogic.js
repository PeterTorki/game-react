
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const getHouseChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const getResult = (player, house) => {
    if (!house || !player) {
        return "error";
    }
    if (player === house) {
        return "draw";
    }
    switch (player) {
        case 'paper':
            return house === 'rock' || house === 'spock' ? 'win' : 'lose'
        case 'rock':
            return house === 'scissors' || house === 'lizard' ? 'win' : 'lose'
        case 'scissors':
            return house === 'paper' || house === 'lizard' ? 'win' : 'lose'
        case 'lizard':
            return house === 'paper' || house === 'spock' ? 'win' : 'lose'
        case 'spock':
            return house === 'scissors' || house === 'rock' ? 'win' : 'lose'
        default:
            return 'error'
    }
}

const getScore = (result, score) => {
    if (result === 'win') {
        return score + 1
    } else if (result === 'lose') {
        return score - 1
    } else if (result === 'draw') {
        return score
    } else {
        return 'error'
    }
}


export { getHouseChoice, getResult, getScore };

