import React from 'react';

import Duplicate from './Duplicate';

export default function DuplicateContainer({ handleWin, setPaused } ) {
    
    document.body.style.backgroundColor = 'darkolivegreen'
    
    return (
        <div className='duplicateContainer'>
           <Duplicate setPaused={setPaused} handleWin={() => handleWin()} /> 
        </div>
    );
}

