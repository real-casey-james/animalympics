import React, { useState } from 'react'

import useSound from 'use-sound'
import whack from '../sounds/349193__natty23__whack.wav'
import quack from '../sounds/quack.wav'
import mole from '../images/mole-svgrepo-com.svg'
import ostrich from '../images/ostrich-animal-svgrepo-com.svg'
import click from '../images/click-svgrepo-com.svg'
import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'


let showMouse = true

export default function MoveAway (props) {
    document.body.style.backgroundColor = '#B37C51'

    let randomWidthA = Math.floor(80 * Math.random()) + 10
    let randomHeightA = Math.floor(80 * Math.random()) + 10
    let randomWidthB = Math.floor(80 * Math.random()) + 10
    let randomHeightB = Math.floor(80 * Math.random()) + 10
    const [positionX, setPositionX] = useState(15)
    const [positionY, setPositionY] = useState(20)
    const [animalPositionX, setAnimalPositionX] = useState(80)
    const [animalPositionY, setAnimalPositionY] = useState(20)


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
        loseSound()
        props.losePoint()
        setPositionX(randomWidthA)
        setPositionY(randomHeightA)
        setAnimalPositionX(randomWidthB)
        setAnimalPositionY(randomHeightB)
    }
    
    return (
        <>
        <div className='moleContainer'>
            <img alt='mole' draggable='false' src={mole} className='mole' style={{left: `${positionX}vw`, top: `${positionY}vh`}} onClick={buttonMoveAway} />
            
            <img alt='ostrich' draggable='false' src={ostrich} className='ostrich' style={{left: `${animalPositionX}vw`, top: `${animalPositionY}vh`}} onClick={lose}/>

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


