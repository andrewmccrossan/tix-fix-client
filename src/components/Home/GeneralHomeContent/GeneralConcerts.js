import React, {useEffect} from "react";
import EventCardItem from "../EventCardItem";
import {useDispatch, useSelector} from "react-redux";
import {getConcertEvents} from "../../../services/eventsService";

const GeneralConcerts = () => {
    const concerts = useSelector((state) => state.events_concerts);
    const dispatch = useDispatch();
    useEffect(() => getConcertEvents(dispatch), []);
    return(
        <>
            <div className="row">
                <h3 className="mt-2">Popular Music Events</h3>
                <div className="row mt-2">
                    {
                        concerts.map(concert => {
                            return (<div className="col-4">
                                <EventCardItem event={concert} key={concert.id}/>
                            </div>);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default GeneralConcerts;