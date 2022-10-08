import React from 'react'

//create context
const GameContext = React.createContext({
    myChoice: '',
    houseChoice: '',
    playerWin: '',
    score: 0,
    setMyChoice: (myChoice) => { },
    setHouseChoice: (houseChoice) => { },
    setPlayerWin: (playerWin) => { },
    setScore: (score) => { },
})
    

export default GameContext;