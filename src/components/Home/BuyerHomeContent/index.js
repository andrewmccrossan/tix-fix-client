import React, {useEffect, useState} from "react";
import BuyerWishList from "../../Profile/BuyerProfile/BuyerWishList";
import {getBuyerInfo} from "../../../services/buyService";
import BuyerWishListItem from "../../Profile/BuyerProfile/BuyerWishListItem";

const BuyerHomeContent = () => {

    const [eventsWatching, setEventsWatching] = useState([]);
    useEffect(() => {getBuyerInfo().then(results => {setEventsWatching(results.eventsWishlist)})}, []);

    return (
    <>
        <div className="card mt-4 mb-4">
            <h3 className="card-header h4"> Your Wish List Events</h3>
            <ul className="list-group list-group-flush">
                {
                    eventsWatching.map(eventID => {
                        return (<BuyerWishListItem eventID={eventID} key={eventID}/>);
                    })
                }
            </ul>
        </div>
    </>

    );
}

export default BuyerHomeContent;