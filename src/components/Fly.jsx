import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useSound from 'use-sound';
import swatSound from '../sounds/swat.wav'
import fly from '../images/fly-insect-svgrepo-com.svg'
import splat from '../images/splatter-svgrepo-com.svg'

export default function Fly(props) {
    let {handleWin, top, left, setPaused, increaseCounter } = props
    const { x, y } = mouse();
    const [flyState, setFlyState] = useState(fly)
    const [insectClass, setInsectClass] = useState('fly')
    const [positionX, setPositionX] = useState(left)
    const [positionY, setPositionY] = useState(top)
    
    const [play] = useSound(swatSound)

    function handleSwat () {
        setPaused(false)
            increaseCounter()
            play()
            setPositionX(x - 50)
            setPositionY(y - 50)
            setFlyState(splat)
            setInsectClass('splatClass')
            handleWin()
    }
    
    return (
        <div>
            <img draggable='false' style={{left: positionX, top: positionY}} className={insectClass} src={flyState} alt="fly" onClick={() => handleSwat()} />
        </div>
    );
}