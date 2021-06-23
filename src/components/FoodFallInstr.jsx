import React, {useState} from 'react';

import plate from '../images/baby-animal-shaped-plate-svgrepo-com.svg'
import burger from '../images/burger-svgrepo-com.svg'
import burrito from '../images/burrito-svgrepo-com.svg'
import donut from '../images/donut-svgrepo-com.svg'
import pizza from '../images/pizza-svgrepo-com.svg'

import fire from '../images/campfire-svgrepo-com.svg'

import tick from '../images/checked-tick-svgrepo-com.svg'
import cross from '../images/cancel-svgrepo-com.svg'

import mouse from '../scripts/useMousePosition.js'

function FoodFallInstr(props) {
    document.body.style.backgroundColor = '#ffb3b3'

    const { x } = mouse();
    const [positionX, setPositionX] = useState(x)
    function handleMove () {
        setPositionX(x-100)
    }


    return (
        <div className='foodWrapper' onMouseMove={() => handleMove()} onClick={() => props.advanceComponent()}>
            <img className='plate' src={plate} alt="plate" style={{left: positionX}}/> 
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
        </div>
    );
}

export default FoodFallInstr;