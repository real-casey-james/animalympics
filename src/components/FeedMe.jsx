import React, { useState, useEffect } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import nom from '../sounds/172134__paulmorek__nom-d-01.wav'

let animalIndex = 0

export default function FeedMe (props) {
    document.body.style.backgroundColor = 'white'
    let {handleWin} = props
    let animals = [
        './images/cow-animals-svgrepo-com.svg',
        './images/sheep-animals-svgrepo-com.svg',
        './images/swan-animals-svgrepo-com.svg',
        './images/rabbit-animals-svgrepo-com.svg'
    ]

    let [animal, setAnimal] = useState(animals[animalIndex])

    const { x, y } = mouse();
    const size = useWindowSize();
    let randomWidth = Math.floor((size.width * 0.7) * Math.random()) || 200
    let randomHeight = Math.floor((size.height - 130) * Math.random()) || 200
    const [positionX, setPositionX] = useState(randomWidth)
    const [positionY, setPositionY] = useState(randomHeight)
    
    function handleDrag () {
        setPositionX(x-100)
        setPositionY(y-100)
    }

    useEffect(()=> {
        if (positionX > (size.width * 0.7) && positionY > (size.height * 0.7)) {
            onConsumption()
        }
        })

        const [play] = useSound(nom)

    function onConsumption () {
        {play()}
        handleWin()
        animalIndex++
        if (animalIndex === animals.length) {
            animalIndex = 0
        }
        setAnimal(animals[animalIndex])
        setPositionX(randomWidth)
        setPositionY(randomHeight)
    }
    
    return (
        <div className='animalContainer'>
            <img draggable='false' onMouseMove={() => handleDrag()} style={{left: positionX, top: positionY}} className='animal' src={animal} />
            <img className='monster' src='./images/halloween-monster-animal-head-with-big-open-mouth-svgrepo-com.svg' />
        </div>
    );
}