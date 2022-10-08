import React, { useContext } from 'react'
import GameContext from '../../Store/game-context'

export default function Score() {
    const gameCtx = useContext(GameContext);

    const score = gameCtx.score;

  return (
    <div className="score">
      <div className="score__title">
        Score
      </div>
      <div className="score__value">
        {score}
      </div>
    </div>
  )
}
