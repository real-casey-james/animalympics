import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import crunch from '../sounds/429591__inspectorj__chewing-breadstick-single-d.wav'

export default function Race(props) {
    document.body.style.backgroundColor = 'rgb(159, 136, 86)'
    const { x, y } = mouse();
    let { handleWin } = props
    const size = useWindowSize();

    let randomWidth = Math.floor((size.width - 70) * Math.random()) || 200
    let randomHeight = Math.floor((size.height - 130) * Math.random()) || 200
    const [finishPositionX, setFinishPositionX] = useState(randomWidth)
    const [finishPositionY, setFinishPositionY] = useState(randomHeight)

    const [positionX, setPositionX] = useState(200)
    const [positionY, setPositionY] = useState(50)

    function handleDrag () {
        setPositionX(x-35)
        setPositionY(y-120)
    }

    const [play] = useSound(crunch)
    function handleFinish () {
        {play()}
        setFinishPositionX(randomWidth)
        setFinishPositionY(randomHeight)
        handleWin()
    }

    return (
        <div onMouseMove={() => handleDrag()} className='raceWrapper'>
            <img style={{left: positionX, top: positionY}} alt='snail' className='snail' src='./images/snail-svgrepo-com.svg' />
            
            <img onMouseOver={handleFinish} style={{left: finishPositionX, top: finishPositionY}}  alt='finish' className='finish' src='./images/leaf-svgrepo-com.svg' />
        </div>
    );
}