import React, { useEffect, useContext, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GameIcon from './GameIcon'
import GameContext from '../../Store/game-context'
import { getScore, getResult } from './gameLogic'
import { animate, spring } from "motion"

export default function Play() {
    const gameCtx = useContext(GameContext);

    const houseChoice = gameCtx.houseChoice;
    const myChoice = gameCtx.myChoice;
    const navigate = useNavigate()
    const result = getResult(myChoice, houseChoice);




    useEffect(() => {
        //hide result div on load
        document.querySelector('.play__board__result').style.display = 'none';

        //detect when user click back button
        window.addEventListener('popstate', () => {
            gameCtx.setMyChoice(null);
            gameCtx.setHouseChoice(null);
        })

        if (result === 'error') {
            navigate('/')
            return;
        }
        animate(
            ".play__board__player",
            { scale: [0, 1] },
            { delay: 0.2, duration: 0.5, easing: spring() }
        )

        animate(
            ".play__board__house",
            { scale: [0, 1] },
            { delay: 1.5, duration: 1, easing: spring() }
        )

        setTimeout(() => {
            const newScore = getScore(result, gameCtx.score);
            gameCtx.setScore(newScore);
        
            animate(
                ".play__board__result",
                { display: ['flex'] },
                { duration: 0.2, easing: [0.17, 0.67, 0.83, 0.67] }
            )
        }, 2000);

    }, [])


    return (
        <div className="play__container">
            <div className="play__board">
                <div className="play__board__player">
                    <div className="play__board__player__title">
                        You Picked
                    </div>
                    <div className="play__board__player__icon">
                        <GameIcon iconName={myChoice} />
                    </div>
                </div>

               {result &&
                 <div className="play__board__result">
                 <div className="play__board__result__title">
                     {result === 'win' && 'You Win'}
                     {result === 'lose' && 'You Lose'}
                     {result === 'draw' && 'Draw'}
                 </div>
                 <Link to='/' className="btn">
                     Play Again
                 </Link>
             </div>
               }

                <div className="play__board__house">
                    <div className="play__board__house__title">
                        The House Picked
                    </div>
                    <div className="play__board__house__icon">
                        <GameIcon iconName={houseChoice} />
                    </div>
                </div>


            </div>
        </div>
    )
}
