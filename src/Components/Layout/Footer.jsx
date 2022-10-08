import React, { useState } from 'react'
import Rules from '../Modal/Rules'

export default function Footer() {
    const [showRules, setShowRules] = useState(false)

    const handleShowRules = () => {
        setShowRules(!showRules)
    }

    return (
        <div className="game__rules">
            <button className="box rules__btn" onClick={handleShowRules}>Rules</button>
            {showRules && <Rules onConfirm={handleShowRules} />}
        </div>
    )
}
