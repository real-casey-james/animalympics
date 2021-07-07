import React, { useState } from 'react';
import duck from '../images/duck-nature-bird-target-svgrepo-com.svg'

import useSound from 'use-sound'
import duckWin from '../sounds/duckwin.wav'
import duckLose from '../sounds/ducklose.wav'

let showInst = true
 
function Letters({ losePoint, handleWin, setPaused }) {
    document.body.style.backgroundColor = '#4db8ff'

    const [positionY, setPositionY] = useState(40)
    const [positionX, setPositionX] = useState(40)

    const [duckLetter, setDuckLetter] = useState(String.fromCharCode(Math.floor((Math.random() * 25) + 97)))

    const [win] = useSound(duckWin)
    const [lose] = useSound(duckLose)

    function handleKeypress (event) {
        setPaused(false)
        showInst = false
        if (event.key === duckLetter) {
            win()
            setPositionX(Math.floor(80 * Math.random()))
            setPositionY(Math.floor(80 * Math.random()))
            setDuckLetter(String.fromCharCode(Math.floor((Math.random() * 25) + 97)))
            handleWin()
        } else {
            lose()
            losePoint()
        }
    }

    return (
        <div>

            <input onKeyPress={(evt) => handleKeypress(evt)} className='hiddenInput' tabIndex="1" autoFocus />
            {showInst && <p className='instructionText'>press the key. don't press any other key</p>}
            <div style={{left: `${positionX}vw`, top: `${positionY}vh`}} className='letterContainer' >
                <img className='duck' src={duck} alt="duck" /> 
                <p className='letter'>{duckLetter}</p>  
            </div> 
        </div>
    );
}

export default Letters;