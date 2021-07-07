import React, { useState } from 'react'

import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import splat from '../sounds/446115__justinvoke__wet-splat.wav'
import beetle from '../images/beetle-svgrepo-com.svg'

export default function Duplicate ({ setPaused, handleWin }) {
    document.body.style.backgroundColor = '#ace698'
    const [duplicate, setDuplicate] = useState('')
    const size = useWindowSize();

    let positionX = Math.floor(((size.width-300) * Math.random())) + 150 || 200
    let positionY = Math.floor(((size.height-100) * Math.random())) || 200

    const duplicates = [
        <Duplicate setPaused={setPaused} key={positionX / positionY} handleWin={() => handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate setPaused={setPaused} key={positionX + positionY} handleWin={() => handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate setPaused={setPaused} key={positionX - positionY} handleWin={() => handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>
    ]

    const [play] = useSound(splat)
    
    function buttonDuplicate () {
        setPaused(false)
        play()
        setDuplicate(duplicates)
        handleWin()
    }
    
    return (
        <>
            <img setPaused={setPaused} key={positionX * positionY} alt='beetle' draggable='false' className='bug' src={beetle} handleWin={() => handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}} />
            {duplicate}
        </>
    )
}