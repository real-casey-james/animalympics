import React, { useState, useEffect } from 'react';
import useSound from 'use-sound'
import bubbles from '../sounds/bubbles.wav'
import fish from '../images/fish-svgrepo-com.svg'
import chips from '../images/fries-svgrepo-com.svg'
import keys from '../images/pngwing.com.png'
import seaweed from '../images/seaweed-svgrepo-com.svg'

let showControls = true
let i = 0 

export default function Fish ({ handleWin, setPaused }) {
    document.body.style.backgroundColor = 'rgb(0, 115, 230)'

    let randomWidth = Math.floor(80 * Math.random()) + 10
    let randomHeight = Math.floor(80 * Math.random()) + 10

    const [chipPositionX, setChipPositionX] = useState(70)
    const [chipPositionY, setChipPositionY] = useState(50)

    const [fishPositionX, setFishPositionX] = useState(10)
    const [fishPositionY, setFishPositionY] = useState(10)
    const [fishDirection, setFishDirection] = useState(1)

    function keyHandler (event) {
            showControls = false
            setPaused(false)
            if (event.key === 'ArrowRight') {
                setFishDirection(1)
                let x = fishPositionX
                let i = 0
                const int = setInterval(() => {
                    x += 1
                    i++
                    setFishPositionX(x) 
                    if (i > 10) {
                        clearInterval(int)
                    }
                }, 10)       
            }
            if (event.key === 'ArrowLeft') {
                setFishDirection(-1)
                let x = fishPositionX
                let i = 0
                const int = setInterval(() => {
                    x -= 1
                    i++
                    setFishPositionX(x) 
                    if (i > 10) {
                        clearInterval(int)
                    }
                }, 10)  
            }
            if (event.key === 'ArrowUp') { 
                let y = fishPositionY
                let i = 0
                const int = setInterval(() => {
                    y -= 1
                    i++
                    setFishPositionY(y) 
                    if (i > 10) {
                        clearInterval(int)
                    }
                }, 10)  
                }
            if (event.key === 'ArrowDown') { 
                let y = fishPositionY
                let i = 0
                const int = setInterval(() => {
                    y += 1
                    i++
                    setFishPositionY(y) 
                    if (i > 10) {
                        clearInterval(int)
                    }
                }, 10)  
                }
    }
    const [play] = useSound(bubbles)
  
    useEffect(() => {
        if (fishPositionX > 100) { setFishPositionX(-10) }
        if (fishPositionX < -10) { setFishPositionX(100) }
        if (fishPositionY > 100) { setFishPositionY(0) }
        if (fishPositionY < 0) { setFishPositionY(100) }

        if (fishPositionX - chipPositionX >= -10 && fishPositionX - chipPositionX <= 10 && fishPositionY - chipPositionY >= -10 && fishPositionY - chipPositionY <= 10 ) {
            //100ms
        //     if (i === 0) {
        //         let randomWidth = Math.floor(80 * Math.random()) + 10
        //         let randomHeight = Math.floor(80 * Math.random()) + 10
    
        //         console.log('current', chipPositionX, 'new', randomWidth)

            
        //     let localX = chipPositionX
        //     let localY = chipPositionY
        //     let stepX = (chipPositionX - randomWidth) / 10
        //     let stepY = (chipPositionY - randomHeight) / 10
        //     console.log(localX, localY, stepX, stepY)
        //     // let i = 0 
        //     const int = setInterval(() => {
        //         localX -= stepX
        //         localY -= stepY
        //         console.log(i)
        //         i++
                
        //         setChipPositionX(localX)
        //         setChipPositionY(localY)
                
        //         if (i === 1) {
        //             play()
        //             handleWin()
        //         }
                
        //         if (i > 10) {
        //             console.log('firing')
        //             clearInterval(int)
        //             i = 0
        //         }
        //     }, 10);

        // }
            setChipPositionX(randomWidth)
            setChipPositionY(randomHeight)
            play()
            handleWin()
        }
    }, [fishPositionX, fishPositionY])

    return (
        <div onKeyDown={keyHandler} id='fishy' className='fishContainer'>
            <input className='hiddenInput' tabIndex="1" autoFocus />
            <img alt='fish' className='fish' style={{left: `${fishPositionX}vw`, top: `${fishPositionY}vh`, transform: `scaleX(${fishDirection})`}} src={fish} />
            <img alt='chips' className='chips' style={{left: `${chipPositionX}vw`, top: `${chipPositionY}vh`}} src={chips} />
            {showControls && <img alt='keys' className='keys' src={keys}/>}
            <img className='seaweed' src={seaweed} alt="" />
            <img className='seaweed2' src={seaweed} alt="" />
        </div>
    );
}

