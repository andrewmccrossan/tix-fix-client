import React, {useEffect, useState} from "react";
import {buyTicket} from "../../services/sellService";
import {useHistory, useParams} from "react-router-dom";
import {profile} from "../../services/user-service";

const DetailsEventSellersItem = ({eventSeller}) => {

    const {uniqueIdentifier} = useParams();
    const [eventID, setEventID] = useState('');
    const [currentProfile, setCurrentProfile] = useState({
        userProfile: {
            username: '',
            email: '',
            lastName: '',
            firstName: '',
            role: '',
            zip: '',
        }
    });

    const history = useHistory();

    const loginClickHandler = () => {
        history.push(`/login`);
    }

    useEffect(() => {setEventID(uniqueIdentifier)}, [uniqueIdentifier]);
    useEffect(() => {
        profile()
            .then(profile => {setCurrentProfile({userProfile: profile});})
    }, []);

    const handleBuyTicket = () => {
        if (eventID) {
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

    const buyButton = <button type="button" className="btn btn-success fw-bold btn-sm"
                              onClick={() => handleBuyTicket()}>Buy Seller's Ticket</button>
    const notLoggedInButton = <button className="btn btn-success fw-bold btn-sm" onClick={loginClickHandler} type="button">Sign In To Buy</button>

    const getBuyButton = () => {
        if (currentProfile.userProfile.role === 'BUYER') {
            return buyButton;
        } else if (currentProfile.userProfile.role === 'REVIEWER' || currentProfile.userProfile.role === 'SELLER') {

        } else {
            return notLoggedInButton;
        }
    }

    return (
        <>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-lg-3 align-self-center">
                            <span className="fw-bold me-2">Seller:</span>{eventSeller.sellerUsername}
                        </div>
                        <div className="col-3 align-self-center">
                            <span className="fw-bold me-2">Ticket Quantity:</span>{eventSeller.ticketQuantity}
                        </div>
                        <div className="col-3 align-self-center">
                            <span className="fw-bold me-2">Price Per Ticket:</span>${eventSeller.ticketPrice}
                        </div>
                        <div className="col-4 col-lg-3 align-self-center">
                            <div className="align-self-center d-flex justify-content-end pb-2">
                                {getBuyButton()}
                            </div>
                            <div className="align-self-center d-flex justify-content-end">
                                <button type="button"
                                        className="btn btn-info fw-bold btn-sm"
                                        onClick={() => {
                                            history.push(`/profile/${eventSeller.sellerUsername}`)
                                        }}>
                                See Seller's Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default DetailsEventSellersItem;