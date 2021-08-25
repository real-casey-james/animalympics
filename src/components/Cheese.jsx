import React, { useState } from 'react';

import trap from '../images/mouse-trap-svgrepo-com.svg'
import mouse from '../images/clipart2128929.png'

export default function Cheese(props) {

    let randomGrid = new Array(9).fill(new Array(10).fill(0))
    let filledGrid = randomGrid.map((line) => {
        return line.map((cell) => {
            return Math.random() < 0.8 ? true : false
        })
    })

    const [grid, setGrid] = useState(filledGrid)
    // let testArray = [
    //     [true, false, true],
    //     [false, true, false],
    //     [true, false, true],
    // ]

    return (
        <div>
            <table>
            {grid.map((line) => {
                return <tr>
                {line.map((cell) => {
                    return cell ? <td className='mapSafe'></td>
                    : <td className='mapNotSafe'> <img className='trap' src={trap} alt="" /> </td>
                })}
                </tr>
            })}
            <img className='mouse' src={mouse} alt="" />
            </table>
        </div>
    );
}
