import React, {useEffect} from "react";
import ProfileDetails from "./ProfileDetails";
import AttendedEvents from "./AttendedEvents";
import UpcomingEvents from "./UpcomingEvents";
import WishList from "./WishList";
import EventsInArea from "./EventsInArea";
// import {useSelector, useDispatch} from "react-redux";
// import {getCurrentProfile} from "../../../../services/profileService";
// import Search from "../Search";

const BuyerProfile = ({currentUser}) => {
    // const profileData = useSelector((state) => state.profile);
    // const dispatch = useDispatch();
    // useEffect(() => getCurrentProfile(dispatch), []);

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-6">
                            <AttendedEvents/>
                        </div>
                        <div className="col-6">
                            <UpcomingEvents/>
                        </div>
                    </div>
                    <WishList/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default BuyerProfile;