import React, { useEffect, useState } from 'react';

import animal from '../images/animal-kingdom-coati-svgrepo-com.svg'
import arrow from '../images/arrow-svgrepo-com.svg'
import axe from '../images/axe-svgrepo-com.svg'
import bomb from '../images/fuse-weapon-svgrepo-com.svg'

import useSound from 'use-sound'
import ding from '../sounds/ding.wav'
import ugh from '../sounds/ugh.wav'

import cross from '../images/cancel-svgrepo-com.svg'
import mouse from '../images/computer-mouse-with-wheel.svg'

let localPause = true

function Scroll({ setPaused, handleWin, losePoint}) {
    document.body.style.backgroundColor = '#ffd966'
    
    const [positionY, setPositionY] = useState(40)
    const [arrowPositionX, setArrowPositionX] = useState(0)
    const [arrowPositionY, setArrowPositionY] = useState(20)
    const [axePositionX, setAxePositionX] = useState(-40)
    const [axePositionY, setAxePositionY] = useState(60)
    const [bombPositionX, setBombPositionX] = useState(-80)
    const [bombPositionY, setBombPositionY] = useState(60)

    // useEffect(() => { 
    //     if (!localPause) {
    //         let start = Date.now()
    //         let localArrow = arrowPositionX
    //         let frames = requestAnimationFrame(function arrowMove () {
    //             console.log('firing')
    //             if (arrowPositionX < 100) {
    //                 setArrowPositionX(localArrow++)
    //             } else {
    //                 setArrowPositionX(-10)
    //                 setArrowPositionY(Math.random() * 90)
    //             }
    //             let interval = Date.now() - start
    //             requestAnimationFrame(arrowMove)
    //         });
    //         }
    // }, []) 

    useEffect(() => { // set local arrow position? is requestanimationframe doing anything?
        if (!localPause) {
        const int = requestAnimationFrame(() => {
            if (arrowPositionX < 100) {
                setArrowPositionX(arrowPositionX + 1)
            } else {
                setArrowPositionX(-10)
                setArrowPositionY(Math.random() * 90)
            }
        });
        }
    }) 

    useEffect(() => {
        if (!localPause) {
        const int = requestAnimationFrame(() => {
            if (axePositionX < 100) {
                setAxePositionX(axePositionX + 1)
            } else {
                setAxePositionX(-10)
                setAxePositionY(Math.random() * 90)
            }
        });
    }
    })

    useEffect(() => {
        if (!localPause) {
        const int = requestAnimationFrame(() => {
            if (bombPositionX < 100) {
                setBombPositionX(bombPositionX + 1)
            } else {
                setBombPositionX(-10)
                setBombPositionY(Math.random() * 90)
            }
        });
    }
    })

    const [winSound] = useSound(ding)
    const [loseSound] = useSound(ugh)

    useEffect(() => {
        if (arrowPositionX === 90 && arrowPositionY - positionY >= -10 && arrowPositionY - positionY <= 10) {
            losePoint()
            loseSound()
        } else if (arrowPositionX === 90) {
            handleWin()
            winSound()
        }
    }, [arrowPositionX])

    useEffect(() => {
        if (axePositionX === 90 && axePositionY - positionY >= -10 && axePositionY - positionY <= 10) {
            losePoint()
            loseSound()
        } else if (axePositionX === 90) {
            handleWin()
            winSound()
        }
    }, [axePositionX])

    useEffect(() => {
        if (bombPositionX === 90 && bombPositionY - positionY >= -10 && bombPositionY - positionY <= 10) {
            losePoint()
            loseSound()
        } else if (bombPositionX === 90) {
            handleWin()
            winSound()
        }
    }, [bombPositionX])
    
    function handleScroll (e) {
        if (e.nativeEvent.wheelDelta > 0 && positionY > 0) {
            setPositionY(positionY - 1)        
        } else if (e.nativeEvent.wheelDelta < 0 && positionY < 83){
            setPositionY(positionY + 1)  
        }
    }

    function handleClick () {
        localPause = false
        setTimeout(() => {
            setPaused(false)
        }, 1500);
        setTimeout(() => {
            localPause = true
        }, 8500);
    }
    
    return (
        <div onWheel={(e) => handleScroll(e)} onClick={() => handleClick()} className='scrollContainer'>
            {localPause && <p className='instructionText'>scroll wheel or track pad moves animal. avoid everything. click to start</p>}
            <img className='scrollAnimal' style={{top: `${positionY}vh`}} src={animal} alt="" />
            <img className='arrow' style={{right: `${arrowPositionX}vw`, top: `${arrowPositionY}vh` }} src={arrow} alt="" />
            <img className='axe' style={{right: `${axePositionX}vw`, top: `${axePositionY}vh` }} src={axe} alt="" />
            <img className='bomb' style={{right: `${bombPositionX}vw`, top: `${bombPositionY}vh` }} src={bomb} alt="" />

            {localPause && 
           <>
                <div className='exampleScrollContainer'>
                    <img  alt='cross' className='cross' src={cross} />
                    <div className='exFoodContainer'>
                        <img className='exampleFood' src={arrow} alt="" />
                        <img className='exampleFood' src={axe} alt="" />
                        <img className='exampleFood' src={bomb} alt="" />
                    </div>
                </div>
                <img className='exampleMouse' src={mouse} alt="" />
            </>}
        </div>
    );
}

export default Scroll;