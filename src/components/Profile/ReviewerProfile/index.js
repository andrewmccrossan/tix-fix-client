import React from "react";
import ProfileDetails from "../ProfileDetails";
import EventsInArea from "../EventsInArea";
import Reviews from "./Reviews";
import ToDoList from "./ToDoList";

const ReviewerProfile = ({currentUser}) => {

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <ProfileDetails currentUser={currentUser}/>
                </div>
                <div className="col-8">
                    <Reviews currentUser={currentUser}/>
                    <ToDoList currentUser={currentUser}/>
                    <EventsInArea currentUser={currentUser}/>
                </div>
            </div>
        </>
    )
}
export default ReviewerProfile;