import React, {useEffect, useState} from "react";
import BuyerProfileOther from "./BuyerProfileOther";
import SellerProfileOther from "./SellerProfileOther";
import ReviewerProfileOther from "./ReviewerProfileOther";
import '../profile.css';
import TopNavBar from "../../TopNavBar";
import {profile, userFromUsername} from "../../../services/user-service";
import {useHistory, useParams} from "react-router-dom";

const ProfileOthers = () => {
    const {username} = useParams();
    const [otherProfile, setOtherProfile] = useState({});
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
        userFromUsername(username)
            .then(pageProfile => {setOtherProfile(pageProfile);})
            .then(() => {
                profile()
                    .then(profile =>  {setCurrentProfile({userProfile: profile});})
                    .catch(() => {history.push('/login');})
            })
            .catch(() => {
                alert('That user ID does not exist.');
                history.push('/home');
            });
    }, []);

    const getProfile = () => {
        if (otherProfile.role === 'REVIEWER') {
            return <ReviewerProfileOther otherProfile={otherProfile} currentUser={currentProfile.userProfile}/>
        } else if (otherProfile.role === 'SELLER') {
            return <SellerProfileOther otherProfile={otherProfile} currentUser={currentProfile.userProfile}/>
        } else {
            return <BuyerProfileOther otherProfile={otherProfile} currentUser={currentProfile.userProfile}/>
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
export default ProfileOthers;