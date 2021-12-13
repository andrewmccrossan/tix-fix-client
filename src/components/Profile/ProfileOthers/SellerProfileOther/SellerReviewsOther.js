import React, {useEffect, useState} from "react";
import {getInformativeReviewsForSeller} from "../../../../services/reviewService";
import {useHistory} from "react-router-dom";

const SellerReviewsOther = ({otherProfile}) => {
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (otherProfile && otherProfile._id && otherProfile.role === 'SELLER') {
            getInformativeReviewsForSeller(otherProfile._id)
                .then(dbReviews => {setReviews(dbReviews)})
        }
    }, [otherProfile])

    return (
        <div className="card">
            <h3 className="card-header h4">Reviews Of This Seller</h3>
            <ul className="list-group list-group-flush">
                {
                    reviews.length > 0 ? (reviews.slice(0,5).map(review => {
                        return(
                            <li className="list-group-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 col-lg-7 align-self-center">
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
                                        {review.revieweeType === 'SELLER' &&
                                        <div className="col-6 col-lg-5 align-self-center">
                                            <button type="button"
                                                    className="btn btn-info btn-sm float-end"
                                                    onClick={() => {
                                                        history.push(`/profile/${review.reviewerName}`)
                                                    }}>
                                                Go To Reviewer's Profile
                                            </button>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })) : <li className="list-group-item">No Reviews Posted About The Seller Yet</li>
                }
            </ul>
        </div>
    )
}
export default SellerReviewsOther;