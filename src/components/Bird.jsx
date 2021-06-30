import React, { useEffect, useState } from 'react';

import frame1 from '../images/frame-1v.svg'
import frame2 from '../images/frame-2v.svg'
import frame3 from '../images/frame-3v.svg'
import frame4 from '../images/frame-4v.svg'
import frame5 from '../images/frame-5v.svg'
import frame6 from '../images/frame-6v.svg'
import frame7 from '../images/frame-7v.svg'
import frame8 from '../images/frame-8v.svg'

import useSound from 'use-sound'
import birdhit from '../sounds/squawk.wav'

let frameIndex = 0

function Bird({randomYindex, handleWin}) {

    const frameArray = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8]

    const [frame, setFrame] = useState(frameArray[frameIndex])
    const [positionY, setPositionY] = useState(randomYindex)

    useEffect(() => {
        const int = setInterval(() => {
            frameIndex++
            if (frameIndex === frameArray.length - 1) { frameIndex = 0 }
            setFrame(frameArray[frameIndex])
        }, 100);
        return () => clearInterval(int)
    }, [])
 
    const [hit] = useSound(birdhit)

    function handleHit () {
        hit()
        handleWin()
        let y = positionY
        const drop = setInterval(() => {
            y += 1
            setPositionY(y)
            if (y > 100) {
                clearInterval(drop)
            }
        }, 10)
        return () => clearInterval(drop)
    }

    return (
        <div>
            <img draggable='false' onClick={() => handleHit()} className='bird' style={{top: `${positionY}vh`}} src={frame} alt="bird" />
        </div>
    );
}

export default Bird;