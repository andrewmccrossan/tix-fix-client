import React, {useEffect} from "react";
import BuyerProfile from "./BuyerProfile";
import './profile.css';
import TopNavBar from "../TopNavBar";
// import {useSelector, useDispatch} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
// import Search from "../Search";

const Profile = () => {
    // const profileData = useSelector((state) => state.profile);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);

    return (
        <>
            <TopNavBar page={"profile"}/>
            <div className="container">
                <BuyerProfile/>
            </div>
        </>
    )
}
export default Profile;