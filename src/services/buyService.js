const BUY_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/buy';
    } else {
        return 'https://tix-fix-server.herokuapp.com/buy';
    }
}

export const postBoughtTickets = (ticketsInfo) =>
    fetch(`${BUY_API}`, {
        method: 'POST',
        body: JSON.stringify(ticketsInfo),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    }).then(response => response.json());