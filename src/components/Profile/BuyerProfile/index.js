import React from "react";
import ProfileDetails from "../ProfileDetails";
import UpcomingEvents from "./UpcomingEvents";
import WishList from "./BuyerWishList";
import EventsInArea from "../EventsInArea";

const BuyerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-md-8">
                    <UpcomingEvents currentUser={currentUser}/>
                    <WishList/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default BuyerProfile;