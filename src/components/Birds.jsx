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

let cloud1position = 0
let cloud2position = 80
let cloud3position = 40

function Birds({ setPaused, handleWin }) {
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
            return () => clearInterval(int)
    }
    }, [localPause])

    const [cloud1X, setCloud1X] = useState(cloud1position)
    const [cloud2X, setCloud2X] = useState(cloud2position)
    const [cloud3X, setCloud3X] = useState(cloud3position)

    useEffect(() => {
        const clouds = setInterval(() => {
            cloud1position -= 0.05
            if (cloud1position < -25) {
                cloud1position = 100
            }
            setCloud1X(cloud1position)
            cloud2position -= 0.05
            if (cloud2position < -25) {
                cloud2position = 100
            }
            setCloud2X(cloud2position)
            cloud3position -= 0.05
            if (cloud3position < -25) {
                cloud3position = 100
            }
            setCloud3X(cloud3position)
        }, 20);
        return () => clearInterval(clouds)
    }, [])

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
            <img className='cloud cloud1' style={{left: `${cloud1X}vw`}} src={cloud1} alt="" />
            <img className='cloud cloud2' style={{left: `${cloud2X}vw`}}src={cloud2} alt="" />
            <img className='cloud cloud3' style={{left: `${cloud3X}vw`}}src={cloud3} alt="" />
        </div>
    );
}

export default Birds;