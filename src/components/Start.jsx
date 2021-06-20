import React from 'react';
import useSound from 'use-sound'
import roar from '../sounds/roar.wav'

export default function Start (props) {
    document.body.style.backgroundColor = 'white'
    let {setPaused, handleLose} = props
    const [play] = useSound(roar)
    function start () {
        {play()}
        setPaused(false)
        handleLose()
    }
    return (
        <div className='start'>
          <img className='toucan' src='./images/toucan-animals-svgrepo-com.svg' />
          <img className='doge' src='./images/animal-dog-svgrepo-com.svg' />
          <h4></h4>
          <h2 onClick={start}>start</h2>
          <h4>it's like the olympics but for animals</h4>
        </div>
    );
}