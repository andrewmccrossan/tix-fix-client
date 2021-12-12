import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory} from "react-router-dom";
import {getBuyerEventTransaction} from "../../../services/buyService";

const UpcomingTicketPurchase = ({ currentUser, eventBought, purchaseDetails}) => {
    const [event, setEvent] = useState({});
    useEffect( () => {
        if (eventBought) {
            getEventDetails2(eventBought).then(results => {setEvent(results)});
        }
    }, [eventBought])

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    return (
        <>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-9 align-self-center">
                            <div className="row fw-bold">
                                {event.short_title}
                            </div>
                            <div className="row">
                                Tickets Quantity: {purchaseDetails.qty}
                            </div>
                            <div className="row">
                                Price per ticket: ${purchaseDetails.price}
                            </div>
                        </div>
                        <div className="col-3 align-self-center">
                            <button type="button"
                                    className="btn btn-info btn-sm float-end"
                                    onClick={()=> detailsClickHandler(event.id)}>
                                More Details
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default UpcomingTicketPurchase;