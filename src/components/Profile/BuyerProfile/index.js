import React, {useEffect} from "react";
import ProfileDetails from "../ProfileDetails";
import UpcomingEvents from "./UpcomingEvents";
import WishList from "./WishList";
import EventsInArea from "../EventsInArea";

const BuyerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-8">
                    <UpcomingEvents currentUser={currentUser}/>
                    <WishList/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default BuyerProfile;