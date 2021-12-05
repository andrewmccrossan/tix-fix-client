import React, {useEffect} from "react";
import ProfileDetails from "../BuyerProfile/ProfileDetails";
import EventsInArea from "../BuyerProfile/EventsInArea";
import TicketsToSell from "./TicketsToSell";
import SellerWishList from "./SellerWishList";

const SellerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-8">
                    <TicketsToSell/>
                    <SellerWishList/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default SellerProfile;