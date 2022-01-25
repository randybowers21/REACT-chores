// export const dailyChores = {
//     bathroom: ['Sweep', 'Mop', 'Trash', 'Dust', 'Toilet', 'Mirrors'],
//     kitchen: ['Sweep', 'Mop', 'Trash', 'Dust'],
//     room:['Vacuum', 'Trash', 'Dust', 'Laundry']
// };

// export const weeklyChores = {
//     bathroom: ['Windows'],
//     kitchen: ['Windows', 'Regrigerator'],
//     room: ['Windows', 'Change Sheets'],
//     outside: ['Dog Poop','Weeding']
// };

// export const monthlyChores = {
//     inside: ['Baseboards', 'Laundry Room'],
//     outside: ['Sweep', 'Windows']
// };

// export const locations = {
//     bathroom: ['Spare Bath', 'Half Bath', 'Master Bath'],
//     kitchen: ['Kitchen', 'Dining Room', 'Entry Way'],
//     rooms: ['Living Room', 'Hallway', 'Spare Bed', 'Office', 'Master Bed', 'Master Closet']
// };

export const allData = {
    chores: {
        daily: {
            insideChores: {
                bathroom: ['Sweep', 'Mop', 'Trash', 'Dust', 'Toilet', 'Mirrors','Pick Up'],
                kitchen: ['Sweep', 'Mop', 'Trash', 'Dust','Pick Up'],
                room: ['Vacuum', 'Trash', 'Dust', 'Laundry','Pick Up'],
            },
            outsideChores: {
                outside: ['Try Again']
            },
        },
        weekly: {
            insideChores: {
                bathroom: ['Windows'],
                kitchen: ['Windows', 'Regrigerator'],
                room: ['Windows', 'Change Sheets'],
            },
            outsideChores: {
                outside: ['Weeding', 'Dog Poop']
            },
        },
        monthly: {
            insideChores: {
                bathroom: ['Clean Drawers', 'Clean Cabinet', 'Baseboards', 'Walls'],
                kitchen: ['Clean Drawers', 'Clean Cabinet', 'Baseboards', 'Walls'],
                room: ['Baseboards', 'Walls'],
            },
            outsideChores: {
                outside: ['Sweep', 'Windows']
            }
        },
    },
    locations: {
        bathroom: ['Spare Bath', 'Half Bath', 'Master Bath'],
        kitchen: ['Kitchen', 'Dining Room', 'Entry Way'],
        room: ['Living Room', 'Hallway', 'Spare Bed', 'Office', 'Master Bed', 'Master Closet']
    }
}