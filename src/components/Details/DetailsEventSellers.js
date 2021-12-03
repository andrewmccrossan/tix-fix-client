import React from "react";

const DetailsEventSellers = () => {
    return (
        <>
            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <h3 className="card-header h4">Resale Tickets </h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-8">
                                        Seller Name
                                    </div>
                                    <div className="col-1">
                                        Price
                                    </div>
                                    <div className="col-3">
                                        <button type="button" className="btn btn-primary">Buy Seller's Ticket</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsEventSellers;