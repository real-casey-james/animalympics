import React, { useState }  from 'react';

import Duplicate from './Duplicate';

let showInstructions = true

export default function DuplicateContainer({ handleWin, setPaused } ) {
    const [showInstr, setShowInstr] = useState(true)
    document.body.style.backgroundColor = '#ace698'
    
    function handleClick () {
        setShowInstr(false)
    }
    return (
        <div className='duplicateContainer' onClick={() => handleClick()}>
            {showInstr && <p className='instructionText'>click on bugs</p>}
           <Duplicate setPaused={setPaused} handleWin={() => handleWin()} /> 
        </div>
    );
}

