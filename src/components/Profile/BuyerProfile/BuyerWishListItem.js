import React, {useEffect, useState} from "react";
import {getEventDetails2} from "../../../services/eventsService";
import {useHistory} from "react-router-dom";
import {deleteBuyerWishListEvent} from "../../../services/buyService";

const BuyerWishListItem = ({eventID}) => {

    const [event, setEvent] = useState({});
    useEffect(() => {
        if (eventID) {
            getEventDetails2(eventID).then(results => {
                setEvent(results)
            });
        }
    }, [eventID])

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    //reference: https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
    const deleteEvent = (resultID) => {
        deleteBuyerWishListEvent(resultID)
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
                        <div className="col-7 col-lg-9 align-self-center">
                            <div className="row fw-bold">
                                {event.short_title}
                            </div>
                        </div>
                        <div className="col-5 col-lg-3 align-self-center">
                            <div className="row d-grid gap-2">
                                <div className="align-self-center d-flex justify-content-end">
                                    <button type="button"
                                            className="btn btn-info btn-sm align-self-center"
                                            onClick={()=> detailsClickHandler(event.id)}>
                                        Event Details
                                    </button>
                                </div>
                                <div className="align-self-center d-flex justify-content-end">
                                    <button type="button"
                                            className="btn btn-danger btn-sm align-self-end"
                                            onClick={()=> deleteEvent(event.id)}>
                                        Remove Event
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default BuyerWishListItem;