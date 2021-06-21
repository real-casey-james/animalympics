import { useState } from 'react';
import './App.css';

import DuplicateContainer from './components/DuplicateContainer'
import End from './components/End'
import MoveAway from './components/MoveAway'
import Race from './components/Race'
import Timer from './components/Timer'
import Score from './components/Score'
import Start from './components/Start'
import FeedMe from './components/FeedMe'
import Fish from './components/Fish'
import useSound from 'use-sound'
import next from './sounds/342749__rhodesmas__notification-01.wav'

let counter = 0

export default function App () {
    
    let [move, setMove] = useState(false)
    let [win, setWin] = useState(false)
    let [lose, setLose] = useState(false)
    let [paused, setPaused] = useState(true)
    let [finalScore, setFinalScore] = useState(0)
    let [reset, setReset] = useState(false)
    let [showTimer, setShowTimer] = useState(false)

    const [play] = useSound(next)

    const arr = [
        <Start setPaused={setPaused} setShowTimer={setShowTimer} handleLose={handleLose} />,
        <FeedMe setPaused={setPaused} handleWin={() => handleWin()} />,
        <MoveAway setPaused={setPaused} handleClick={() => handleWin()}  losePoint={losePoint} />,
        <DuplicateContainer setPaused={setPaused} handleWin={() => handleWin()} handleClick={() => handleClick()} />,
        <Fish setPaused={setPaused} handleWin={() => handleWin()}/>,
        <Race setPaused={setPaused} handleClick={() => handleClick()} handleWin={() => handleWin()} />,
        <End score={finalScore} setPaused={setPaused} resetScore={resetScore} setShowTimer={setShowTimer} />
    ]
    
    const [component, setComponent] = useState(arr[counter])
    
    function handleWin () {
        setWin(true)
    }

    function losePoint () {
        setLose(true)
    }

    function handleLose () {
        counter++
        if (counter === arr.length) {
            counter = 0
        }
        setComponent(arr[counter])
        if (counter > 1 && counter < arr.length - 1) {
            play()
        }
        setPaused(true)
    }

    function handleClick () {
        handleLose()
        setMove(true)
        setWin(true)
    }

    function resetScore () {
        handleLose()
        setReset(true)
    }

    return (
        <>
        <div className='topBar'>
            <Timer reset={reset} paused={paused} setMove={() => setMove()} move={move} handleLose={() => handleLose()}  showTimer={showTimer} />
            <span className='title'>animalympics</span>
            <Score setWin={() => setWin()} win={win} setLose={() => setLose()} lose={lose} setFinalScore={setFinalScore} reset={reset} setReset={setReset}/>
        </div>
        {component}
        </>
    )
}