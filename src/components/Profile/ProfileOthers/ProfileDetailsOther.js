import React, {useEffect, useState} from "react";

const ProfileDetailsOther = ({otherProfile}) => {
    const [rating, setRating] = useState(4.5);

    useEffect(() => {
        // TODO - set the rating by fetching the average score from the server
    }, [])

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="mt-2"><span className="fw-bold me-2">Username:</span> {otherProfile.username}</div>
            {otherProfile.role === 'SELLER' && <div className="mt-2"><span className="fw-bold me-2">Average Rating:</span>TODO - FILL THIS IN WITH THE ACTUAL AVERAGE RATING</div>}
            <div className="mt-4"><span className="fw-bold me-2">Role:</span> {otherProfile.role}</div>
            <div className="mt-4"><span className="fw-bold me-2">Can't wait to see live:</span> {otherProfile.artistInterest}</div>
        </>
    )
}
export default ProfileDetailsOther;