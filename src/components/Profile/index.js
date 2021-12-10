import React, {useEffect, useState} from "react";
import BuyerProfile from "./BuyerProfile";
import SellerProfile from "./SellerProfile";
import ReviewerProfile from "./ReviewerProfile";
import './profile.css';
import TopNavBar from "../TopNavBar";
import {profile} from "../../services/user-service";
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
        profile()
            .then(profile => {setCurrentProfile({userProfile: profile});})
            .catch(() => {history.push('/login')});
    }, []);

    const getProfile = () => {
        if (currentProfile.userProfile.role === 'REVIEWER') {
            return <ReviewerProfile currentUser={currentProfile.userProfile}/>
        } else if (currentProfile.userProfile.role === 'SELLER') {
            return <SellerProfile currentUser={currentProfile.userProfile}/>
        } else if (currentProfile.userProfile.role === 'BUYER'){
            return <BuyerProfile currentUser={currentProfile.userProfile}/>
        }else{
            return <div> ERROR </div>
        }
    }

    return (
        <>
            <TopNavBar page={"profile"}/>
            <div className="container">
                {getProfile()}
            </div>
        </>
    )
}
export default Profile;