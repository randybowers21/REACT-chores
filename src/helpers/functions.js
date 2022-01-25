// import { dailyChores, weeklyChores, monthlyChores, locations } from './data'

// export const getRandomNum = (num) => {
//     return Math.random() * num;
// }

// export const getFrequencyName = (options) => {
//     const num = getRandomNum(options);
//     if(num < 1.8) {return 'Daily Chores'}
//     else if (num > 1.8 && num < 2.7){return 'Weekly Chores'}
//     else {return 'Monthly Chores'}
    
// }

// export const getArea = (frequency) => {
//     const area = Object.keys(frequency)
//     const randomIndex = Math.floor(getRandomNum(area.length));
//     return area[randomIndex]
// }
// export const getSpecificLocation = (areaName) => {
//     const locationsArr = locations[areaName];
//     const randomIndex = Math.floor(getRandomNum(locationsArr.length));
//     const location = locationsArr[randomIndex];
//     if(areaName === 'outside' || areaName === 'inside'){
//         return
//     }
//     return location;
// }
// const getChore = () => {
//     //get random num for frequency
//     const frequencyName = getFrequencyName(3)

//     let frequency = null;
//     if(frequencyName === 'Daily Chores'){frequency = dailyChores} 
//     else if(frequencyName === 'Weekly Chores'){frequency = weeklyChores}
//     else {frequency = monthlyChores}
//     // get area to work in
//     const areaName = getArea(frequency)
//     //get chore from area
//     const randomIndex = Math.floor(getRandomNum(frequency[areaName].length))
//     const choreName = frequency[areaName][randomIndex]
//     //get specific location for chore
//     getSpecificLocation(areaName)
//     // combine data
//     return { 
//         frequencyName,
//         frequency,
//         areaName,
//         choreName
//     }
// }
// console.log(getChore())

import { allData } from "./data";
const { chores, locations } = allData
const getObjectLength = (object) => {
    return  Object.keys(object).length;
} 
export const getRandomNum = (num) => {
    return Math.random() * num;
}
export const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
}

const getFrequencyName = (options) => {
    const length = getObjectLength(options);
    const randomNum = getRandomNum(length);
    if(randomNum < 2.3){return 'Daily Chores'}
    else if(randomNum > 2.3 && randomNum < 2.85){return 'Weekly Chores'}
    else {return 'Monthly Chores'}
};
const getFrequencyObject = (frequencyName) => {
    if(frequencyName === 'Daily Chores'){
        return chores.daily
    } else if(frequencyName === 'Weekly Chores'){
        return chores.weekly
    }
    return chores.monthly
};


const getInfo = (starterObject) => {
    const randomIndex = getRandomIndex(Object.keys(starterObject).length);
    const key = Object.keys(starterObject)[randomIndex]
    const object = starterObject[key];
        return {
            key,
            object
        }
};

const getSpecificLocation = (key) => {
    if(key==='outside' || key === '0') {
        return
    }
    const randomIndex = getRandomIndex(Object.keys(locations[key]).length);
    const location = Object.keys(locations[key])[randomIndex];
    return locations[key][location]
}

 export const getRandomChore = () => {
    const frequencyName = getFrequencyName(chores)
    const frequencyObject = getFrequencyObject(frequencyName)
    const area = getInfo(frequencyObject)
    const location =  getInfo(area.object)
    const chore = getInfo(location.object)
    const room = getSpecificLocation(location.key)
    return {
        frequencyName,
        area: area.key,
        location: location.key,
        room,
        chore: chore.object
    }
   
}



