import React, { useState } from 'react'
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound'
import swatSound from '../sounds/349204__natty23__light-squash.wav'
import butterfly from '../images/butterfly-svgrepo-com.svg'
import splat from '../images/nmOO979-blood-vector.svg'

function Butterfly({ losePoint, top, left }) {
    const { x, y } = mouse()
    const size = useWindowSize()
    const [flyState, setFlyState] = useState(butterfly)
    const [insectClass, setInsectClass] = useState('fly')
    const [positionX, setPositionX] = useState(left)
    const [positionY, setPositionY] = useState(top)
    
    const [play] = useSound(swatSound)

    function handleSwat () {
            play()
            setPositionX(((x / size.width) * 100) - 5)
            setPositionY(((y / size.height) * 100) - 5)
            setFlyState(splat)
            setInsectClass('butterflySplatClass')
            losePoint()
    }
    
    return (
        <div>
            <img draggable='false' style={{left: `${positionX}vw`, top: `${positionY}vh`}} className={insectClass} src={flyState} alt="butterfly" onClick={() => handleSwat()} />
        </div>
    );
}

export default Butterfly;