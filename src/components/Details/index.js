import React from "react";
import DetailsEventInfo from "./DetailsEventInfo";
import TopNavBar from "../TopNavBar";
import DetailsEventSellers from "./DetailsEventSellers";
import DetailsEventReviews from "./DetailsEventReviews";

const Details = () => {
    return (
        <>
            <TopNavBar page={"details"}/>
            <div className="container">
                <DetailsEventInfo/>
                <DetailsEventSellers/>
                <DetailsEventReviews/>
            </div>
        </>
    )
}
export default Details;