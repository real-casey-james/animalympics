import React from 'react'

export default function End (props) {
    document.body.style.backgroundColor = 'white'
    let {score, setPaused, resetScore} = props
    setPaused(true)
    return (
        <div className='end'>
            <img className='deer' src={'./images/deer-facing-right-svgrepo-com.svg'} />
            <img className='lion' src={'./images/lion-facing-right-svgrepo-com.svg'} />
            <h3>Congratulations, you finished!</h3>
            <h4>You got <strong>{score}</strong> points! </h4>
            <h2 onClick={resetScore}>try again?</h2>
        </div>
    )
}