import React, { useState } from 'react';
import useSound from 'use-sound'
import bubbles from '../sounds/bubbles.wav'
let showControls = true

export default function Fish (props) {
    document.body.style.backgroundColor = 'cornflowerblue'
    const {handleWin} = props

    let randomWidth = Math.floor(80 * Math.random()) + 10
    let randomHeight = Math.floor(80 * Math.random()) + 10

    const [chipPositionX, setChipPositionX] = useState(70)
    const [chipPositionY, setChipPositionY] = useState(50)

    const [fishPositionX, setFishPositionX] = useState(10)
    const [fishPositionY, setFishPositionY] = useState(10)
    const [fishDirection, setFishDirection] = useState(1)

    function keyHandler (event) {
            showControls = false
            checkWin()
        if (event.key === 'ArrowRight') {
            setFishDirection(1)
            setFishPositionX(fishPositionX + 10) }
        if (event.key === 'ArrowLeft') {
            setFishDirection(-1)
            setFishPositionX(fishPositionX - 10) }
        if (event.key === 'ArrowUp') { setFishPositionY(fishPositionY - 10) }
        if (event.key === 'ArrowDown') { setFishPositionY(fishPositionY + 10) }
        if (fishPositionX > 100) { setFishPositionX(0) }
        if (fishPositionX < 0) { setFishPositionX(100) }
        if (fishPositionY > 100) { setFishPositionY(0) }
        if (fishPositionY < 0) { setFishPositionY(100) }
    }
    const [play] = useSound(bubbles)
    function checkWin () {
        if (fishPositionX - chipPositionX >= -15 && fishPositionX - chipPositionX <= 15 && fishPositionY - chipPositionY >= -15 && fishPositionY - chipPositionY <= 15 ) {
            setChipPositionX(randomWidth)
            setChipPositionY(randomHeight)
            {play()}
            handleWin()
        }
    }

    return (
        <div  onKeyDown={keyHandler} id='fishy' className='fishContainer'>
            <input className='hiddenInput' tabIndex="1" autoFocus />
            <img className='fish' style={{left: `${fishPositionX}vw`, top: `${fishPositionY}vh`, transform: `scaleX(${fishDirection})`}} src='./images/fish-svgrepo-com.svg' />
            <img className='chips' style={{left: `${chipPositionX}vw`, top: `${chipPositionY}vh`}} src='./images/fries-svgrepo-com.svg' />
            {showControls && <img className='keys' src='./images/pngwing.com.png'/>}
        </div>
    );
}

