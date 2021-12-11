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
    const [otherProfile, setOtherProfile] = useState({
        _id: '',
        role: 'BUYER',
        username: '',
        artistInterest: '',
                                                     });
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
                    .then(() => {
                        if (currentProfile.userProfile.username === username) {
                            history.push('/profile');
                        }
                    })
                    .catch(() => {console.log('user is not logged in.')})
            })
            .catch((error) => {
                console.log(error);
                alert('That user ID does not exist.');
                history.push('/home');
            });
    }, [currentProfile.userProfile.username, history, username]);

    const getProfile = () => {
        if (otherProfile.role === 'REVIEWER') {
            return <ReviewerProfileOther otherProfile={otherProfile}/>
        } else if (otherProfile.role === 'SELLER') {
            return <SellerProfileOther otherProfile={otherProfile}/>
        } else {
            return <BuyerProfileOther otherProfile={otherProfile}/>
        }
    }

    return (
        <>
            <TopNavBar page={"other-profile"}/>
            <div className="container">
                {getProfile()}
            </div>
        </>
    )
}
export default ProfileOthers;