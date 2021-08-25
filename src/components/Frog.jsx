import React, { useState } from 'react';

import trap from '../images/mouse-trap-svgrepo-com.svg'
import frog from '../images/frog.png'
import lillypad from '../images/lillypad.png'

export default function Frog(props) {

    document.body.style.backgroundColor = '#03cafc'

    // let randomGrid = new Array(6).fill(new Array(10).fill(0))
    // let filledGrid = randomGrid.map((line) => {
    //     return line.map((cell) => {
    //         return Math.random() < 0.8 ? 1 : 0
    //     })
    // })

    const [frogPositionX, setFrogPositionX] = useState(0)
    const [frogPositionY, setFrogPositionY] = useState(40)
    const [frogDirection, setFrogDirection] = useState(0)

    let maze = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
            [0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
            [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    
    const [frogLocationX, setFrogLocationX] = useState(0)
    const [frogLocationY, setFrogLocationY] = useState(3)

    const [grid, setGrid] = useState(maze)

    function keyHandler (event) {
        if (event.key === 'ArrowRight') {
            if (maze[frogLocationY][frogLocationX + 1]) {
                setFrogPositionX(frogPositionX + 10)
                setFrogDirection(90)
                setFrogLocationX(frogLocationX + 1)
            }
        }
        if (event.key === 'ArrowLeft') {
            if (maze[frogLocationY][frogLocationX - 1]) {
                setFrogPositionX(frogPositionX - 10)
                setFrogDirection(270)
                setFrogLocationX(frogLocationX - 1)
            }
        }
        if (event.key === 'ArrowUp') { 
            if (maze[frogLocationY - 1][frogLocationX]) {
                setFrogPositionY(frogPositionY + 10)
                setFrogDirection(0)
                setFrogLocationY(frogLocationY - 1)
            }
        }
        if (event.key === 'ArrowDown') { 
            if (frogLocationY < 5 && maze[frogLocationY + 1][frogLocationX]) {
                setFrogPositionY(frogPositionY - 10)
                setFrogDirection(180)
                setFrogLocationY(frogLocationY + 1)
        }
        }
    }
        
    return (
        <div onKeyDown={keyHandler} className='pond'>
            <input className='hiddenInput' tabIndex="1" autoFocus />
            <table>
            {grid.map((line) => {
                return <tr>
                {line.map((cell) => {
                    return cell ? <td className='mapSafe'><img className='lillypad' src={lillypad} /></td>
                    : <td className='mapNotSafe'> 
                    {/* <img className='trap' src={trap} alt="" />  */}
                    </td>
                })}
                </tr>
            })}
            <img className='frog' src={frog} alt="" 
            style={{left: `${frogPositionX}vw`, bottom: `${frogPositionY}vh`, transform: `rotate(${frogDirection}deg)`}}
            />
            </table>
        </div>
    );
}
