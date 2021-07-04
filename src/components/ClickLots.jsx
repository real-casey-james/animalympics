import React, { useState } from 'react';
import useSound from 'use-sound';
import squeek from '../sounds/squeek.wav'
import win from '../sounds/99636__tomlija__small-crowd-yelling-yeah.wav'
import turtle from '../images/turtle-svgrepo-com.svg'
import click from '../images/click-svgrepo-com.svg'

import ambulance from '../images/ambulance-svgrepo-com.svg'
import bicycle from '../images/bicycle-bike-svgrepo-com.svg'
import bus from '../images/bus-front-view-svgrepo-com.svg'
import cab from '../images/cab-svgrepo-com.svg'
import car from '../images/car-svgrepo-com.svg'
import truck from '../images/truck-lorry-svgrepo-com.svg'

let showMouse = true

function ClickLots ({ setPaused, handleWin }) {
    document.body.style.backgroundColor = '#88cc00'
    // const trafficArray = [ambulance, bicycle, bus, cab, car, truck]
    // const [vehicle, setVehicle] = useState(trafficArray[Math.floor(Math.random() * trafficArray.length)])
    // const [vehicle2, setVehicle2] = useState(trafficArray[Math.floor(Math.random() * trafficArray.length)])
    const [positionX, setPositionX] = useState(5)

    const [move] = useSound(squeek)
    const [winGame] = useSound(win)
    function handleClick () {
        showMouse = false
        move()
        setPaused(false)
        let x = positionX
        let i = 0
        const int = setInterval(() => {
            x++
            i++
            setPositionX(x)
            if (i > 4) { clearInterval(int) }
            if (positionX >= 85 && i > 4) {
                winGame()
                handleWin(true)
                setPositionX(0)
            }
        }, 10)
    }
    return (
        <div onClick={() => handleClick()} className='clickWrapper' >
            <img className='turtle' src={turtle} alt="" style={{left: `${positionX}vw`}} />
            <div className='finishLine'></div>
            {showMouse && <img className='clickLots' alt='click' src={click} /> }
            {/* <div className='road'/>
            <img className='vehicle' src={vehicle} alt="" />
            <img className='vehicle2' src={vehicle2} alt="" /> */}
        </div>
    );
}

export default ClickLots;