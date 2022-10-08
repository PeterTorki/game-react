import React, { useEffect, useContext }from 'react'
import GameContext from '../../Store/game-context'
import { Link } from 'react-router-dom'
import {getHouseChoice} from './gameLogic'
import GameIcon from './GameIcon'
import { spring, animate } from "motion"


export default function Game() {
    const gameCtx = useContext(GameContext);

    const setUserChoice = (e) => {
        gameCtx.setMyChoice(e.target.dataset.id);
        console.log(gameCtx.myChoice);
    }

    const setHouseChoice = () => {
        const houseChoice = getHouseChoice();
        gameCtx.setHouseChoice(houseChoice);
        console.log(gameCtx.houseChoice);
    }


    useEffect(() => {
        animate(
            ".game__board",
            { scale: [1.2,1], opacity: 1 },
            { easing: spring() }
          )
        setHouseChoice();
    }, [])

    return (
        <div className="game__container">
            <div className="game__board">
                <Link to='/play'>
                    <GameIcon iconName="rock" iconClick={setUserChoice} />
                </Link>
                <Link to='/play'>
                    <GameIcon iconName="paper" iconClick={setUserChoice} />
                </Link>
                <Link to='/play'>
                    <GameIcon iconName="scissors" iconClick={setUserChoice} />
                </Link>
                <Link to='/play'>
                    <GameIcon iconName="lizard" iconClick={setUserChoice} />
                </Link>
                <Link to='/play'>
                    <GameIcon iconName="spock" iconClick={setUserChoice} />
                </Link>
            </div>
        </div>
    )
}
