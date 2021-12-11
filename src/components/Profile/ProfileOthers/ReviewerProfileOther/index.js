import React, {useEffect} from "react";
import ProfileDetailsOther from "../ProfileDetailsOther";
import ReviewsOther from "./ReviewsOther";

const ReviewerProfileOther = ({otherProfile}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetailsOther otherProfile={otherProfile}/>
                </div>
                <div className="col-8">
                    <ReviewsOther otherProfile={otherProfile}/>
                </div>
            </div>
        </>
    )
}
export default ReviewerProfileOther;