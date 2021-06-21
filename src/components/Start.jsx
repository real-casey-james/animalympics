import React from 'react';
import useSound from 'use-sound'
import roar from '../sounds/roar.wav'
import toucan from '../images/toucan-animals-svgrepo-com.svg'
import doge from '../images/animal-dog-svgrepo-com.svg'

export default function Start (props) {
    document.body.style.backgroundColor = 'white'
    let {setPaused, handleLose, setShowTimer} = props
    const [play] = useSound(roar)
    function start () {
        play()
        setPaused(false)
        setShowTimer(true)
        handleLose()
    }
    return (
        <div className='start'>
          <img alt='toucan' className='toucan' src={toucan} />
          <img alt='doge' className='doge' src={doge} />
          <div></div>
          <h2 onClick={start}>start</h2>
          <h4>it's like the olympics but for animals</h4>
        </div>
    );
}