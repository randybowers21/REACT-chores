import React, { useEffect, useState } from 'react';
import './content.css'

function Content({currentChore}) {
    const [isFrequencyHidden, setFrequencyHidden] = useState(true);
    const [isAreaHidden, setAreaHidden] = useState(true);
    const [isRoomHidden, setRoomHidden] = useState(true);
    const [isChoreHidden, setChoreHidden] = useState(true);

    useEffect(() => {
        setFrequencyHidden(true)
        setAreaHidden(true)
        setRoomHidden(true)
        setChoreHidden(true)
    },[currentChore])

    const toggleClass = (info,setterFunc) => {
        setterFunc(!info)
    }
    const revealAll = () => {
        setFrequencyHidden(false)
        setTimeout(() => setAreaHidden(false), 1000)
        setTimeout(() => setRoomHidden(false), 2000)
        setTimeout(() => setChoreHidden(false), 3000)
    }
    return (
        <div>
            <ul className='chore'>
                <li className='choreInfo'>You will be doing:</li>
                <li onClick={() => toggleClass(isFrequencyHidden, setFrequencyHidden)} className={isFrequencyHidden ? 'choreItem hidden' : 'choreItem'}>{currentChore.frequencyName}</li>
                <li className='choreInfo'>Working:</li>
                <li onClick={() => toggleClass(isAreaHidden, setAreaHidden)} className={isAreaHidden ? 'choreItem hidden' : 'choreItem'}>{currentChore.area === 'outsideChores' ? 'Outside' : 'Inside'}</li>
                <li className='choreInfo'>In the:</li>
                <li onClick={() => toggleClass(isRoomHidden, setRoomHidden)} className={isRoomHidden ? 'choreItem hidden' : 'choreItem'}>{currentChore.area === 'insideChores' ? currentChore.room : 'The Great Outdoors'}</li>
                <li className='choreInfo'>Doing the Chore of your dreams!</li>
                <li onClick={() => toggleClass(isChoreHidden, setChoreHidden)} className={isChoreHidden ? 'choreItem hidden' : 'choreItem'}>{currentChore.chore}</li>
                <li onClick={revealAll} className='revealButton'>Reveal All</li>
                <li className='disclaimer'>Limit one chore per day</li>
            </ul>
        </div>
    );
}

export default Content;
