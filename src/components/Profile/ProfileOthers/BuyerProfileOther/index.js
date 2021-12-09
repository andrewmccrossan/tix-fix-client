import React, {useEffect} from "react";
import WishListOther from "./WishListOther";
import ProfileDetailsOther from "../ProfileDetailsOther";

const BuyerProfileOthers = ({otherProfile}, {currentUser}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetailsOther otherProfile={otherProfile}/>
                </div>
                <div className="col-8">
                    <WishListOther/>
                </div>
            </div>
        </>
    )
}
export default BuyerProfileOthers;