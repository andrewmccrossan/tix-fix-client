import React, {useEffect, useState} from "react";
import BuyerProfile from "./BuyerProfile";
import './profile.css';
import TopNavBar from "../TopNavBar";
import {profile} from "../../services/user-service";
// import {useSelector, useDispatch} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
// import Search from "../Search";

const Profile = () => {
    // const profileData = useSelector((state) => state.profile);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);
    const [currentProfile, setCurrentProfile] = useState({
        myProfile: {
            username: 'u',
            email: 'e',
            lastName: 'l',
            firstName: 'f',
            role: 'r'
        }
                                                         });
    useEffect(() => {
        profile().then(profile => {
            setCurrentProfile({myProfile: profile});
            console.log(currentProfile);
            console.log(profile);
        });
    });

    return (
        <>
            <TopNavBar page={"profile"}/>
            <div className="container">
                <BuyerProfile/>
                <h3>{currentProfile.myProfile.username}</h3>
                <h3>{currentProfile.myProfile.email}</h3>
                <h3>{currentProfile.myProfile.lastName}</h3>
                <h3>{currentProfile.myProfile.firstName}</h3>
                <h3>{currentProfile.myProfile.role}</h3>
                <h2>HELLOOOOOOOOOOOOOOOOO</h2>
            </div>
        </>
    )
}
export default Profile;