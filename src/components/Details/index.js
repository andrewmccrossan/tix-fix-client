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
            {/*<div className="d-block d-sm-none fa-2x">XS</div>
            <div className="d-none d-sm-block d-md-none fa-2x">S</div>
            <div className="d-none d-md-block d-lg-none fa-2x">M</div>
            <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
            <div className="d-none d-xxl-block fa-2x">XXL</div>*/}
        </>
    )
}
export default Details;