import React, {useEffect, useState} from "react";
import BuyerProfile from "./BuyerProfile";
import SellerProfile from "./SellerProfile";
import ReviewerProfile from "./ReviewerProfile";
import './profile.css';
import TopNavBar from "../TopNavBar";
import {logout, profile} from "../../services/user-service";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    const [currentProfile, setCurrentProfile] = useState({
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
        profile().then(profile => {
            setCurrentProfile({userProfile: profile});
        });
    }, []);

    const attemptLogout = () => {
        logout()
            .then(() => history.push('/home'))
            .catch(error => {
                console.log(error);
                alert("Could not log you out. Please try again.");
            })
    }

    const getProfile = () => {
        if (currentProfile.userProfile.role === 'REVIEWER') {
            return <ReviewerProfile currentUser={currentProfile.userProfile}/>
        } else if (currentProfile.userProfile.role === 'SELLER') {
            return <SellerProfile currentUser={currentProfile.userProfile}/>
        } else {
            return <BuyerProfile currentUser={currentProfile.userProfile}/>
        }
    }

    return (
        <>
            <TopNavBar page={"profile"}/>
            <div className="container">
                {getProfile()}
                <button type="submit"
                        className="btn btn-primary mb-2 mt-3"
                        onClick={() => attemptLogout()}
                >Log Out</button>
            </div>
        </>
    )
}
export default Profile;