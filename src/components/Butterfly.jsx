import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useSound from 'use-sound';
import swatSound from '../sounds/349204__natty23__light-squash.wav'
import butterfly from '../images/butterfly-svgrepo-com.svg'
import splat from '../images/nmOO979-blood-vector.svg'

function Butterfly(props) {
    let {losePoint, top, left, setPaused} = props
    const { x, y } = mouse();
    const [flyState, setFlyState] = useState(butterfly)
    const [insectClass, setInsectClass] = useState('fly')
    const [positionX, setPositionX] = useState(left)
    const [positionY, setPositionY] = useState(top)
    
    const [play] = useSound(swatSound)

    function handleSwat () {
        setPaused(false)
            play()
            setPositionX(x - 100)
            setPositionY(y - 100)
            setFlyState(splat)
            setInsectClass('butterflySplatClass')
            losePoint()
    }
    
    return (
        <div>
            <img draggable='false' style={{left: positionX, top: positionY}} className={insectClass} src={flyState} alt="butterfly" onClick={() => handleSwat()} />
        </div>
    );
}

export default Butterfly;