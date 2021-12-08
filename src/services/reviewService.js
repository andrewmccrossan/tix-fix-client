const REVIEW_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/api/reviews';
    } else {
        return 'https://tix-fix-server.herokuapp.com/api/reviews';
    }
}

export const postReview = (review, eventID) =>
    fetch(`${REVIEW_API()}/events/${eventID}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    });