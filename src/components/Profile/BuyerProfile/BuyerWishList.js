import React, {useEffect, useState} from "react";
import {getSellerInfo} from "../../../services/sellService";
import SellerWishListItem from "../SellerProfile/SellerWishListItem";
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
                        eventsWatching.map(eventID => {
                            return (<BuyerWishListItem eventID={eventID} key={eventID}/>);
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default ToAttendEvents;