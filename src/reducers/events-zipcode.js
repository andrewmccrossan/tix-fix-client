const events_zipcode = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'fetch-events-zipcode':
                return(
                    action.events.slice(0,3)
                );

            break;

        default:
            return(state);
    }
};

export default events_zipcode;