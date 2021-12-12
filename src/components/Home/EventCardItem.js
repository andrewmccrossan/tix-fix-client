import React from "react";
import {formatDate} from "../../Utils/utils";
import {useHistory} from "react-router-dom";

const EventCardItem = ({event}) => {

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    return (
        <>
            <div className="card mb-3">
                <div className="card-body" style={ {minHeight: "100px" }}>
                    <h5 className="card-title">{event.short_title}</h5>
                </div>
                <div>
                    <img src={event.performers[0].image}
                         alt="link image"
                         className="img-thumbnail mx-auto d-block"/>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{formatDate(event.datetime_local)}</li>
                    <li className="list-group-item">{event.venue.name}</li>
                    <li className="list-group-item">{event.venue.display_location}</li>
                </ul>
                <div className="card-body">
                    <button type="button"
                            className="btn  btn-info btn-sm w-100"
                            onClick={()=> detailsClickHandler(event.id)}>
                        More Details
                    </button>
                </div>
            </div>
        </>
    )
}
export default EventCardItem;