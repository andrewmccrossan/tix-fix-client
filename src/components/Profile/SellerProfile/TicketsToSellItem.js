import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory, useParams} from "react-router-dom";
import {deleteSellerSellingEvent} from "../../../services/sellService";

const TicketsToSellItem = ({sellingItem}) => {

    const [event, setEvent] = useState({});
    useEffect(() => {
        if (sellingItem && sellingItem.eventID) {
            getEventDetails2(sellingItem.eventID).then(results => {setEvent(results)})
        }
    }, [sellingItem])

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }


    //reference: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
    const deleteEvent = (sellingItem) => {
            deleteSellerSellingEvent(sellingItem)
                .then(() => window.location.reload(false))
                .catch(error => {
                    console.log(error);
                })
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
                                Tickets Quantity: {sellingItem.qty}
                            </div>
                            <div className="row">
                                Price per ticket: ${sellingItem.price}
                            </div>
                        </div>
                        <div className="col-3 align-self-center">
                            {<div className="d-grid">
                                <div className="row">
                                    <div className="col align-self-center">
                                        <button type="button"
                                                className="btn btn-info btn-sm align-self-center"
                                                onClick={()=> detailsClickHandler(event.id)}>
                                            More Details
                                        </button>
                                    </div>
                                    <div className="col align-self-end">
                                        <button type="button"
                                                className="btn btn-danger btn-sm align-self-end"
                                                onClick={()=> deleteEvent(sellingItem._id)}>
                                            Remove Event
                                        </button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default TicketsToSellItem;