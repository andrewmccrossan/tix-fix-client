import React, {useEffect, useState} from "react";
import {getSellerInfo} from "../../../services/sellService";
import {getBuyerInfo} from "../../../services/buyService";
import TicketsToSellItem from "../SellerProfile/TicketsToSellItem";
import UpcomingTicketPurchase from "./UpcomingTicketPurchase";
import {useHistory} from "react-router-dom";
import {profile} from "../../../services/user-service";

const UpcomingEvents = ( {currentUser} ) => {


    const [ticketsBought, setTicketsBought] = useState([]);
    useEffect(() => {getBuyerInfo().then(results => setTicketsBought(results.eventsBought))}, []);

    return (
        <>
            <div className="card">
                <h3 className="card-header h4">Your Upcoming Events</h3>
                <ul className="list-group list-group-flush">
                    {
                        ticketsBought.map(event => {
                            return (
                                            <UpcomingTicketPurchase currentUser={currentUser} eventBought={event} key={Date. now()}/>
                                    );
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default UpcomingEvents;