import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory} from "react-router-dom";

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
                            <button type="button"
                                    className="btn btn-info btn-sm float-end mt-3"
                                    onClick={()=> detailsClickHandler(event.id)}>
                                Event Details
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default ToDoListItem;