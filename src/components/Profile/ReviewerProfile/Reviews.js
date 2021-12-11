import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getReviewsForReviewer} from "../../../services/reviewService";

const Reviews = ({currentUser}) => {
    const [reviews, setReviews] = useState([])
    const history = useHistory();
    const profileClickHandler = (usernameParam) => {
        history.push(`/profile/${usernameParam}`);
    }

    useEffect(() => {
        if (currentUser && currentUser._id) {
            getReviewsForReviewer(currentUser._id).then(dbReviews => {
                setReviews(dbReviews);
            });
        }
    }, [currentUser]);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Reviews Written</h3>
                <ul className="list-group list-group-flush">
                    {
                        reviews.length > 0 ? (reviews.slice(0,5).map(review => {
                            return(
                                <li className="list-group-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-10">
                                                {review.revieweeType === 'SELLER' &&
                                                <div className="row fw-bold">
                                                    {`Seller: ${review.revieweeName}`}
                                                </div>
                                                }
                                                {review.revieweeType === 'VENUE' &&
                                                <div className="row fw-bold">
                                                    {`Venue: ${review.revieweeName}`}
                                                </div>
                                                }
                                                <div className="row">
                                                    Rating: {review.score}
                                                </div>
                                                <div className="row">
                                                    {review.text}
                                                </div>
                                            </div>
                                            {review.revieweeType === 'SELLER' &&
                                            <div className="col-2">
                                                <button type="button"
                                                        className="btn btn-primary mt-1 mb-1"
                                                        onClick={() => profileClickHandler(review.revieweeName)}>
                                                    Go To Seller's Profile
                                                </button>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </li>
                            )
                        })) : <li className="list-group-item">No Reviews Posted Yet</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default Reviews;