import React from 'react'

export default function GameIcon({iconName, iconClick = () => {}}) {
    return (
        <div className={`icon icon--${iconName}`}>
            <div className="player" data-id={iconName} onClick={iconClick}>
            </div>
        </div>
    )
}
