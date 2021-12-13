import React, {useEffect, useState} from "react";
import EventCardItem from "../EventCardItem";
import {getConcertEvents} from "../../../services/eventsService";
import {random} from "../../../Utils/utils";

const GeneralConcerts = () => {
    const randomNum = random(0,7);
    const [concerts, setConcerts] = useState([]);
    useEffect(() => {getConcertEvents().then(results => {setConcerts(results.slice(randomNum, randomNum+3))})}, []);
    return(
        <>
            <div className="row">
                <h3 className="mt-2">Popular Music Events</h3>
                <div className="row mt-2">
                    {
                        concerts.map(concert => {
                            return (<div key={concert.id} className="col-md-4">
                                <EventCardItem event={concert}/>
                            </div>);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default GeneralConcerts;