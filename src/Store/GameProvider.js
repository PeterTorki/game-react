import React, { useReducer } from 'react'
import GameContext from './game-context'

const defaultGameState = {
    myChoice: '',
    houseChoice: '',
    playerWin: '',
    score: 0,
    toggleRules: false,
}

const gameReducer = (state, action) => {
    if (action.type === 'SET_MY_CHOICE') {
        return {
            ...state,
            myChoice: action.myChoice,
        }
    }
    if (action.type === 'SET_HOUSE_CHOICE') {
        return {
            ...state,
            houseChoice: action.houseChoice,
        }
    }

    if (action.type === 'SET_PLAYER_WIN') {
        return {
            ...state,
            playerWin: action.playerWin,
        }
    }

    if (action.type === 'SET_SCORE') {
        return {
            ...state,
            score: action.score,
        }
    }
    return defaultGameState
}

export default function GameProvider(props) {
    const [gameState, dispatchGameAction] = useReducer(gameReducer, defaultGameState);

    const setMyChoiceHandler = (myChoice) => {
        dispatchGameAction({ type: 'SET_MY_CHOICE', myChoice: myChoice })
    }

    const setHouseChoiceHandler = (houseChoice) => {
        dispatchGameAction({ type: 'SET_HOUSE_CHOICE', houseChoice: houseChoice })
    }

    const setPlayerWinHandler = (playerWin) => {
        dispatchGameAction({ type: 'SET_PLAYER_WIN', playerWin: playerWin })
    }

    const setScoreHandler = (score) => {
        dispatchGameAction({ type: 'SET_SCORE', score: score })
    }


    const gameContext = {
        myChoice: gameState.myChoice,
        houseChoice: gameState.houseChoice,
        playerWin: gameState.playerWin,
        score: gameState.score,
        toggleRules: gameState.toggleRules,
        setMyChoice: setMyChoiceHandler,
        setHouseChoice: setHouseChoiceHandler,
        setPlayerWin: setPlayerWinHandler,
        setScore: setScoreHandler,
    }

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    )
}
