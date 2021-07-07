import { useState } from 'react';
import './App.css';

import Score from './components/Score'
import Timer from './components/Timer'
import Start from './components/Start'
import FeedMe from './components/FeedMe'
import Birds from './components/Birds';
import WackMole from './components/WackMole'
import DuplicateContainer from './components/DuplicateContainer'
import Fish from './components/Fish'
import Race from './components/Race'
import Letters from './components/Letters'
import FoodFall from './components/FoodFall';
import ClickLots from './components/ClickLots'
import SwatFlies from './components/SwatFlies';
import End from './components/End'

import Scroll from './components/Scroll';

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
        <FoodFall handleWin={() => handleWin()} losePoint={losePoint} setPaused={setPaused} />,
        <WackMole setPaused={setPaused} handleClick={() => handleWin()} losePoint={losePoint} />,
        <SwatFlies setPaused={setPaused} handleWin={() => handleWin()} losePoint={losePoint} />,
        <Letters handleWin={() => handleWin()} losePoint={losePoint} setPaused={setPaused} />,
        <ClickLots setPaused={setPaused} handleWin={() => handleWin()} losePoint={losePoint} />,
        <DuplicateContainer setPaused={setPaused} handleWin={() => handleWin()} />,
        <Race setPaused={setPaused} handleWin={() => handleWin()} />,
        <Scroll setPaused={setPaused} handleWin={() => handleWin()} losePoint={losePoint} />,
        <End score={finalScore} setPaused={setPaused} resetScore={resetScore} setShowTimer={setShowTimer} />
    ]
    
    const [component, setComponent] = useState(arr[counter])
    
    function handleWin () { setWin(true) }

    function losePoint () { setLose(true) }

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