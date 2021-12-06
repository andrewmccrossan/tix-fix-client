import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEventsInArea, getZipCodeEvents} from "../../services/eventsService"
import {useHistory, useParams} from "react-router-dom";
import {convertMilitaryTime, formatDate} from "../../Utils/utils";
import {profile} from "../../services/user-service";

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

    // TODO -  Extract to a component
    return (
        <>

            <div className="card mt-4">
                <h3 className="card-header h4">Popular Events Near You</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsInArea.slice(0,5).map(event => {
                            return (

                                <li className="list-group-item float-start">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
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

                                            <div className="col">
                                                <button type="button"
                                                        className="btn btn-info btn-sm float-end mt-3"
                                                        onClick={()=> detailsClickHandler(event.id)}>
                                                    More Details
                                                </button>
                                                </div>
                                        </div>
                                    </div>
                                </li>

                            );

                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default EventsInArea;