import React, {useEffect} from 'react';
let score = 0
let highScore = 0
let showHighScore = false
let scoreVisible = false
export default function Score(props) {

    let { win, setWin, lose, setLose, setFinalScore, reset, setReset } = props

    useEffect(() => {
        if (reset === true) {
            score = 0
            showHighScore = true
            setFinalScore(0)
            setReset(false) 
        }
        if (win === true) {
            scoreVisible = true
            score++
            setFinalScore(score)
            setWin(false)
        }
        if (score > highScore) {
            highScore = score
        }
        if (lose === true) {
            score--
            setLose(false)
        }
    })
    
    return (
        <div>
           {showHighScore && <span className='score'>Highscore: <strong>{highScore}</strong> </span>} 
           {scoreVisible && <span className='score'>Score: <strong>{score}</strong> </span>} 
        </div>
    );
}