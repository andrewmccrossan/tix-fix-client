const REVIEW_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/api/reviews';
    } else {
        return 'https://tix-fix-server.herokuapp.com/api/reviews';
    }
}

export const postVenueReview = (review, eventID) =>
    fetch(`${REVIEW_API()}/events/${eventID}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    });

export const postSellerReview = (review, sellerID) =>
    fetch(`${REVIEW_API()}/sellers/${sellerID}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json',
        },
        credentials: 'include'
    });

export const getReviewsForReviewer = (userID) =>
    fetch(`${REVIEW_API()}/reviewers/${userID}`)
        .then(response => response.json());

export const getReviewsForSeller = (sellerID) =>
    fetch(`${REVIEW_API()}/sellers/${sellerID}`)
        .then(response => response.json());

export const getInformativeReviewsForSeller = (sellerID) =>
    fetch(`${REVIEW_API()}/informativesellers/${sellerID}`)
        .then(response => response.json());

export const getInformativeReviewsForVenue = (venueID) =>
    fetch(`${REVIEW_API()}/venues/${venueID}`)
        .then(response => response.json());

export const postReviewToDoList = (eventID) =>
    fetch(`${REVIEW_API()}/todolist`, {
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