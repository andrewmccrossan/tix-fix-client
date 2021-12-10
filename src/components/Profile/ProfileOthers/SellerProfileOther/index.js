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
        </>
    )
}
export default SellerProfileOther;