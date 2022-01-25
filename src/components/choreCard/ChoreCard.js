import React, {useState} from 'react';
import Header from '../choreCard/header/Header'
import Content from '../choreCard/content/Content'
import { getRandomChore } from '../../helpers/functions'
import './chorecard.css'

function ChoreCard() {
    const [currentChore, setCurrentChore] = useState(getRandomChore())
    return (
        <div className='container'>
            <Header setCurrentChore={setCurrentChore} getRandomChore={getRandomChore}/>  
            <Content currentChore={currentChore}/>    
        </div>
    );
}

export default ChoreCard;
