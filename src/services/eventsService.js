
const EVENT_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/events';
    } else {
        return 'https://tix-fix-server.herokuapp.com/events';
    }
}

export const getSportsEvents = (dispatch) =>
    fetch(`${EVENT_API()}/sports`)
        .then(response => response.json())
        .then(sports => {
            dispatch({
                type: 'fetch-sports',
                sports
            })
        });

export const getConcertEvents = (dispatch) =>
    fetch(`${EVENT_API()}/concert`)
        .then(response => response.json())
        .then(concerts => {
            dispatch({
                type: 'fetch-concerts',
                concerts
            })
        });