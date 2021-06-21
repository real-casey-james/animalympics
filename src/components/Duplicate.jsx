import React, {useState} from 'react'

import useWindowSize from '../scripts/useWindowSize'
import useSound from 'use-sound';
import splat from '../sounds/446115__justinvoke__wet-splat.wav'
import beetle from '../images/beetle-svgrepo-com.svg'

export default function Duplicate (props) {
    document.body.style.backgroundColor = 'darkolivegreen'
    const [duplicate, setDuplicate] = useState('')
    const {setPaused} = props
    const size = useWindowSize();

    let positionX = Math.floor(((size.width-300) * Math.random())) + 150 || 200
    let positionY = Math.floor(((size.height-100) * Math.random())) || 200

    const duplicates = [
        <Duplicate setPaused={setPaused} key={positionX / positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate setPaused={setPaused} key={positionX + positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
        <Duplicate setPaused={setPaused} key={positionX - positionY} handleWin={() => props.handleWin()} onClick={() => buttonDuplicate()} style={{left: positionX, top: positionY}}/>,
    ]
    const [play] = useSound(splat)
    function buttonDuplicate () {
        props.setPaused(false)
        play()
        setDuplicate(duplicates)
        props.handleWin()
    }
    
    return (
        <>
            <img setPaused={setPaused} key={positionX * positionY} alt='beetle' draggable='false' className='bug' src={beetle} handleWin={() => props.handleWin()} onClick={() =>  buttonDuplicate()} style={{left: positionX, top: positionY}} />
            {duplicate}
        </>
    )
}