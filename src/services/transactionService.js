const TRANS_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/transactions';
    } else {
        return 'https://tix-fix-server.herokuapp.com/transactions';
    }
}

export const getAllBuyerTransactions = () =>
    fetch(`${TRANS_API()}/buyer`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => response.json());