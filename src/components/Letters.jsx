import React, { useState } from 'react';
import duck from '../images/duck-nature-bird-target-svgrepo-com.svg'

import useSound from 'use-sound'
import duckWin from '../sounds/duckwin.wav'
import duckLose from '../sounds/ducklose.wav'

function Letters(props) {
    document.body.style.backgroundColor = '#4db8ff'

    const {losePoint, handleWin, setPaused} = props

    let randomWidth = Math.floor(70 * Math.random()) + 10
    let randomHeight = Math.floor(70 * Math.random()) + 10
    const [positionY, setPositionY] = useState(40)
    const [positionX, setPositionX] = useState(40)

    const [duckLetter, setDuckLetter] = useState('m')

    let randomLetterCode = Math.floor((Math.random() * 25) + 97)

    const [win] = useSound(duckWin)
    const [lose] = useSound(duckLose)

    function handleKeypress (event) {
        setPaused(false)
        if (event.key === duckLetter) {
            win()
            setPositionX(randomWidth)
            setPositionY(randomHeight)
            setDuckLetter(String.fromCharCode(randomLetterCode))
            handleWin()
        } else {
            lose()
            losePoint()
        }
    }


    return (
        <div>
            <input onKeyPress={(evt) => handleKeypress(evt)}className='hiddenInput' tabIndex="1" autoFocus />
            <div style={{left: `${positionX}vw`, top: `${positionY}vh`}} className='letterContainer' >
                <img className='duck' src={duck} alt="duck" /> 
                <p className='letter'>{duckLetter}</p>  
            </div> 
        </div>
    );
}

export default Letters;