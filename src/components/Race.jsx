import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useSound from 'use-sound';
import crunch from '../sounds/429591__inspectorj__chewing-breadstick-single-d.wav'
import snail from '../images/snail-svgrepo-com.svg'
import leaf from '../images/leaf-svgrepo-com.svg'
import mouseIcon from '../images/mouse-svgrepo-com.svg'

let showMouse = true
let lastX = 1000

export default function Race({ handleWin, setPaused }) {
    document.body.style.backgroundColor = 'rgb(159, 136, 86)'
    const { x, y } = mouse();
   
    let randomWidth = Math.floor(80 * Math.random()) + 10
    let randomHeight = Math.floor(70 * Math.random()) + 10
    const [finishPositionX, setFinishPositionX] = useState(randomWidth)
    const [finishPositionY, setFinishPositionY] = useState(randomHeight)

    const [positionX, setPositionX] = useState(200)
    const [positionY, setPositionY] = useState(50)
    const [direction, setDirection] = useState(1)

    function handleDrag () {
        setPositionX(x-35)
        setPositionY(y-120)
        if (lastX < x) {
            setDirection(1)
        } else if (lastX > x) {
            setDirection(-1)
        }
        lastX = x
    }

    const [play] = useSound(crunch)
    function handleMouseOver () {
        setPaused(false)
        showMouse = false
        play()
        setFinishPositionX(randomWidth)
        setFinishPositionY(randomHeight)
        handleWin()
    }

    return (
        <div onMouseMove={() => handleDrag()} className='raceWrapper'>
            <img alt='snail' draggable='false' style={{left: positionX, top: positionY, transform: `scaleX(${direction})`}} className='snail' src={snail} />
            
            <img draggable='false' onMouseOver={handleMouseOver} style={{left: `${finishPositionX}vw`, top: `${finishPositionY}vh`}}  alt='finish' className='finish' src={leaf} />
            {showMouse && <img alt='mouse' className='mouseIcon' src={mouseIcon}/>}
        </div>
    );
}