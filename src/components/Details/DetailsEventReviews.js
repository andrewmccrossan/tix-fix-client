import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getEventDetails2} from "../../services/eventsService";
import {getInformativeReviewsForVenue} from "../../services/reviewService";

const DetailsEventReviews = () => {
    const {uniqueIdentifier} = useParams();
    const [reviews, setReviews] = useState([])

    const history = useHistory();

    useEffect(() => {
        getEventDetails2(uniqueIdentifier)
            .then(foundEvent => getInformativeReviewsForVenue(foundEvent.venue.id)
            .then(dbReviews => {setReviews(dbReviews)}))
    }, [uniqueIdentifier]);

    return (
        <div className="card mt-4">
            <h3 className="card-header h4">Reviews Of This Venue</h3>
            <ul className="list-group list-group-flush">
                {
                    reviews.length > 0 ? (reviews.slice(0,5).map(review => {
                            return(
                                <li className="list-group-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-10">
                                                <div className="row fw-bold">
                                                    {`Reviewer: ${review.reviewerName}`}
                                                </div>
                                                <div className="row">
                                                    Rating: {review.score}
                                                </div>
                                                <div className="row">
                                                    {review.text}
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <button type="button"
                                                        className="btn btn-primary mt-1 mb-1"
                                                        onClick={() => {
                                                            history.push(`/profile/${review.reviewerName}`)
                                                        }}>
                                                    Go To Reviewer's Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })) : <li className="list-group-item">No Reviews Have Been Posted For This Venue Yet</li>
                }

            </ul>
        </div>
    )
}
export default DetailsEventReviews;