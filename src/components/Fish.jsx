import React, { useState, useEffect } from 'react';
import useSound from 'use-sound'
import bubbles from '../sounds/bubbles.wav'
import fish from '../images/fish-svgrepo-com.svg'
import chips from '../images/fries-svgrepo-com.svg'
import keys from '../images/pngwing.com.png'
import seaweed from '../images/seaweed-svgrepo-com.svg'

let showControls = true

export default function Fish (props) {
    document.body.style.backgroundColor = 'cornflowerblue'
    const {handleWin, setPaused} = props

    let randomWidth = Math.floor(80 * Math.random()) + 10
    let randomHeight = Math.floor(80 * Math.random()) + 10

    const [chipPositionX, setChipPositionX] = useState(70)
    const [chipPositionY, setChipPositionY] = useState(50)

    const [fishPositionX, setFishPositionX] = useState(10)
    const [fishPositionY, setFishPositionY] = useState(10)
    const [fishDirection, setFishDirection] = useState(1)

    function keyHandler (event) {
            showControls = false
            setPaused(false)
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
  
    useEffect(() => {
        if (fishPositionX - chipPositionX >= -10 && fishPositionX - chipPositionX <= 10 && fishPositionY - chipPositionY >= -10 && fishPositionY - chipPositionY <= 10 ) {
            setChipPositionX(randomWidth)
            setChipPositionY(randomHeight)
            play()
            handleWin()
        }
    }, [fishPositionX, fishPositionY])

    return (
        <div onKeyDown={keyHandler} id='fishy' className='fishContainer'>
            <input className='hiddenInput' tabIndex="1" autoFocus />
            <img alt='fish' className='fish' style={{left: `${fishPositionX}vw`, top: `${fishPositionY}vh`, transform: `scaleX(${fishDirection})`}} src={fish} />
            <img alt='chips' className='chips' style={{left: `${chipPositionX}vw`, top: `${chipPositionY}vh`}} src={chips} />
            {showControls && <img alt='keys' className='keys' src={keys}/>}
            <img className='seaweed' src={seaweed} alt="" />
            <img className='seaweed2' src={seaweed} alt="" />
        </div>
    );
}
