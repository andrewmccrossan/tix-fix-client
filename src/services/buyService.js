const BUY_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/buy';
    } else {
        return 'https://tix-fix-server.herokuapp.com/buy';
    }
}

export const postBoughtTickets = (ticketsInfo) =>
    fetch(`${BUY_API()}/tickets`, {
        method: 'POST',
        body: JSON.stringify(ticketsInfo),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    }).then (response=> {
        if (!response.ok) {
            throw new Error()
        }
    });

export const postBuyWatchList = (eventID) =>
    fetch(`${BUY_API()}/watchlist`, {
        method: 'POST',
        body: JSON.stringify({eventID: eventID}),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    }).then (response=> {
        if (!response.ok) {
            throw new Error()
        }
    });

export const getBuyerInfo = () =>
    fetch(`${BUY_API()}/buyer`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());


export const getBuyerEventTransaction = (eventId) =>
    fetch(`${BUY_API()}/details/${eventId}`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());