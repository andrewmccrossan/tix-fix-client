
const EVENT_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/events';
    } else {
        return 'https://tix-fix-server.herokuapp.com/events';
    }
}

export const getSportsEvents = () =>
    fetch(`${EVENT_API()}/sports`)
        .then(response => response.json());

export const getConcertEvents = () =>
    fetch(`${EVENT_API()}/concert`)
        .then(response => response.json());

export const getEventDetails = (dispatch, eventId) =>
    fetch(`${EVENT_API()}/details/${eventId}`)
        .then(response => response.json())
        .then(details => {
            dispatch({
                type: 'fetch-event-details',
                details
            })
        });

export const getZipCodeEvents = (dispatch, zipCode) =>
    fetch(`${EVENT_API()}/zipcode/${zipCode}`)
        .then(response => response.json())
        .then(events => {
            dispatch({
                type: 'fetch-events-zipcode',
                events
            })
        });