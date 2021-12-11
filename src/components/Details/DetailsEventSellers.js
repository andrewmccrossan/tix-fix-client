import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getEventSellers} from "../../services/sellService";
import DetailsEventSellersItem from "./DetailsEventSellersItem";

const DetailsEventSellers = () => {

    const {uniqueIdentifier} = useParams();
    const [eventSellers, setEventSellers] = useState([]);

    useEffect(() => {
        getEventSellers(uniqueIdentifier).then(sellers => setEventSellers(sellers))
    }, [uniqueIdentifier]);

    return (
        <>
            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <h3 className="card-header h4">Resale Tickets </h3>
                        <ul className="list-group list-group-flush">
                            {
                                eventSellers.length > 0 ? (eventSellers.map(eventSeller => {
                                    return (<DetailsEventSellersItem eventSeller={eventSeller} key={eventSeller._id}/>);
                                })) : <li className="list-group-item">No Resale Tickets Have Been Posted For This Event</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsEventSellers;