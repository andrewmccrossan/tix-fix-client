import React from "react";
import ProfileDetails from "../ProfileDetails";
import EventsInArea from "../EventsInArea";
import TicketsToSell from "./TicketsToSell";
import SellerWishList from "./SellerWishList";
import SellerReviews from "./SellerReviews";

const SellerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-md-8">
                    <TicketsToSell/>
                    <SellerWishList/>
                    <SellerReviews currentUser={currentUser}/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default SellerProfile;