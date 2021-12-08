const SELL_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/sell';
    } else {
        return 'https://tix-fix-server.herokuapp.com/sell';
    }
}

const BUY_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/buy';
    } else {
        return 'https://tix-fix-server.herokuapp.com/buy';
    }
}

// TODO - This is incomplete
export const postSellTickets = (ticketsInfo) =>
    fetch(`${SELL_API}`, {
        method: 'POST',
        body: JSON.stringify(ticketsInfo),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    }).then(response => response.json());

// TODO - This is incomplete
export const postBoughtTickets = (ticketsInfo) =>
    fetch(`${BUY_API}`, {
        method: 'POST',
        body: JSON.stringify(ticketsInfo),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    }).then(response => response.json());