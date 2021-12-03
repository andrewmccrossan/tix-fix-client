import React from "react";

const DetailsEventInfo = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-5">
                    <img className="tix-profile-image img-thumbnail" src={"/images/concert.jpg"} alt="event image" />
                </div>
                <div className="col-7">
                    <div className="card">
                        <h3 className="card-header h4">Event Title</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-9">
                                    </div>
                                    <div className="col-3">
                                        <button type="button" className="btn btn-info">Add to Wish List</button>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">Date and Time</li>
                            <li className="list-group-item">Venue</li>
                            <li className="list-group-item">Location</li>
                            <li className="list-group-item">Performers</li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        Ticket Price
                                    </div>
                                    <div className="col-6">
                                        <div className="d-grid">
                                            <button className="btn btn-success" type="button">Buy Ticket</button>
                                        </div>
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
export default DetailsEventInfo;