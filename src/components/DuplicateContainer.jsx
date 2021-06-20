import React from 'react';

import Duplicate from './Duplicate';

export default function DuplicateContainer(props) {
    
    document.body.style.backgroundColor = 'darkolivegreen'
    
    const {handleWin, handleClick} = props
    return (
        <div className='duplicateContainer'>
           <Duplicate handleWin={() => handleWin()} handleClick={() => handleClick()}/> 
        </div>
    );
}

