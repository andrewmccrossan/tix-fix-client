import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory} from "react-router-dom";
import {deleteReviewToDoListEvent} from "../../../services/reviewService";

const ToDoListItem = ({eventID}) => {

    const [event, setEvent] = useState({});
    useEffect(() => {
        if (eventID) {
            getEventDetails2(eventID).then(results => {
                setEvent(results)
            })
        }
    }, [eventID])

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    //reference: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
    const deleteEvent = (resultID) => {
        deleteReviewToDoListEvent(resultID)
            .then(() => window.location.reload(false))
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="row fw-bold">
                                {event.short_title}
                            </div>
                        </div>
                        <div className="col-3">
                            {<div className="d-grid">
                                <div className="row">
                                    <div className="col align-self-center">
                                        <button type="button"
                                                className="btn btn-info btn-sm align-self-center mt-3"
                                                onClick={()=> detailsClickHandler(event.id)}>
                                            Event Details
                                        </button>
                                    </div>
                                    <div className="col align-self-end">
                                        <button type="button"
                                                className="btn btn-danger btn-sm align-self-end mt-3"
                                                onClick={()=> deleteEvent(event.id)}>
                                            Remove Event
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default ToDoListItem;