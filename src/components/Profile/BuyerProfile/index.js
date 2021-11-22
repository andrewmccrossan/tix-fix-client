import React, {useEffect} from "react";
import ProfileDetails from "./ProfileDetails";
import AttendedEvents from "./AttendedEvents";
import ToAttendEvents from "./ToAttendEvents";
import WishList from "./WishList";
import EventsInArea from "./EventsInArea";
// import {useSelector, useDispatch} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
// import Search from "../Search";

const BuyerProfile = () => {
    // const profileData = useSelector((state) => state.profile);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-6">
                            <AttendedEvents/>
                        </div>
                        <div className="col-6">
                            <ToAttendEvents/>
                        </div>
                    </div>
                    <WishList/>
                    <EventsInArea/>
                </div>
            </div>
        </>
    )
}
export default BuyerProfile;