import React, {useEffect, useState} from 'react';

import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'

import plate from '../images/baby-animal-shaped-plate-svgrepo-com.svg'
import burger from '../images/burger-svgrepo-com.svg'
import burrito from '../images/burrito-svgrepo-com.svg'
import donut from '../images/donut-svgrepo-com.svg'
import pizza from '../images/pizza-svgrepo-com.svg'

import fire from '../images/campfire-svgrepo-com.svg'

import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'

import useSound from 'use-sound'
import winSound from '../sounds/445974__breviceps__cartoon-slurp.wav'
import loseSound from '../sounds/burn.wav'

let showInst = true

function FoodFall({ handleWin, losePoint, setPaused }) {
    document.body.style.backgroundColor = '#ffb3b3'
    const { x } = mouse();
    const [positionX, setPositionX] = useState(x)
    const buffet = [burger, burrito, donut, pizza, fire]
    
    const size = useWindowSize();

    const [food, setFood] = useState(buffet[0])
    const [foodY, setFoodY] = useState(2)
    const [spawnPosition, setSpawnPosition] = useState(10)
    const [foodScale, setFoodScale] = useState(1)

    const [food2, setFood2] = useState(buffet[4])
    const [foodY2, setFoodY2] = useState(2)
    const [spawnPosition2, setSpawnPosition2] = useState(75)
    const [foodScale2, setFoodScale2] = useState(1)

    const [localPause, setLocalPause] = useState(true)

    function handleMove () {
        setPositionX(x-100)
    }

    const [win] = useSound(winSound)
    const [lose] = useSound(loseSound)

    useEffect(() => {
        if (localPause === false) {
        let y = 2
        const foodDrop = setInterval(() => {
            y++
            setFoodY(y)
            if (y > 100) {
                y = -15
                setFoodScale(1)
                setFood(buffet[Math.floor(Math.random() * buffet.length)])
                setSpawnPosition(Math.floor(80 * Math.random()))
            }
            
        }, 12)
        return () => clearInterval(foodDrop)
    }
    }, [localPause])

    useEffect(() => {
        if (localPause === false) {
        let y2 = 2
        const foodDrop = setInterval(() => {
            y2++
            setFoodY2(y2)
            if (y2 > 100) {
                y2 = -15
                setFoodScale2(1)
                setFood2(buffet[Math.floor(Math.random() * buffet.length)])
                setSpawnPosition2(Math.floor(80 * Math.random()))
            }
        }, 15)
        return () => clearInterval(foodDrop)
    }
    }, [localPause])

    useEffect(() => {
        if (foodY === 75 && (spawnPosition * size.width)/100 - x > -200 && (spawnPosition * size.width)/100 - x < 50) {
            let f = 1
            let i = 0
            const scaleInt = setInterval(() => {
                setFoodScale(f -= 0.1)
                i++
                if (i === 10) {
                    clearInterval(scaleInt)
                }
            }, 10)
            if (food.search('fire') === - 1) {
                    win()
                    handleWin()
                } else {
                    lose()
                    losePoint()
                }
            }
    }, [foodY])

    useEffect(() => {
        if (foodY2 === 75 && (spawnPosition2 * size.width)/100 - x > -200 && (spawnPosition2 * size.width)/100 - x < 50) {
            let f = 1
            let i = 0
            const scaleInt = setInterval(() => {
                setFoodScale2(f -= 0.1)
                i++
                if (i === 10) {
                    clearInterval(scaleInt)
                }
            }, 10)
            if (food2.search('fire') === - 1) {
                    win()
                    handleWin()
                } else {
                    lose()
                    losePoint()
                }
            }
    }, [foodY2])

    function startGame () {
        setLocalPause(false)
        showInst = false
        setPaused(false)
    }
    
    return (
        <div className='foodWrapper' onMouseMove={() => handleMove()} onClick={() => startGame()} >
           
           <img className='plate' src={plate} alt="plate" style={{left: positionX}}/> 

           <img src={food} alt='food' className='food2' style={{left: `${spawnPosition}vw`, top: `${foodY}vh`, transform: `scale(${foodScale}, ${foodScale})` }} />

           <img src={food2} alt='food' className='food2' style={{left: `${spawnPosition2}vw`, top: `${foodY2}vh`, transform: `scale(${foodScale2}, ${foodScale2})` }} />

           {showInst && 
           <>
                <div className='imgContainer'>
                <img alt='tick' className='tick' src={tick} /><img  alt='cross' className='cross' src={cross} />
                </div>
                <div className='exampleFoodfallContainer'>
                <div className='exFoodContainer'>
                    <img className='exampleFood' src={burger} alt="" />
                    <img className='exampleFood' src={pizza} alt="" />
                    <img className='exampleFood' src={burrito} alt="" />
                    <img className='exampleFood' src={donut} alt="" />
                </div>
            <img className='exampleFood' src={fire} alt="" />
            </div>
            </>}

        </div>
    );
}

export default FoodFall;