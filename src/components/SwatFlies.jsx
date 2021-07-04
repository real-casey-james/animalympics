import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'

import Fly from './Fly';
import Butterfly from './Butterfly'

import swat from '../images/fly-swatter-svgrepo-com.svg'

import click from '../images/click-svgrepo-com.svg'
import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'
import fly from '../images/fly-insect-svgrepo-com.svg'
import butterfly from '../images/butterfly-svgrepo-com.svg'

let showMouse = true

function SwatFlies({ setPaused, handleWin, losePoint }) {
    document.body.style.backgroundColor = '#df80ff'
    
    const { x, y } = mouse();
    const [positionX, setPositionX] = useState(200)
    const [positionY, setPositionY] = useState(50)
    const [swatSkew, setSwatSkew] = useState(0)

    let insectArray = [
        <Fly handleSwatFly={() => handleSwatFly()} top={20} left={15} />,
        <Butterfly losePoint={() => losePoint()} top={80} left={75} /> 
    ]

    const [insects, setInsects] = useState(insectArray)

    function handleMouseMove () {
        setPositionX(x-150)
        setPositionY(y-50)
    }

    function handleSwatFly () {
        handleWin()
        showMouse = false
        setPaused(false)
        insectArray.push(<Fly handleSwatFly={() => handleSwatFly()} top={Math.floor(Math.random() * 80)} left={Math.floor(Math.random() * 80)} />)
        if (Math.random() < 0.25) {
            insectArray.push(<Butterfly losePoint={() => losePoint()} top={Math.floor(Math.random() * 80)} left={Math.floor(Math.random() * 80)} />)
        } else {
            insectArray.push(<Fly handleSwatFly={() => handleSwatFly()} top={Math.floor(Math.random() * 80)} left={Math.floor(Math.random() * 80)} />)
        }
        setInsects([...insectArray])
    }

    function handleSwatDown () { setSwatSkew(20) }
    function handleSwatUp () { setSwatSkew(0) }

    return (
        <div draggable='false' className='swatContainer' onMouseMove={() => handleMouseMove()} onMouseDown={() => handleSwatDown()} onMouseUp={() => handleSwatUp()}>
            <img draggable='false' className='swat' src={swat} style={{left: positionX, top: positionY, transform: `skewY(${swatSkew}deg)`}}  alt="swat" />

           {insects}
    
           {showMouse && <><img className='click' alt='click' src={click} /> 
            <div className='exampleContainer'>
            <div className='imgContainer'>
                <img alt='tick' className='tick' src={tick} /><img  alt='cross' className='cross' src={cross} />
            </div>
            <div className='imgContainer'>
                <img  alt='mole' className='exampleMole' src={fly} /><img alt='ostrich' className='exampleMole' src={butterfly}/> 
            </div> 
            </div></>}
        </div>
    );
}

export default SwatFlies;