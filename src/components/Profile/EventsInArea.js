import React, {useEffect, useState} from "react";
import {getEventsInArea} from "../../services/eventsService"
import {useHistory} from "react-router-dom";
import {convertMilitaryTime, formatDate} from "../../Utils/utils";

const EventsInArea = ({currentUser}) => {

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    const [eventsInArea, setEventsInArea] = useState([]);
    useEffect(() => {
        if (currentUser.zip) {
            getEventsInArea(currentUser.zip).then(events => {
                setEventsInArea(events);
            });
        }
    }, [currentUser.zip]);


    return (
        <>

            <div className="card mt-4">
                <h3 className="card-header h4">Popular Events Near You</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsInArea.length > 0 ? (eventsInArea.slice(0,5).map(event => {
                            return (
                                <li key={event.id} className="list-group-item float-start">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-7 col-lg-9 align-self-center">
                                                <div className="row fw-bold">
                                                    {event.short_title}
                                                </div>

                                                <div className="row">
                                                    {formatDate(event.datetime_local)} at {convertMilitaryTime(event.datetime_local)}
                                                </div>

                                                <div className="row">
                                                    {event.venue.city.concat(", ", event.venue.state)}
                                                </div>
                                            </div>
                                            <div className="col-5 col-lg-3 align-self-center ">
                                                <div className="row d-grid gap-2">
                                                    <div className="btn-group-justified">
                                                        <div className=" btn-group align-self-center d-flex justify-content-end">
                                                            <button type="button"
                                                                    className="btn btn-info btn-sm float-end"
                                                                    onClick={()=> detailsClickHandler(event.id)}>
                                                                More Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            );

                        })) : <li className="list-group-item">No Events In Your Area</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default EventsInArea;