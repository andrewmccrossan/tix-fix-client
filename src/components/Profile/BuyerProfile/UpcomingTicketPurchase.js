import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory} from "react-router-dom";

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
                        <div className="col-7 col-lg-9 align-self-center">
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
                        <div className="col-5 col-lg-3 align-self-center">
                            <div className="row d-grid gap-2">
                                <div className="btn-group-justified">
                                    <div className=" btn-group align-self-center d-flex justify-content-end pb-3">
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
        </>
    )
}
export default UpcomingTicketPurchase;