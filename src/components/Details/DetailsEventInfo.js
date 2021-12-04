import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getEventDetails} from "../../services/eventsService";
import {convertMilitaryTime, formatDate} from "../../Utils/utils";

const displayLineup = (performersArray) => {
    let performersString = "";
    performersArray.map(result => {performersString += ", " + result.name;});
    const performersSplit = performersString.split(",");
    performersSplit.shift();
    const performers = performersSplit.join(",");
    return performers;
};

const DetailsEventInfo = () => {

    const {uniqueIdentifier} = useParams();
    const event = useSelector((state) => state.event_details[0]);
    const dispatch = useDispatch();
    useEffect(() => getEventDetails(dispatch, uniqueIdentifier), [uniqueIdentifier]);

    return (
        <>
            <div className="row mt-5">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img className="tix-profile-image img-thumbnail" src={event.performers[0].image} alt="event image" />
                </div>

                <div className="col-9">
                    <div className="card">
                        <h3 className="card-header h4">{event.title}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-light fw-bold">Add to Wish List</button>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Date & Time:</span> {formatDate(event.datetime_local)} at {convertMilitaryTime(event.datetime_local)}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Venue:</span> {event.venue.name}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Location:</span> {event.venue.address}, {event.venue.display_location}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Lineup:</span> {displayLineup(event.performers)}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Ticket Price:</span> ${event.stats.lowest_price}
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col d-grid">
                                        <button className="btn btn-success fw-bold" type="button">Buy Ticket</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default DetailsEventInfo;