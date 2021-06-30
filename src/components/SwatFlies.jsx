import React, { useState } from 'react';
import mouse from '../scripts/useMousePosition.js'

import Fly from './Fly';
import Butterfly from './Butterfly'

import swat from '../images/fly-swatter-svgrepo-com.svg'

import click from '../images/click-svgrepo-com.svg'
import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'
import fly from '../images/fly-insect-svgrepo-com.svg'
import butterfly from '../images/butterfly-svgrepo-com.svg'

let showMouse = true
let counter = 0 

function SwatFlies(props) {
    document.body.style.backgroundColor = '#df80ff'
    
    const {setPaused, handleWin, losePoint} = props

    const { x, y } = mouse();
    const [positionX, setPositionX] = useState(200)
    const [positionY, setPositionY] = useState(50)
    const [swatSkew, setSwatSkew] = useState(0)

    function handleMouseMove () {
        setPositionX(x-150)
        setPositionY(y-50)
    }

    function increaseCounter () {
        counter++
        showMouse = false
    }

    function handleSwatDown () {
        setSwatSkew(20)
        
    }

    function handleSwatUp () {
        setSwatSkew(0)
    }

    return (
        <div draggable='false' className='swatContainer' onMouseMove={() => handleMouseMove()} onMouseDown={() => handleSwatDown()} onMouseUp={() => handleSwatUp()}>
            <img draggable='false' className='swat' src={swat} style={{left: positionX, top: positionY, transform: `skewY(${swatSkew}deg)`}}  alt="swat" />

           {counter >= 0 && <Fly handleWin={() => handleWin()} top='20vh' left='15vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()}  /> }
           {counter >= 0 && <Butterfly losePoint={() => losePoint()} top='80vh' left='75vw' setPaused={() => setPaused()}  />  }
           {counter >= 1 && <Fly handleWin={() => handleWin()} top='70vh' left='55vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()}  /> }
           {counter >= 2 && <Butterfly losePoint={() => losePoint()} top='20vh' left='45vw' setPaused={() => setPaused()} /> }
           {counter >= 2 && <Fly handleWin={() => handleWin()} top='80vh' left='15vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 3 && <Fly handleWin={() => handleWin()} top='40vh' left='35vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 4 && <Fly handleWin={() => handleWin()} top='15vh' left='75vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 5 && <Butterfly losePoint={() => losePoint()} top='50vh' left='10vw' setPaused={() => setPaused()} /> }
           {counter >= 5 && <Fly handleWin={() => handleWin()} top='80vh' left='15vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 6 && <Fly handleWin={() => handleWin()} top='40vh' left='75vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 7 && <Fly handleWin={() => handleWin()} top='70vh' left='35vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 8 && <Fly handleWin={() => handleWin()} top='10vh' left='5vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 9 && <Fly handleWin={() => handleWin()} top='40vh' left='60vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 10 && <Butterfly losePoint={() => losePoint()} top='80vh' left='25vw' setPaused={() => setPaused()} /> }
           {counter >= 10 && <Fly handleWin={() => handleWin()} top='70vh' left='5vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 11 && <Fly handleWin={() => handleWin()} top='10vh' left='80vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 12 && <Fly handleWin={() => handleWin()} top='10vh' left='60vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 13 && <Fly handleWin={() => handleWin()} top='20vh' left='30vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 14 && <Fly handleWin={() => handleWin()} top='40vh' left='20vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 15 && <Fly handleWin={() => handleWin()} top='50vh' left='50vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }
           {counter >= 16 && <Fly handleWin={() => handleWin()} top='60vh' left='20vw' setPaused={() => setPaused()} increaseCounter={() => increaseCounter()} /> }

           {showMouse && <><img className='click' alt='click' src={click} /> 
            <div className='exampleContainer'>
            <div className='imgContainer'>
                <img alt='tick' className='tick' src={tick} /><img  alt='cross' className='cross' src={cross} />
            </div>
            <div className='imgContainer'>
                <img  alt='mole' className='exampleMole' src={fly} /><img alt='ostrich' className='exampleMole' src={butterfly}/> 
            </div> 
            </div></>}
        </div>
    );
}

export default SwatFlies;