import React, {useState} from 'react'

import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import splat from '../sounds/446115__justinvoke__wet-splat.wav'

export default function Duplicate (props) {
    document.body.style.backgroundColor = 'darkolivegreen'
    const [duplicate, setDuplicate] = useState('')
    
    const size = useWindowSize();

    let positionX = Math.floor(((size.width-300) * Math.random())) + 150 || 200
    let positionY = Math.floor(((size.height-100) * Math.random())) || 200

    const duplicates = [
        <Duplicate key={positionX / positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate key={positionX + positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate key={positionX - positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
    ]
    const [play] = useSound(splat)
    function buttonDuplicate () {
        {play()}
        setDuplicate(duplicates)
        props.handleWin()
    }
    
    return (
        <>
            <img key={positionX * positionY} alt='beetle' draggable='false' className='bug' src='./images/beetle-svgrepo-com.svg' handleWin={() => props.handleWin()} onClick={() =>  buttonDuplicate()} style={{left: positionX, top: positionY}} />
            {duplicate}
        </>
    )
}