import React, {useEffect, useState} from "react";
import {getInformativeReviewsForSeller} from "../../../services/reviewService";
import {useHistory} from "react-router-dom";


const SellerReviews = ({currentUser}) => {
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (currentUser && currentUser._id && currentUser.role === 'SELLER') {
            getInformativeReviewsForSeller(currentUser._id)
                .then(dbReviews => {setReviews(dbReviews)})
        }
    }, [currentUser])

    return (
        <div className="card mt-4">
            <h3 className="card-header h4">Reviews Of This Seller</h3>
            <ul className="list-group list-group-flush">
                {
                    reviews.length > 0 ? (reviews.slice(0,5).map(review => {
                        return(
                            <li className="list-group-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 col-lg-7 col-xl-8 align-self-center">
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
                                        <div className="col-6 col-lg-5 col-xl-4 align-self-center">
                                                <button type="button"
                                                        className="btn btn-info btn-sm float-end"
                                                        onClick={() => {
                                                            history.push(`/profile/${review.reviewerName}`)
                                                        }}>
                                                    See Reviewer's Profile
                                                </button>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })) : <li className="list-group-item">No Reviews Posted About Seller Yet</li>
                }
            </ul>
        </div>
    )
}
export default SellerReviews;