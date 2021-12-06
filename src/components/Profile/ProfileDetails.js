import React from "react";
import {logout} from "../../services/user-service";
import {useHistory} from "react-router-dom";

const ProfileDetails = ({currentUser}) => {

    const history = useHistory();
    const attemptLogout = () => {
        logout()
            .then(() => history.push('/home'))
            .catch(error => {
                console.log(error);
                alert("Could not log you out. Please try again.");
            })
    }

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="mt-2">Username: {currentUser.username}</div>
            <div className="mt-4">Role: {currentUser.role}</div>
            <div className="mt-4">Can't wait to see live: {currentUser.artistInterest}</div>
            <div className="mt-4">Followers: followingCount</div>
            <div className="mt-2">Following: followersCount</div>
            <div>
                <div className="fw-bold mt-4">Additional Profile Details (Not show to others, just user)</div>
                <div className="fw-bold h4 mt-2">{currentUser.firstName}</div>
                <div className="fw-bold h4">{currentUser.lastName}</div>
                <div className="mt-2">Zip Code: {currentUser.zip}</div>
                <div className="mt-2">Email: {currentUser.email}</div>
            </div>
            <button className="btn rounded-pill btn btn-secondary btn-sm mt-2">Edit Profile</button>
            <button type="submit" className="btn rounded-pill btn btn-danger btn-sm mt-2 ms-2" onClick={() => attemptLogout()}>Log Out</button>
        </>
    )
}
export default ProfileDetails;