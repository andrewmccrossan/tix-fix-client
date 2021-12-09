import React from "react";
import {logout} from "../../services/user-service";
import {useHistory} from "react-router-dom";

const ProfileDetails = ({currentUser}) => {

    const history = useHistory();
    const attemptLogout = () => {
        logout()
            .then(() => history.push('/home'))
    }

    return (
        <>
            <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="profile image" />
            <div className="mt-2"><span className="fw-bold me-2">Username:</span> {currentUser.username}</div>
            <div className="mt-4"><span className="fw-bold me-2">Role:</span> {currentUser.role}</div>
            <div className="mt-4"><span className="fw-bold me-2">Can't wait to see live:</span> {currentUser.artistInterest}</div>
            <div>
                <div className="fw-bold mt-4">Additional Profile Details (Not show to others, just user)</div>
                <div className="fw-bold h4 mt-2">{currentUser.firstName}</div>
                <div className="fw-bold h4">{currentUser.lastName}</div>
                <div className="mt-2"><span className="fw-bold me-2">Zip Code:</span> {currentUser.zip}</div>
                <div className="mt-2"><span className="fw-bold me-2">Email:</span> {currentUser.email}</div>
            </div>
            <button className="btn rounded-pill btn btn-secondary btn-sm mt-2">Edit Profile</button>
            <button type="submit" className="btn rounded-pill btn btn-danger btn-sm mt-2 ms-2" onClick={() => attemptLogout()}>Log Out</button>
        </>
    )
}
export default ProfileDetails;