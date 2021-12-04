import React, {useEffect, useState} from "react";
import EventCardItem from "../EventCardItem";
import {getSportsEvents} from "../../../services/eventsService";
import {random} from "../../../Utils/utils";

const GeneralSports = () => {
    const randomNum = random(0,7);
    const [sports, setSports] = useState([]);
    useEffect(() => {getSportsEvents().then(results => {setSports(results.slice(randomNum, randomNum+3))})}, []);
    return(
        <>
            <div className="row">
                <h3 className="mt-2">Popular Sports Events</h3>
                <div className="row mt-2">
                    {
                        sports.map(sport => {
                            return (<div className="col-4">
                                <EventCardItem event={sport} key={sport.id}/>
                            </div>);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default GeneralSports;