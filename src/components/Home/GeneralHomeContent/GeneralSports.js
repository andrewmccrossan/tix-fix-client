import React, {useEffect} from "react";
import EventCardItem from "../EventCardItem";
import {useDispatch, useSelector} from "react-redux";
import {getSportsEvents} from "../../../services/eventsService";

const GeneralSports = () => {
    const sports = useSelector((state) => state.events_sports);
    const dispatch = useDispatch();
    useEffect(() => getSportsEvents(dispatch), []);
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