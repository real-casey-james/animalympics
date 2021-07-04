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
import mound from '../images/firebog-ground-entrance2.svg'

let showMouse = true

export default function WackMole ({ setPaused, handleClick, losePoint }) {
    document.body.style.backgroundColor = '#B37C51'
    
    const positionArray = [5, 25, 45, 65, 85]
    let randomWidthA = positionArray[Math.floor(Math.random() * 5)]
    let randomHeightA = positionArray[Math.floor(Math.random() * 5)]
    let randomWidthB = positionArray[Math.floor(Math.random() * 5)]
    let randomHeightB = positionArray[Math.floor(Math.random() * 5)]
    const [positionX, setPositionX] = useState(5)
    const [positionY, setPositionY] = useState(25)
    const [animalPositionX, setAnimalPositionX] = useState(85)
    const [animalPositionY, setAnimalPositionY] = useState(25)
    
    const { x, y } = mouse();
    const [mouseX, setMouseX] = useState(x)
    const [mouseY, setMouseY] = useState(y)
    const [batSkew, setBatSkew] = useState(0)
    const [animalClass, setAnimalClass] = useState('wackAnimal')
    
    const [hitSound] = useSound(whack)
    const [loseSound] = useSound(quack)
    
    let moundArray = []
    for (var i = 0; i < 25; i++) { moundArray.push(<img src={mound} alt="mound" className='mound' />) 
}
    function handleMouseMove () {
        setMouseX(x-140)
        setMouseY(y-30)
    }

    function handleHit () {
        hitSound()
        handleClick()
        next()
    }

    function lose () {
        loseSound()
        losePoint()
        next()
    }

    function next () {
        showMouse = false
        setPaused(false)
        setAnimalClass('wackAnimal animalPop')
        setTimeout(() => {
            setPositionX(randomWidthA)
            setPositionY(randomHeightA)
            setAnimalPositionX(randomWidthB)
            setAnimalPositionY(randomHeightB)
            if (randomWidthA === randomWidthB && randomHeightA === randomHeightB) {
                setPositionX(5)
                setPositionY(5)
                setAnimalPositionX(85)
                setAnimalPositionY(85)
            }
        }, 250)
        setTimeout(() => {
            setAnimalClass('wackAnimal')
        }, 500);
    }

    function handleBatDown () { setBatSkew(10) }
    function handleBatUp () { setBatSkew(0) }
    
    return (
        <>
        <div className='moleContainer' onMouseMove={() => handleMouseMove()} onMouseDown={() => handleBatDown()} onMouseUp={() => handleBatUp()}>
            <img alt='mole' draggable='false' src={mole} className={animalClass} style={{left: `${positionX}vw`, top: `${positionY}vh`}} onClick={() => handleHit()} />
            
            <img alt='ostrich' draggable='false' src={ostrich} className={animalClass} style={{left: `${animalPositionX}vw`, top: `${animalPositionY}vh`}} onClick={() => lose()}/>

            <img className='bat' src={bat} alt="" style={{left: mouseX, top: mouseY, transform: `skewY(${batSkew}deg)`}} />

            {showMouse && <><img className='click' alt='click' src={click} /> 
            <div className='exampleContainer'>
            <div className='imgContainer'>
                <img alt='tick' className='tick' src={tick} /><img  alt='cross' className='cross' src={cross} />
            </div>
            <div className='imgContainer'>
                <img  alt='mole' className='exampleMole' src={mole} /><img alt='ostrich' className='exampleMole' src={ostrich}/> 
            </div> 
            </div>
            </>}
            <div className='moundContainer'>
            {moundArray}
            </div>
        </div>
        </>
    )
}


