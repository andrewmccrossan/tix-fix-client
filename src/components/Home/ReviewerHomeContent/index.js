import React, {useEffect, useState} from "react";
import {getEventReviewsToDo} from "../../../services/reviewService";
import ToDoListItem from "../../Profile/ReviewerProfile/ToDoListItem";

const ReviewerHomeContent = ({currentUser}) => {
    const [eventsToDo, setEventsToDo] = useState([]);
    useEffect(() => {
        if (currentUser && currentUser._id) {
            getEventReviewsToDo(currentUser._id).then(results => {
                setEventsToDo(results.eventsToDoList)
            })
        }
    }, [currentUser]);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Review To-Do List</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsToDo.length > 0 ? (eventsToDo.map(eventID => {
                            return (<ToDoListItem eventID={eventID} key={eventID}/>);
                        })) : <li className="list-group-item">Nothing Currently In Your To-Do List</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default ReviewerHomeContent;