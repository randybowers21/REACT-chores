import React, { useState } from 'react';
import './header.css'

function Header({setCurrentChore, getRandomChore}) {
    const [isNew, setIsNew] = useState(false)
    const createChore = () =>{
        setIsNew(true)
            setTimeout(() => {
                setIsNew(false)
            },2000) 
        setCurrentChore(getRandomChore())
    }


    return (
        <div>
            <h1 className='title'>Chore Picker 9000</h1>
            <button onClick={createChore} className='pickButton'>{isNew ? 'New Chore Picked!': 'Pick a Chore!'}</button>
        </div>
    );
}

export default Header;
