import eventDetailsData from './data/event-details.json';

const event_details = (state = eventDetailsData, action) => {
    switch (action.type) {
        case 'fetch-event-details':
            return(
                [action.details]
            );
            break;
        default:
            return(state);
    }
};

export default event_details;