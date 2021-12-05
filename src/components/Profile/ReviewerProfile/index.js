import React, {useEffect} from "react";
import ProfileDetails from "../BuyerProfile/ProfileDetails";
import EventsInArea from "../BuyerProfile/EventsInArea";
import Reviews from "./Reviews";

const ReviewerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-8">
                    <Reviews/>
                    <EventsInArea/>
                </div>
            </div>
        </>
    )
}
export default ReviewerProfile;