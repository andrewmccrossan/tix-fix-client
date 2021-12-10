import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getEventDetails, getEventDetails2} from "../../services/eventsService";
import {convertMilitaryTime, formatDate} from "../../Utils/utils";
import {profile} from "../../services/user-service";
import {postReview} from "../../services/reviewService";
import {postSellTickets, postSellWatchList} from "../../services/sellService";
import {postBoughtTickets, postBuyWatchList} from "../../services/buyService";

const displayLineup = (performersArray) => {
    let performersString = "";
    performersArray.map(result => {performersString += ", " + result.name;});
    const performersSplit = performersString.split(",");
    performersSplit.shift();
    return performersSplit.join(",");
};


const DetailsEventInfo = () => {

    const history = useHistory();
    const {uniqueIdentifier} = useParams();
    // const event = useSelector((state) => state.event_details[0]);
    // const dispatch = useDispatch();
    // useEffect(() => getEventDetails(dispatch, uniqueIdentifier), [uniqueIdentifier]);
    const [event, setEvent] = useState({
        id: 1,
        stats:
            {
                lowest_price: 1
            },
        performers: [
            {
                image: ''
            }
        ],
        title: '',
        datetime_local: '2022-02-20T19:30:00',
        venue: {
            name: '',
            address: '',
            display_location: '',
        }
    });


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

    const [showMainActionButton, setShowMainActionButton] = useState(false);

    const [buyingTicketInfo, setBuyingTicketInfo] = useState({eventID: event.id, qty: 1, price: event.stats.lowest_price});
    const [sellingTicketInfo, setSellingTicketInfo] = useState({eventID: event.id, qty: 1, price: 1});
    const [review, setReview] = useState({score: 3, text: '', date: Date.now(), revieweeType: 'VENUE'});

    useEffect(() => {
        profile()
            .then(profile => {setCurrentProfile({userProfile: profile})})
            .catch(() => {});
    }, []);

    const loginClickHandler = () => {
        history.push(`/login`);
    }

    useEffect(() => {
        getEventDetails2(uniqueIdentifier)
            .then(foundEvent => {
                setEvent(foundEvent);
                setSellingTicketInfo({...sellingTicketInfo, eventID: foundEvent.id});
                setBuyingTicketInfo({...buyingTicketInfo, eventID: foundEvent.id, price: foundEvent.stats.lowest_price});
            })
    }, [uniqueIdentifier]);

    const buyButton = <button className="btn btn-success fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Buy Tickets</button>
    const sellButton = <button className="btn btn-success fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Sell Your Tickets</button>
    const writeButton = <button className="btn btn-success fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Write a Venue Review</button>
    const notLoggedInButton = <button className="btn btn-success fw-bold" onClick={loginClickHandler} type="button">Sign In to Buy Ticket</button>

    const getButton = () => {
        if (currentProfile.userProfile.role === 'SELLER') {
            return sellButton;
        } else if (currentProfile.userProfile.role === 'REVIEWER') {
            return writeButton;
        } else  if (currentProfile.userProfile.role === 'BUYER') {
            return buyButton;
        } else {
            return notLoggedInButton;
        }
    }

    const addToSellWatchList = () => {
        postSellWatchList(event.id.toString())
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log(error);
            })
    }

    const addToBuyWatchList = () => {
        postBuyWatchList(event.id.toString())
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log(error);
            })
    }

    const buyWishList = <button className="btn btn-light fw-bold" onClick={addToBuyWatchList} type="button">Add to Buy Wish List</button>
    const sellWishList = <button className="btn btn-light fw-bold" onClick={addToSellWatchList} type="button">Add to Sell Watch List</button>
    const reviewWishList = <button className="btn btn-light fw-bold" type="button">Add to Review To-do List</button>
    const notLoggedWishList = <button className="btn btn-secondary fw-bold" type="button" onClick={loginClickHandler}>Login to save event</button>

    const getWishList = () => {
        if (currentProfile.userProfile.role === 'SELLER') {
            return sellWishList;
        } else if (currentProfile.userProfile.role === 'REVIEWER') {
            return reviewWishList;
        } else if (currentProfile.userProfile.role === 'BUYER') {
            return buyWishList;
        }else {
            return notLoggedWishList;
        }
    }

    const getDropDown = () => {
        if (currentProfile.userProfile.role === 'SELLER') {
            return sellDropDown;
        } else if (currentProfile.userProfile.role === 'REVIEWER') {
            return reviewDropDown;
        } else if (currentProfile.userProfile.role === 'BUYER') {
            return buyDropDown;
        }
    }

    const sellTickets = () => {
        postSellTickets(sellingTicketInfo)
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log(error);
            })
    }

    const sellDropDown =
        <>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label className="col-form-label mt-4 fw-bold" htmlFor="inputDefault">Quantity</label>
                        <input type="number"
                               className="form-control"
                               placeholder={sellingTicketInfo.qty}
                               value = {sellingTicketInfo.qty}
                               onChange={ (event) => setSellingTicketInfo({...sellingTicketInfo, qty: parseInt(event.target.value)}) }
                               id="inputDefault"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="col-form-label mt-4 fw-bold" htmlFor="inputDefault">Price ($)</label>
                        <input type="number"
                               className="form-control"
                               placeholder= {sellingTicketInfo.price}
                               value = {sellingTicketInfo.price}
                               onChange={ (event) => setSellingTicketInfo({...sellingTicketInfo, price: parseInt(event.target.value)}) }
                               id="inputDefault"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col fw-bold me-2 mt-2 ">
                        Total:
                        ${ sellingTicketInfo.price * sellingTicketInfo.qty }
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 d-grid mt-2 ">
                        <button className="btn btn-success fw-bold"
                                onClick={() => {
                                    sellTickets();
                                    setShowMainActionButton(!showMainActionButton);
                                }}
                                type="button"> Sell
                        </button>
                    </div>
                    <div className="col-2 d-grid mt-2">
                        <button className="btn btn-danger fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Cancel</button>
                    </div>
                </div>
            </div>
        </>

    const submitReview = () => {
        setReview({...review, date: Date.now()});
        postReview(review, event.id.toString())
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log('Error submitting review.');
                console.log(error);
            })
    }

    const reviewDropDown =
        <>
            <div className="row">
                <div className="form-group">
                    <label htmlFor="exampleTextarea"
                           className="form-label mt-4">Review Text
                    </label>
                    <textarea className="form-control"
                              id="exampleTextarea"
                              rows="3"
                              placeholder="Tell us what you think of this event"
                              onChange={(event) => setReview({...review, text: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1"
                           className="form-label mt-4">Score
                    </label>
                    <select className="form-select"
                            id="exampleSelect1"
                            onChange={(event) => setReview({...review, score: parseInt(event.target.value)})}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-10 d-grid mt-2 ">
                        <button className="btn btn-success fw-bold"
                                onClick={() => {
                                    submitReview();
                                    setShowMainActionButton(!showMainActionButton);
                                }}
                                type="button"> Post Review
                        </button>
                    </div>
                    <div className="col-2 d-grid mt-2">
                        <button className="btn btn-danger fw-bold" onClick={() => setShowMainActionButton(!showMainActionButton)} type="button">Cancel</button>
                    </div>
                </div>
            </div>
        </>

    const buyTickets = () => {
        console.log(buyingTicketInfo)
        postBoughtTickets(buyingTicketInfo)
            .then(() => history.push('/profile'))
            .catch(error => {
                console.log(error);
            })
    }

    const buyDropDown =
        <>
            <div className="row">
                <div className="col d-grid">
                    <div className="form-group">
                        <label className="col-form-label mt-4 fw-bold" htmlFor="inputDefault">Quantity</label>
                        <input type="number"
                               className="form-control"
                               placeholder={buyingTicketInfo.qty}
                               value={buyingTicketInfo.qty}
                               onChange={ (event) => setBuyingTicketInfo({...buyingTicketInfo, qty: parseInt(event.target.value)}) }
                               id="inputDefault"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-grid fw-bold me-2 mt-2 ">
                        Total:
                        ${ event.stats.lowest_price * buyingTicketInfo.qty }
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 d-grid mt-2 ">
                        <button className="btn btn-success fw-bold"
                                onClick={() => {
                                    buyTickets();
                                    setShowMainActionButton(!showMainActionButton);
                                }}
                                type="button"> Buy
                        </button>
                    </div>
                    <div className="col-2 d-grid mt-2">
                        <button className="btn btn-danger fw-bold" onClick={() => {
                            setShowMainActionButton(!showMainActionButton)
                        }} type="button">Cancel</button>
                    </div>
                </div>
            </div>
        </>


    return (
        <>
            <div className="row mt-5">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img className="tix-profile-image img-thumbnail" src={event.performers[0].image} alt="event image" />
                </div>

                <div className="col-9">
                    <div className="card">
                        <h3 className="card-header h4">{event.title}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-6 d-grid">
                                        {getWishList()}
                                    </div>
                                    <div className="col-6"/>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Date & Time:</span> {formatDate(event.datetime_local)} at {convertMilitaryTime(event.datetime_local)}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Venue:</span> {event.venue.name}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Location:</span> {event.venue.address}, {event.venue.display_location}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Lineup:</span> {displayLineup(event.performers)}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold me-2">Tix-Fix Ticket Price:</span> ${event.stats.lowest_price}
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col d-grid">
                                        {!showMainActionButton && getButton()}
                                    </div>
                                </div>
                                {showMainActionButton && getDropDown()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsEventInfo;