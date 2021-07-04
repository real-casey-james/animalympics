import React, { useState, useEffect } from 'react';
import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import nom from '../sounds/172134__paulmorek__nom-d-01.wav'
import monster from '../images/halloween-monster-animal-head-with-big-open-mouth-svgrepo-com.svg'
import cow from '../images/cow-animals-svgrepo-com.svg'
import sheep from '../images/sheep-animals-svgrepo-com.svg'
import swan from '../images/swan-animals-svgrepo-com.svg'
import rabbit from '../images/rabbit-animals-svgrepo-com.svg'
import mouseIcon from '../images/mouse-svgrepo-com.svg'

let animalIndex = 0
let showMouse = true
let grabbed = false
let localPause = true

export default function FeedMe ({ handleWin, setPaused }) {
    const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)')
    document.body.style.backgroundColor = backgroundColor

    let r = 255
    let g = 255

    useEffect(() => {
        if (localPause === false) {
            const int = setInterval(() => {
                r -= 2
                g--
                setBackgroundColor(`rgb(${r}, ${g}, 255)`)
            }, 200)
            const time0 = setTimeout(() => {
                localPause = true
            }, 7000);
            return () => clearInterval(int)
        }
    }, [localPause])

    let animals = [
        sheep,
        cow,
        rabbit,
        swan
    ]

    let [animal, setAnimal] = useState(animals[animalIndex])

    const { x, y } = mouse();
    const size = useWindowSize();
    let randomWidth = Math.floor((size.width * 0.7) * Math.random()) || 150
    let randomHeight = Math.floor((size.height - 130) * Math.random()) || 150
    const [positionX, setPositionX] = useState(randomWidth)
    const [positionY, setPositionY] = useState(randomHeight)
    const [direction, setDirection] = useState(1)
    
    function handleDrag () {
        if (grabbed === true) {
            setPositionX(x-100)
            setPositionY(y-100)
            showMouse = false
            localPause = false
            setPaused(false)
        }
    }

    useEffect(()=> {
        if (positionX > (size.width * 0.65) && positionY > (size.height * 0.65)) {
            grabbed = false
            onConsumption()
        }
        })

    const [play] = useSound(nom)

    function grabbedIt () { grabbed = true }

    function onConsumption () {
        play()
        handleWin()
        animalIndex++
        if (animalIndex === animals.length) { animalIndex = 0 }
        setAnimal(animals[animalIndex])
        setPositionX(randomWidth)
        setPositionY(randomHeight)
        if (animalIndex === 1 || animalIndex === 2) {
            setDirection(-1)
        } else {
            setDirection(1)
        }
    }
    
    return (
        <div onMouseMove={() => handleDrag()}className='animalContainer'>
            <img  alt='animal' draggable='false' onMouseOver={() => grabbedIt()} style={{left: positionX, top: positionY, transform: `scaleX(${direction})`}} className='animal' src={animal} />
            <img  alt='monster' className='monster' src={monster} />
            {showMouse && <img  alt='mouse' className='mouseIcon' src={mouseIcon}/>}
        </div>
    );
}