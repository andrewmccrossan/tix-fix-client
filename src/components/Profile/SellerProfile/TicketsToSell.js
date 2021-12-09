import React, {useEffect, useState} from "react";
import {getSellerInfo} from "../../../services/sellService";
import TicketsToSellItem from "./TicketsToSellItem";

const TicketsToSell = () => {

    const [ticketsSelling, setTicketsSelling] = useState([]);
    useEffect(() => {getSellerInfo().then(results => {setTicketsSelling(results.eventsSelling)})}, []);

    return (
        <>
            <div className="card mt-4">
                <h3 className="card-header h4">Tickets Currently Selling</h3>
                <ul className="list-group list-group-flush">
                    {
                        ticketsSelling.map(sellingItem => {
                            return (<TicketsToSellItem sellingItem={sellingItem} key={sellingItem.id}/>);
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default TicketsToSell;