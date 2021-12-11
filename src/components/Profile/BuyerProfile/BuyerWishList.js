import React, {useEffect, useState} from "react";
import {getBuyerInfo} from "../../../services/buyService";
import BuyerWishListItem from "./BuyerWishListItem";

const ToAttendEvents = () => {

    const [eventsWatching, setEventsWatching] = useState([]);
    useEffect(() => {getBuyerInfo().then(results => {setEventsWatching(results.eventsWishlist)})}, []);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Buyer Wish List</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsWatching.length > 0 ? (eventsWatching.map(eventID => {
                            return (<BuyerWishListItem eventID={eventID} key={eventID}/>);
                        })) : <li className="list-group-item">No Events In Your Wish Lists</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default ToAttendEvents;