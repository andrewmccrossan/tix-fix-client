import React from "react";
import ProfileDetailsOther from "../ProfileDetailsOther";
import TicketsToSellOther from "./TicketsToSellOther";
import SellerReviewsOther from "./SellerReviewsOther";

const SellerProfileOther = ({otherProfile}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetailsOther otherProfile={otherProfile}/>
                </div>
                <div className="col-8">
                    <TicketsToSellOther otherProfile={otherProfile}/>
                    <SellerReviewsOther otherProfile={otherProfile}/>
                </div>
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
export default SellerProfileOther;