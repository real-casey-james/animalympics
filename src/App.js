import { useState } from 'react';
import './App.css';

import Score from './components/Score'
import Timer from './components/Timer'
import Start from './components/Start'
import FeedMe from './components/FeedMe'
import MoveAway from './components/MoveAway'
import DuplicateContainer from './components/DuplicateContainer'
import Fish from './components/Fish'
import Race from './components/Race'
import Letters from './components/Letters'
import FoodFall from './components/FoodFall';
import FoodFallInstr from './components/FoodFallInstr';
import ClickLots from './components/ClickLots'
import SwatFlies from './components/SwatFlies';
import End from './components/End'

import Birds from './components/Birds';

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
        <FeedMe paused={paused} setPaused={setPaused} handleWin={() => handleWin()} />,
        <Birds setPaused={setPaused} handleWin={() => handleWin()} />,
        <Fish setPaused={setPaused} handleWin={() => handleWin()}/>,
        <MoveAway setPaused={setPaused} handleClick={() => handleWin()}  losePoint={losePoint} />,
        <FoodFallInstr advanceComponent={advanceComponent} />,
        <FoodFall handleWin={() => handleWin()} losePoint={losePoint} setPaused={setPaused} />,
        <SwatFlies setPaused={setPaused} handleWin={() => handleWin()} losePoint={losePoint}/>,
        <Letters handleWin={() => handleWin()} losePoint={losePoint} setPaused={setPaused} />,
        <ClickLots setPaused={setPaused} handleWin={() => handleWin()} />,
        <DuplicateContainer setPaused={setPaused} handleWin={() => handleWin()} handleClick={() => handleClick()} />,
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

    function advanceComponent () {
        counter++
        setComponent(arr[counter])
        setPaused(false)
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