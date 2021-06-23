import React, {useEffect, useState} from 'react';

import mouse from '../scripts/useMousePosition.js'
import useWindowSize from '../scripts/useWindowSize'

import plate from '../images/baby-animal-shaped-plate-svgrepo-com.svg'
import burger from '../images/burger-svgrepo-com.svg'
import burrito from '../images/burrito-svgrepo-com.svg'
import donut from '../images/donut-svgrepo-com.svg'
import pizza from '../images/pizza-svgrepo-com.svg'

import fire from '../images/campfire-svgrepo-com.svg'

import useSound from 'use-sound'
import winSound from '../sounds/445974__breviceps__cartoon-slurp.wav'
import loseSound from '../sounds/burn.wav'

let buffetIndex = 0

function FoodFall(props) {
    document.body.style.backgroundColor = '#ffb3b3'
    const { x } = mouse();
    const [positionX, setPositionX] = useState(x)
    const {handleWin, losePoint} = props
    const buffet = [burger, burrito, donut, pizza, fire]
    
    const size = useWindowSize();
    
    let randomWidth = Math.floor(80 * Math.random()) + 10

    const [food, setFood] = useState(buffet[0])
    const [spawnPosition, setSpawnPosition] = useState(25)

    function handleMove () {
        setPositionX(x-100)
    }

    const [win] = useSound(winSound)
    const [lose] = useSound(loseSound)
    
    
    useEffect(() => {
        if ((spawnPosition * size.width)/100 - x > -200 && (spawnPosition * size.width)/100 - x < 200) {
            if (buffetIndex !== 0) {
                win()
                handleWin(true)
            } else if (buffetIndex === 0) {
                lose()
                losePoint(true)
            }
        }
        
        setTimeout(() => {
            buffetIndex++
            if (buffetIndex === buffet.length) {
                buffetIndex = 0
            }
            setFood(buffet[buffetIndex])
            setSpawnPosition(randomWidth)
            
        }, 1000);
    }, [food])
    
    return (
        <div className='foodWrapper' onMouseMove={() => handleMove()} >
           
           <img className='plate' src={plate} alt="plate" style={{left: positionX}}/> 

           <img src={food} alt='food' className='food' style={{left: `${spawnPosition}vw`}} />
        </div>
    );
}

export default FoodFall;