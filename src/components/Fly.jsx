import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import swatSound from '../sounds/swat.wav'
import fly from '../images/fly-insect-svgrepo-com.svg'
import splat from '../images/splatter-svgrepo-com.svg'

export default function Fly({ handleSwatFly, top, left }) {
    const { x, y } = mouse();
    const size = useWindowSize();
    const [flyState, setFlyState] = useState(fly)
    const [insectClass, setInsectClass] = useState('fly')
    const [positionX, setPositionX] = useState(left)
    const [positionY, setPositionY] = useState(top)
    
    const [play] = useSound(swatSound)

    function handleSwat () {
            play()
            setPositionX(((x / size.width) * 100) - 5)
            setPositionY(((y / size.height) * 100) - 5)
            setFlyState(splat)
            setInsectClass('splatClass')
            handleSwatFly()
    }
    
    return (
        <div>
            <img draggable='false' style={{left: `${positionX}vw`, top: `${positionY}vh`}} className={insectClass} src={flyState} alt="fly" onClick={() => handleSwat()} />
        </div>
    );
}