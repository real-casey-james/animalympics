import React, { useState } from 'react'

import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound'
import whack from '../sounds/349193__natty23__whack.wav'

export default function MoveAway (props) {
    document.body.style.backgroundColor = '#B37C51'
    const size = useWindowSize();
    let randomWidth = Math.floor((size.width - 200) * Math.random()) || 200
    let randomHeight = Math.floor((size.height - 130) * Math.random()) || 200
    const [positionX, setPositionX] = useState(randomWidth)
    const [positionY, setPositionY] = useState(randomHeight)

    const [play] = useSound(whack)
    function buttonMoveAway () {
        {play()}
        props.handleClick()
        setPositionX(randomWidth)
        setPositionY(randomHeight)
    }
    
    return (
        <>
        <div className='moleContainer'>
            <img alt='mole' draggable='false' src={'./images/mole-svgrepo-com.svg'} className='mole' style={{left: positionX, top: positionY}} onClick={buttonMoveAway} />
        </div>
        </>
    )
}


