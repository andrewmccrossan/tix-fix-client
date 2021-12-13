import React from "react";
import DetailsEventInfo from "./DetailsEventInfo";
import TopNavBar from "../TopNavBar";
import DetailsEventSellers from "./DetailsEventSellers";
import DetailsEventReviews from "./DetailsEventReviews";
import Footer from "../Home/Footer";

const Details = () => {
    return (
        <>
            <TopNavBar page={"details"}/>
            <div className="container pt-5">
                <DetailsEventInfo/>
                <DetailsEventSellers/>
                <DetailsEventReviews/>
                <hr/>
                <Footer/>
            </div>
        </>
    )
}
export default Details;