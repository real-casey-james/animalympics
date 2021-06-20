import React, { useEffect, useState } from 'react';

export default function Timer (props) {
    let {move, setMove, handleLose, paused, reset} = props
    let [timer, setTimer] = useState(5)
    
    useEffect(() => {
        let time
        if (reset === true) {
            setTimer(5)
        }
        if (paused === true) {
            return null
        } else if (move === true) {
            clearTimeout(time)
            setMove(false)
            setTimer(5)
        } else if (timer > 0) {
            time = setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            clearTimeout(time)
            setTimer(5)
            handleLose()
        }
    }, [timer, paused])

    return (
        <div>
           <span className='time' >Time left: <strong>{timer}</strong></span>
        </div>
    );
}