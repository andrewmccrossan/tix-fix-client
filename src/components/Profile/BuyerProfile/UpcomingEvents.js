import React, {useEffect, useState} from "react";
import {getBuyerInfo} from "../../../services/buyService";
import UpcomingTicketPurchase from "./UpcomingTicketPurchase";

const UpcomingEvents = ( {currentUser} ) => {

    const [ticketsBought, setTicketsBought] = useState([]);
    useEffect(() => {getBuyerInfo().then(results => setTicketsBought(results.eventsBought))}, []);

    return (
        <>
            <div className="card">
                <h3 className="card-header h4">Your Upcoming Events</h3>
                <ul className="list-group list-group-flush">
                    {
                        ticketsBought.length > 0 ? (ticketsBought.map(event => {
                            return (<UpcomingTicketPurchase currentUser={currentUser} eventBought={event} key={Date. now()}/>);
                        })) : <li className="list-group-item">No Tickets Have Been Bought Yet</li>
                    }
                </ul>
            </div>
        </>
    )
}
export default UpcomingEvents;