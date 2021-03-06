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
            <div className="card">
                <h3 className="card-header h4">Reviews Written</h3>
                <ul className="list-group list-group-flush">
                    {
                        reviews.length > 0 ? (reviews.slice(0,5).map(review => {
                            return(
                                <li key={review.text + review.revieweeName + review.score} className="list-group-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6 col-lg-8 align-self-center">
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
                                                <div className="col-6 col-lg-4 align-self-center">
                                                    <button type="button"
                                                            className="btn btn-info btn-sm float-end"
                                                            onClick={() => profileClickHandler(review.revieweeName)}>
                                                        See Seller's Profile
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