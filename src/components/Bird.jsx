import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'

import useSound from 'use-sound'
import birdhit from '../sounds/squawk.wav'

export default function Bird({ randomYindex, handleWin }) {

    const { x, y } = mouse()
    const size = useWindowSize()

    const [positionX, setPositionX] = useState('')
    const [positionY, setPositionY] = useState(randomYindex)
    const [birdClass, setBirdClass] = useState('bird birdfly')
 
    const [hit] = useSound(birdhit)

    function handleHit () {
        setPositionX(x - 65)
        setPositionY(((y / size.height) * 100) - 4)
        setBirdClass('bird birdhit')
        hit()
        handleWin()
    }

    return (
            <div draggable='false' className={birdClass} style={{top: `${positionY}vh`, left: positionX}} alt="bird" >
                <div className='birdTarget' onClick={() => handleHit()} />
            </div>
    );
}