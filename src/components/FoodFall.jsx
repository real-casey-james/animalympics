import React, {useState} from 'react';

import mouse from '../scripts/useMousePosition.js'

import plate from '../images/baby-animal-shaped-plate-svgrepo-com.svg'
import burger from '../images/burger-svgrepo-com.svg'
import burrito from '../images/burrito-svgrepo-com.svg'
import donut from '../images/donut-svgrepo-com.svg'
import pizza from '../images/pizza-svgrepo-com.svg'

import fire from '../images/campfire-svgrepo-com.svg'

function FoodFall(props) {
    const { x } = mouse();
    const [positionX, setPositionX] = useState(x)

    const buffet = [burger, burrito, donut, pizza, fire]
    const randomIndex = Math.floor(Math.random() * buffet.length)

    let randomWidth = Math.floor(80 * Math.random()) + 10

    const [food, setFood] = useState(buffet[0])
    const [spawnPosition, setSpawnPosition] = useState(25)

    function handleMove () {
        setPositionX(x-100)
    }

    //onclick unpauses and hides instructions

    //set timeout - or set interval

    // handle win - if plate is within xx and xx of x then award point, spawn new food, play sound

    //change class on food

    //use window size height to check if within 250px of bottom, then award point

    //sounds for good and bad - need to check if buffet index is bad

    //lose point for bad


    function handleFood () {
            console.log('firing')
            setFood(buffet[randomIndex])
            setSpawnPosition(randomWidth)

    }



    return (
        <div className='foodWrapper'>
           
           <img className='plate' src={plate} alt="plate" style={{left: positionX}}/> 
           
           <img src={food} className='food' onMouseOver={() => handleFood()} style={{left: `${spawnPosition}vw`}} />

           <div className='mouseCapture' onMouseMove={() => handleMove()}  ></div>
        </div>
    );
}

export default FoodFall;