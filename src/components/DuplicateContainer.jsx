import React from 'react';

import Duplicate from './Duplicate';

export default function DuplicateContainer(props) {
    
    document.body.style.backgroundColor = 'darkolivegreen'
    
    const {handleWin, handleClick, setPaused} = props
    return (
        <div className='duplicateContainer'>
           <Duplicate setPaused={setPaused} handleWin={() => handleWin()} handleClick={() => handleClick()}/> 
        </div>
    );
}

