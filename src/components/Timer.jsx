import React, { useEffect, useState } from 'react';

export default function Timer (props) {
    let {move, setMove, handleLose, paused, reset, showTimer} = props
    let [timer, setTimer] = useState(7)
    
    useEffect(() => {
        let time
        if (reset === true) {
            setTimer(7)
        }
        if (paused === true) {
            return null
        } else if (move === true) {
            clearTimeout(time)
            setMove(false)
            setTimer(7)
        } else if (timer > 0) {
            time = setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            clearTimeout(time)
            setTimer(7)
            handleLose()
        }
    }, [timer, paused])

    return (
        <div>
           {showTimer && <span className='time' >Time left: <strong>{timer}</strong></span>}
        </div>
    );
}