import React, {useEffect, useState} from "react";
import {
    getReviewsForReviewer,
    getReviewsForSeller,
    postSellerReview
} from "../../../services/reviewService";
import {useHistory} from "react-router-dom";
import {profile} from "../../../services/user-service";

const ProfileDetailsOther = ({otherProfile}) => {
    const history = useHistory();
    const [rating, setRating] = useState(4.22);
    const [showMainActionButton, setShowMainActionButton] = useState(false);
    const [review, setReview] = useState({score: 3, text: '', date: Date.now(), revieweeType: 'SELLER'});

    const [currentUser, setCurrentProfile] = useState({
         userProfile: {
             username: '',
             email: '',
             lastName: '',
             firstName: '',
             role: '',
             zip: '',
         }
    });

    useEffect(() => {
        profile()
            .then(profile =>  {setCurrentProfile({userProfile: profile});})
            .then(() => {
                if (otherProfile.role === 'SELLER' && otherProfile) {
                    getReviewsForSeller(otherProfile._id)
                        .then(dbReviews => {
                            let totalRating = 0;
                            dbReviews.forEach((review, index) => {
                                totalRating += review.score;
                            })
                            setRating((totalRating / dbReviews.length).toFixed(2));
                        })
                }
            })
    }, [otherProfile])

    const submitReview = () => {
        setReview({...review, date: Date.now()});
        postSellerReview(review, otherProfile._id)
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log('Error submitting review.');
                console.log(error);
            })
    }

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="mt-2"><span className="fw-bold me-2">Username:</span> {otherProfile.username}</div>
            {otherProfile.role === 'SELLER' && <div className="mt-2"><span className="fw-bold me-2">Average Rating: </span>{rating}</div>}
            <div className="mt-2"><span className="fw-bold me-2">Role:</span> {otherProfile.role}</div>
            <div className="mt-2"><span className="fw-bold me-2">Can't wait to see live:</span> {otherProfile.artistInterest}</div>
            {otherProfile.role === 'SELLER' && currentUser && currentUser.username !== 'default-USER' &&
                 <div className="mt-4">
                 <div className="row">
                     <div className="col d-grid">
                         {!showMainActionButton && <button className="btn btn-success fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Write a Seller Review</button>}
                     </div>
                 </div>
                 {showMainActionButton && <>
                     <div className="row">
                         <div className="form-group">
                             <label htmlFor="exampleTextarea"
                                    className="form-label mt-4">Review Text
                             </label>
                             <textarea className="form-control"
                                       id="exampleTextarea"
                                       rows="3"
                                       placeholder="Tell us what you think of this seller"
                                       onChange={(event) => setReview({...review, text: event.target.value})}
                             />
                         </div>
                         <div className="form-group">
                             <label htmlFor="exampleSelect1"
                                    className="form-label mt-4">Score
                             </label>
                             <select className="form-select"
                                     id="exampleSelect1"
                                     onChange={(event) => setReview({...review, score: parseInt(event.target.value)})}
                             >
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                             </select>
                         </div>
                         <div className="row">
                             <div className="col-7 d-grid mt-2 ">
                                 <button className="btn btn-success fw-bold"
                                         onClick={() => {
                                             submitReview();
                                             setShowMainActionButton(!showMainActionButton);
                                         }}
                                         type="button"> Post Review
                                 </button>
                             </div>
                             <div className="col-2 d-grid mt-2">
                                 <button className="btn btn-danger fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Cancel</button>
                             </div>
                         </div>
                     </div>
                 </>}
                </div>
            }
        </>
    )
}
export default ProfileDetailsOther;