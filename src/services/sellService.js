const SELL_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/sell';
    } else {
        return 'https://tix-fix-server.herokuapp.com/sell';
    }
}

export const postSellTickets = (ticketsInfo) =>
    fetch(`${SELL_API()}/tickets`, {
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

export const postSellWatchList = (eventID) =>
    fetch(`${SELL_API()}/watchlist`, {
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

export const getSellerInfo = () =>
    fetch(`${SELL_API()}/seller`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());

export const getOtherSellerInfo = (sellerID) =>
    fetch(`${SELL_API()}/${sellerID}`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());

export const getEventSellers = (eventId) =>
    fetch(`${SELL_API()}/sellers/${eventId}`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());
