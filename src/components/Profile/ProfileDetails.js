import React, {useEffect, useState} from "react";
import {logout} from "../../services/user-service";
import {useHistory} from "react-router-dom";
import {getReviewsForSeller} from "../../services/reviewService";

const ProfileDetails = ({currentUser}) => {
    const history = useHistory();
    const attemptLogout = () => {
        logout()
            .then(() => history.push('/home'))
    }

    const [rating, setRating] = useState(Number.NaN);
    useEffect(() => {
        if (currentUser && currentUser.role === 'SELLER') {
            getReviewsForSeller(currentUser._id)
                .then(dbReviews => {
                    let totalRating = 0;
                    dbReviews.forEach((review, index) => {
                        totalRating += review.score;
                    })
                    setRating((totalRating / dbReviews.length).toFixed(2));
                })
        }
    }, [currentUser])

    const editProfile = () => {
        history.push('/edit-profile')
    }

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="mt-2"><span className="fw-bold me-2">Username:</span> {currentUser.username}</div>
            <div className="mt-2"><span className="fw-bold me-2">Role:</span> {currentUser.role}</div>
            {currentUser.role === 'SELLER' && <div className="mt-2"><span className="fw-bold me-2">Average Rating: </span>{rating}</div>}
            <div className="mt-2"><span className="fw-bold me-2">Can't wait to see live:</span> {currentUser.artistInterest}</div>
            <div>
                <div className="fw-bold mt-2">Your private details:</div>
                <div className="fw-bold h4 mt-2">{currentUser.firstName}</div>
                <div className="fw-bold h4">{currentUser.lastName}</div>
                <div className="mt-2"><span className="fw-bold me-2">Zip Code:</span> {currentUser.zip}</div>
                <div className="mt-2"><span className="fw-bold me-2">Email:</span> {currentUser.email}</div>
            </div>
            <button className="btn rounded-pill btn btn-secondary btn-sm mt-2 mb-4"
                    onClick={ () => editProfile()}>
                Edit Profile
            </button>
            <button type="submit"
                    className="btn rounded-pill btn btn-danger btn-sm mt-2 ms-2 mb-4"
                    onClick={() => attemptLogout()}>
                Log Out
            </button>
        </>
    )
}

export default ProfileDetails;