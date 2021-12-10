import React from "react";

const DetailsEventSellersItem = ({eventSeller}) => {

    return (
        <>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <span className="fw-bold me-2">Seller:</span>{eventSeller.sellerUsername}
                        </div>
                        <div className="col-3">
                            <span className="fw-bold me-2">Ticket Quantity:</span>{eventSeller.ticketQuantity}
                        </div>
                        <div className="col-3">
                            <span className="fw-bold me-2">Price Per Ticket:</span>${eventSeller.ticketPrice}
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-primary btn-sm ">Buy Seller's Ticket</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default DetailsEventSellersItem;