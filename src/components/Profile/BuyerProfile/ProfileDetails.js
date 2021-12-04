import React from "react";

const ProfileDetails = ({currentUser}) => {

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="fw-bold h4 mt-2">{currentUser.firstName}</div>
            <div className="fw-bold h4">{currentUser.lastName}</div>
            <div className="mt-2">Username: {currentUser.username}</div>
            <div className="mt-4">Bio/Interests</div>
            <div className="mt-4">Followers: followingCount</div>
            <div className="mt-2">Following: followersCount</div>
            <div className="mt-4">Role: {currentUser.role}</div>
            <div className="mt-2">Date Joined:</div>
            <div>
                <div className="fw-bold mt-4">Additional Profile Details (Not show to others, just user)</div>
                <div className="mt-2">Zip Code: {currentUser.zip}</div>
                <div className="mt-2">Email: {currentUser.email}</div>
            </div>
            <button className="btn rounded-pill btn btn-secondary btn btn-primary btn-sm mt-2">Edit Profile</button>
        </>
    )
}
export default ProfileDetails;