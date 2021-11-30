import concertsData from './data/events-concerts.json';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const events_concerts = (state = concertsData, action) => {
    const randomNum = random(0,2);
    switch (action.type) {
        case 'fetch-concerts':
            if (randomNum === 1) {
                return(
                    action.concerts.slice(0,3)
                );
            } else {
                return(
                    action.concerts.slice(7)
                );
            }
            break;
        default:
            return(state);
    }
};

export default events_concerts;