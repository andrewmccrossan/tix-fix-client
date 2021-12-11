import React, {useEffect, useState} from "react";
import {getSellerInfo} from "../../../services/sellService";
import SellerWishListItem from "../../Profile/SellerProfile/SellerWishListItem";

const SellerHomeContent = () => {

    const [eventsWatching, setEventsWatching] = useState([]);
    useEffect(() => {getSellerInfo().then(results => {setEventsWatching(results.eventsWatchlist)})}, []);

    return (
        <>
            <div className="card mt-4 mb-4">
                <h3 className="card-header h4">Your Watch List Events</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsWatching.length > 0 ? (eventsWatching.map(eventID => {
                            return (<SellerWishListItem eventID={eventID} key={eventID}/>);
                        })) : <li className="list-group-item">Nothing Currently In Your Watch List</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default SellerHomeContent;