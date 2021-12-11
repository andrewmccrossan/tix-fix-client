import React, {useEffect, useState} from "react";
import {getOtherBuyerInfo} from "../../../../services/buyService";
import OtherBuyerWishListItem from "./OtherBuyerWishListItem";

const WishListOther = ( { otherProfile } ) => {
    const [eventsWatching, setEventsWatching] = useState([]);
    useEffect(() => {
        if (otherProfile && otherProfile._id) {
            getOtherBuyerInfo(otherProfile._id).then(results => {
                setEventsWatching(results.eventsWishlist)
            });
        }
    }, [otherProfile]);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Buyer Wish List</h3>
                <ul className="list-group list-group-flush">
                    {
                        eventsWatching.length > 0 ? (eventsWatching.map(eventID => {
                            return (<OtherBuyerWishListItem eventID={eventID} key={eventID}/>);
                        })) : <li className="list-group-item">User Has No Events Currently In The Wish List</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default WishListOther;