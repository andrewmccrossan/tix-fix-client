import React, {useEffect} from "react";
import ProfileDetailsOther from "../ProfileDetailsOther";
import ReviewsOther from "./ReviewsOther";
import ToDoListOther from "./ToDoListOther";

const ReviewerProfileOther = ({otherProfile}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetailsOther otherProfile={otherProfile}/>
                </div>
                <div className="col-8">
                    <ReviewsOther/>
                    <ToDoListOther/>
                </div>
            </div>
        </>
    )
}
export default ReviewerProfileOther;