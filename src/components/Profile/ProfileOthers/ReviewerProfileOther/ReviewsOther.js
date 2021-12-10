import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getReviewsForReviewer} from "../../../../services/reviewService";

const ReviewsOther = ({otherProfile}) => {
    const [reviews, setReviews] = useState([])
    const history = useHistory();
    const profileClickHandler = (usernameParam) => {
        history.push(`/profile/${usernameParam}`);
    }

    useEffect(() => {
        if (otherProfile && otherProfile._id) {
            getReviewsForReviewer(otherProfile._id).then(dbReviews => {
                setReviews(dbReviews);
            });
        }
    }, [otherProfile]);

    return (
        <>
            <div className="card">
                <h3 className="card-header h4">Reviews Written</h3>
                <ul className="list-group list-group-flush">
                    {reviews.slice(0,5).map(review => {
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
                    })}
                </ul>
            </div>
        </>
    )
}
export default ReviewsOther;