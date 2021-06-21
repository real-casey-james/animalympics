import React from 'react'
import deer from '../images/deer-facing-right-svgrepo-com.svg'
import lion from '../images/lion-facing-right-svgrepo-com.svg'
import useSound from 'use-sound'
import win from '../sounds/337049__shinephoenixstormcrow__320655-rhodesmas-level-up-01.mp3'

export default function End (props) {
    document.body.style.backgroundColor = 'white'
    let {score, setPaused, resetScore, setShowTimer} = props
    const [play] = useSound(win)
    play()
    setPaused(true)
    setShowTimer(false)
    return (
        <div className='end'>
            <img alt='deer' className='deer' src={deer} />
            <img alt='lion' className='lion' src={lion} />
            <h3>Congratulations, you finished!</h3>
            <h4>You got <strong>{score}</strong> points! </h4>
            <h2 onClick={resetScore}>try again?</h2>
        </div>
    )
}