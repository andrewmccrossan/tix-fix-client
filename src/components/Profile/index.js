import React, {useEffect} from "react";
import BuyerProfile from "./BuyerProfile";
import './profile.css';
// import {useSelector, useDispatch} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
// import Search from "../Search";

const Profile = () => {
    // const profileData = useSelector((state) => state.profile);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);

    return (
        <>
            <BuyerProfile/>
        </>
    )
}
export default Profile;