import React, {useEffect, useState} from "react";
import {buyTicket} from "../../services/sellService";
import {useHistory, useParams} from "react-router-dom";

const DetailsEventSellersItem = ({eventSeller}) => {

    const {uniqueIdentifier} = useParams();
    const [eventID, setEventID] = useState('');

    const history = useHistory();

    useEffect(() => {setEventID(uniqueIdentifier)}, [uniqueIdentifier]);

    const handleBuyTicket = () => {
        if (eventID) {
            console.log(eventID);
            console.log(typeof eventID);
            buyTicket(eventSeller, eventID)
                .then((status) => {
                    if (!status.ok) {
                        throw new Error('Failed to buy ticket');
                    } else {
                        history.push("/profile");
                    }
                })
                .catch (error => console.log(error));
        } else {
            alert('Could not complete purchase.');
        }
    }

    return (
        <>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-4 align-self-center">
                            <span className="fw-bold me-2">Seller:</span>{eventSeller.sellerUsername}
                        </div>
                        <div className="col-3 align-self-center">
                            <span className="fw-bold me-2">Ticket Quantity:</span>{eventSeller.ticketQuantity}
                        </div>
                        <div className="col-3 align-self-center">
                            <span className="fw-bold me-2">Price Per Ticket:</span>${eventSeller.ticketPrice}
                        </div>
                        <div className="col-2 align-self-center">
                            <button type="button"

                                    className="btn btn-success fw-bold btn-sm"

                                    onClick={() => handleBuyTicket()}
                            >Buy Seller's Ticket</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default DetailsEventSellersItem;