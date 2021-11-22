import React from "react";
import {Link} from "react-router-dom";

const CardItem = () => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Event Name</h5>
                </div>
                <div className="border">
                    <img src="/images/concert.jpg"
                         alt="link image"
                         className="img-fluid wd-post-image1"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Possible Event details</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price</li>
                    <li className="list-group-item">Date and time</li>
                    <li className="list-group-item">Location</li>
                    <li className="list-group-item">Event Organizer</li>
                </ul>
                <div className="card-body">
                    <Link className="card-link" to="/details" >More Details</Link>
                </div>
            </div>
        </>
    )
}
export default CardItem;