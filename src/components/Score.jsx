import React, {useEffect} from 'react';
let score = 0
let highScore = 0
let showHighScore = false
export default function Score(props) {

    let { win, setWin, setFinalScore, reset, setReset } = props

    useEffect(() => {
        if (reset === true) {
            score = 0
            showHighScore = true
            setFinalScore(0)
            setReset(false) 
        }
        if (win === true) {
            score++
            setFinalScore(score)
            setWin(false)
        }
        if (score > highScore) {
            highScore = score
        }
    })
    
    return (
        <div>
           {showHighScore && <span className='score'>Highscore: <strong>{highScore}</strong> </span>} 
           <span className='score'>Score: <strong>{score}</strong> </span> 
        </div>
    );
}