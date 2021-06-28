import React, { useState } from 'react'
import mouse from '../scripts/useMousePosition.js'

import useSound from 'use-sound'
import whack from '../sounds/wack.wav'

import quack from '../sounds/ostrich.wav'
import mole from '../images/mole-svgrepo-com.svg'
import ostrich from '../images/ostrich-animal-svgrepo-com.svg'
import click from '../images/click-svgrepo-com.svg'
import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'
import bat from '../images/bat-svgrepo-com.svg'

let showMouse = true

export default function MoveAway (props) {
    document.body.style.backgroundColor = '#B37C51'

    const { x, y } = mouse();
    let randomWidthA = Math.floor(80 * Math.random()) + 10
    let randomHeightA = Math.floor(80 * Math.random()) + 10
    let randomWidthB = Math.floor(80 * Math.random()) + 10
    let randomHeightB = Math.floor(80 * Math.random()) + 10
    const [positionX, setPositionX] = useState(15)
    const [positionY, setPositionY] = useState(20)
    const [animalPositionX, setAnimalPositionX] = useState(80)
    const [animalPositionY, setAnimalPositionY] = useState(20)
    const [mouseX, setMouseX] = useState(x)
    const [mouseY, setMouseY] = useState(y)
    const [batSkew, setBatSkew] = useState(0)

    function handleMouseMove () {
        setMouseX(x-240)
        setMouseY(y-50)
    }

    const [play] = useSound(whack)
    function buttonMoveAway () {
        showMouse = false
        props.setPaused(false)
        play()
        props.handleClick()
        setPositionX(randomWidthA)
        setPositionY(randomHeightA)
        setAnimalPositionX(randomWidthB)
        setAnimalPositionY(randomHeightB)
    }

    const [loseSound] = useSound(quack)
    function lose () {
        showMouse = false
        props.setPaused(false)
        loseSound()
        props.losePoint()
        setPositionX(randomWidthA)
        setPositionY(randomHeightA)
        setAnimalPositionX(randomWidthB)
        setAnimalPositionY(randomHeightB)
    }

    function handleBatDown () {
        setBatSkew(10)
        showMouse = false
    }

    function handleBatUp () {
        setBatSkew(0)
    }
    
    return (
        <>
        <div className='moleContainer' onMouseMove={() => handleMouseMove()} onMouseDown={() => handleBatDown()} onMouseUp={() => handleBatUp()}>
            <img alt='mole' draggable='false' src={mole} className='mole' style={{left: `${positionX}vw`, top: `${positionY}vh`}} onClick={buttonMoveAway} />
            
            <img alt='ostrich' draggable='false' src={ostrich} className='ostrich' style={{left: `${animalPositionX}vw`, top: `${animalPositionY}vh`}} onClick={lose}/>

            <img className='bat' src={bat} alt="" style={{left: mouseX, top: mouseY, transform: `skewY(${batSkew}deg)`}} />

            {showMouse && <><img className='click' alt='click' src={click} /> 
            <div className='exampleContainer'>
            <div className='imgContainer'>
                <img alt='tick' className='tick' src={tick} /><img  alt='cross' className='cross' src={cross} />
            </div>
            <div className='imgContainer'>
                <img  alt='mole' className='exampleMole' src={mole} /><img alt='ostrich' className='exampleMole' src={ostrich}/> 
            </div> 
            </div></>}
        </div>
        </>
    )
}


