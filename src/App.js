import { useState } from 'react';
import './App.css';
import Duplicate from './components/Duplicate'
import DuplicateContainer from './components/DuplicateContainer'
import End from './components/End'
import MoveAway from './components/MoveAway'
// import Overlay from './components/Overlay'
// import Shake from './components/Shake'
import Race from './components/Race'
import Timer from './components/Timer'
import Score from './components/Score'
import Start from './components/Start'
import FeedMe from './components/FeedMe'
import Fish from './components/Fish'

let counter = 1

export default function App () {
    
    let [move, setMove] = useState(false)
    let [win, setWin] = useState(false)
    let [paused, setPaused] = useState(true)
    let [finalScore, setFinalScore] = useState(0)
    let [reset, setReset] = useState(false)

    const arr = [
        <Start setPaused={setPaused} handleLose={handleLose} />,
        <FeedMe handleWin={() => handleWin()} />,
        <MoveAway handleClick={() => handleWin()} />,
        //     <Shake handleClick={handleClick} />,
        //     <Overlay handleClick={handleClick} />,
        <DuplicateContainer handleWin={() => handleWin()} handleClick={() => handleClick()} />,
        <Fish handleWin={() => handleWin()}/>,
        <Race handleClick={() => handleClick()} handleWin={() => handleWin()} />,
        <End score={finalScore} setPaused={setPaused} resetScore={resetScore} />
    ]
    
    const [component, setComponent] = useState(arr[0])
    
    function handleWin () {
        setWin(true)
    }

    function handleLose () {
        setComponent(arr[counter])
        counter++
        if (counter === arr.length) {
            counter = 0
        }
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
            <Timer reset={reset} paused={paused} setMove={() => setMove()} move={move} handleLose={() => handleLose()}/>
            <span className='title'>animalympics</span>
            <Score  setWin={() => setWin()} win={win} setFinalScore={setFinalScore} reset={reset} setReset={setReset}/>
        </div>
        {component}
        
        </>
    )
}