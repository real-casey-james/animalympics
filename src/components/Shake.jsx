import React from 'react'

export default function Shake (props) {

    return (
        <div className='shakeContainer-CJ  shake shake-hard'>
            <button className='shake-CJ' onClick={props.handleClick} >
                Click me
            </button>

        </div>
    )
}