import sportsData from './data/events-sports.json';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const events_sports = (state = sportsData, action) => {
    const randomNum = random(0,2);
    switch (action.type) {
        case 'fetch-sports':
            if (randomNum === 1) {
                return(
                    action.sports.slice(0,3)
                );
            } else {
                return(
                    action.sports.slice(6,9)
                );
            }
            break;

        default:
            return(state);
    }
};

export default events_sports;