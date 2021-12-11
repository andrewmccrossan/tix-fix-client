import React, {useEffect, useState} from "react";
import {getOtherSellerInfo} from "../../../../services/sellService";
import TicketsToSellOtherItem from "./TicketsToSellOtherItem";

const TicketsToSellOther = ({otherProfile}) => {

    const [ticketsSelling, setTicketsSelling] = useState([]);
    useEffect(() => {
        if (otherProfile && otherProfile._id) {
            getOtherSellerInfo(otherProfile._id).then(results => {setTicketsSelling(results.eventsSelling)});
        }
    }, [otherProfile]);

    return (
        <>
            <div className="card mb-4">
                <h3 className="card-header h4">Tickets Currently Selling</h3>
                <ul className="list-group list-group-flush">
                    {
                        ticketsSelling.map(sellingItem => {
                            return (<TicketsToSellOtherItem sellingItem={sellingItem} key={sellingItem.id}/>);
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default TicketsToSellOther;