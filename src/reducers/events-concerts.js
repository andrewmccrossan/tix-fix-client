import concertsData from './data/events-concerts.json';

const events_concerts = (state = concertsData, action) => {
    switch (action.type) {
        case 'fetch-concerts':
            return(
                action.concerts.slice(4)
            );
            break;
        default:
            return(state);
    }
};

/*const events_concerts = (state = concertsData) => {
    return(state);
};*/
export default events_concerts;