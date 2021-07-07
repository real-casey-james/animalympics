import React, { useState, useEffect } from 'react';
import mouse from '../scripts/useMousePosition.js'
import Bird from './Bird';

import crosshairs from '../images/crosshairs-solid-svgrepo-com.svg'
import cloud1 from '../images/cloud-svgrepo-com-2.svg'
import cloud2 from '../images/cloud-svgrepo-com.svg'
import cloud3 from '../images/clouds-cloud-svgrepo-com.svg'

import useSound from 'use-sound'
import gunshot from '../sounds/bang.wav'

let localPause = true

export default function Birds({ setPaused, handleWin }) {
    const [backgroundColor, setBackgroundColor] = useState('rgb(179, 217, 255)')
    document.body.style.backgroundColor = backgroundColor

    // let r = 179
    // let g = 217
    // let b = 255

    // useEffect(() => {
    //     if (localPause === false) {
    //         const int = setInterval(() => {
    //                 r -= 5.11
    //                 g -= 3.43
    //                 b -= 0.71
    //                 setBackgroundColor(`rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`)
    //     }, 200);
    //     const time0 = setTimeout(() => {
    //         localPause = true
    //     }, 7000);
    //     return () => clearInterval(int)
    // }
    // }, [localPause])

    const { x, y } = mouse();
    const [positionX, setPositionX] = useState(x)
    const [positionY, setPositionY] = useState(y)

    let birdArray = [
        <Bird handleWin={() => handleWin()} randomYindex={40} />
    ]

    const [birds, setBirds] = useState(birdArray)

    useEffect(() => {
        if (localPause === false) {
        const int = setInterval(() => {
            let randomYindex = Math.floor(Math.random() * 80) - 10
            birdArray.push(<Bird handleWin={() => handleWin()} randomYindex={randomYindex} />)
            setBirds([...birdArray])
            }, 500);
        const to = setTimeout(() => {
            clearInterval(int)
            birdArray = [
                <Bird handleWin={() => handleWin()} randomYindex={40} />
            ]
            setBirds([<Bird handleWin={() => handleWin()} randomYindex={40} />])
            localPause = true
        }, 7000);
        }
    
    }, [localPause])

    function mouseLock () {
        setPositionX(x-55)
        setPositionY(y-55)
    }

    const [shot] = useSound(gunshot)
    function handleClick () {
        shot()
        setPaused(false)
        localPause = false
    }

    return (
        <div className='birdWrapper' onMouseMove={() => mouseLock()}  onClick={() => handleClick()} >
            {birds} 
            <img className='crosshairs' src={crosshairs} alt="" style={{left: positionX, top: positionY}} />
            <img className='cloud cloud1' src={cloud1} alt="" />
            <img className='cloud cloud2' src={cloud2} alt="" />
            <img className='cloud cloud3' src={cloud3} alt="" />
            {localPause && <p className='instructionText'>click on the birds</p>}
        </div>
    );
}