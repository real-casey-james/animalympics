import React, {useState} from 'react';
import useSound from 'use-sound';
import squeek from '../sounds/squeek.wav'
import win from '../sounds/99636__tomlija__small-crowd-yelling-yeah.wav'
import turtle from '../images/turtle-svgrepo-com.svg'
import click from '../images/click-svgrepo-com.svg'

let showMouse = true

function ClickLots(props) {
    document.body.style.backgroundColor = '#88cc00'
    const {setPaused, handleWin} = props

    const [positionX, setPositionX] = useState(5)

    const [move] = useSound(squeek)
    const [winGame] = useSound(win)
    function handleClick () {
        showMouse = false
        move()
        setPaused(false)
        setPositionX(positionX + 5)
        if (positionX > 85) {
            winGame()
            handleWin(true)
            setPositionX(0)
        }
    }
    
    return (
        <div onClick={() => handleClick()} className='clickWrapper' >

         <img className='turtle' src={turtle} alt="" style={{left: `${positionX}vw`}} />
        <div className='finishLine'></div>

        {showMouse && <img className='clickLots' alt='click' src={click} /> }
        </div>
    );
}

export default ClickLots;